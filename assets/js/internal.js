/* Internal access.
 *
 * Every member's materials are stored as an encrypted bundle under
 * assets/internal/. A bundle is plain JSON:
 *
 *   { "v": 1, "kdf": "PBKDF2-SHA256", "iter": 310000,
 *     "salt": "<base64>", "iv": "<base64>", "ct": "<base64>" }
 *
 * The key is derived from the password with PBKDF2 and the payload is
 * decrypted with AES-GCM in the browser. Nothing is decrypted on a server, and
 * the password never leaves this page — so a bundle is only readable by someone
 * who already has the password. That also means a lost password cannot be
 * recovered here: it has to be reset by re-encrypting the bundle.
 *
 * bundles.json lists the files to try; it contains no names or hints.
 */
(function () {
  "use strict";

  var form = document.getElementById("unlock-form");
  if (!form) return;

  var input = document.getElementById("unlock-password");
  var button = document.getElementById("unlock-button");
  var msg = document.getElementById("unlock-msg");
  var filesBox = document.getElementById("unlock-files");

  function b64ToBytes(b64) {
    var bin = atob(b64.replace(/\s+/g, ""));
    var out = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }

  function bytesToB64(bytes) {
    var bin = "";
    for (var i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    return btoa(bin);
  }

  function say(text, kind) {
    msg.textContent = text || "";
    msg.className = "msg" + (kind ? " " + kind : "");
  }

  function humanSize(n) {
    if (n < 1024) return n + " B";
    if (n < 1048576) return (n / 1024).toFixed(0) + " KB";
    return (n / 1048576).toFixed(1) + " MB";
  }

  async function deriveKey(password, salt, iterations) {
    var material = await crypto.subtle.importKey(
      "raw", new TextEncoder().encode(password), { name: "PBKDF2" }, false, ["deriveKey"]
    );
    return crypto.subtle.deriveKey(
      { name: "PBKDF2", salt: salt, iterations: iterations, hash: "SHA-256" },
      material,
      { name: "AES-GCM", length: 256 },
      false,
      ["decrypt"]
    );
  }

  async function tryBundle(url, password) {
    var res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return null;
    var bundle = await res.json();
    if (bundle.v !== 1) return null;
    var key = await deriveKey(password, b64ToBytes(bundle.salt), bundle.iter);
    try {
      var plain = await crypto.subtle.decrypt(
        { name: "AES-GCM", iv: b64ToBytes(bundle.iv) }, key, b64ToBytes(bundle.ct)
      );
      return JSON.parse(new TextDecoder().decode(plain));
    } catch (e) {
      return null;             // wrong password for this bundle
    }
  }

  function render(payload) {
    filesBox.innerHTML = "";
    var files = payload.files || [];
    if (!files.length) {
      say("Unlocked, but this bundle has no files yet.", "ok");
      return;
    }
    files.forEach(function (f) {
      var bytes = b64ToBytes(f.data);
      var blob = new Blob([bytes], { type: f.mime || "application/octet-stream" });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = f.name;
      a.textContent = f.name;
      var size = document.createElement("span");
      size.className = "size";
      size.textContent = "  ·  " + humanSize(bytes.length);
      a.appendChild(size);
      filesBox.appendChild(a);
    });
    filesBox.hidden = false;
    say("Unlocked" + (payload.label ? " — " + payload.label : "") + ".", "ok");
  }

  form.addEventListener("submit", async function (ev) {
    ev.preventDefault();
    var password = input.value;
    if (!password) return;

    button.disabled = true;
    filesBox.hidden = true;
    say("Checking…");

    try {
      if (!window.crypto || !crypto.subtle) {
        say("This browser cannot decrypt files here. Try a current browser over https.", "error");
        return;
      }
      var list = await (await fetch("assets/internal/bundles.json", { cache: "no-store" })).json();
      var urls = list.bundles || [];
      for (var i = 0; i < urls.length; i++) {
        var payload = await tryBundle(urls[i], password);
        if (payload) {
          render(payload);
          return;
        }
      }
      say("That password does not match any bundle. Check it, or ask the Lab Director.", "error");
    } catch (e) {
      say("Could not reach the files. Check your connection and try again.", "error");
    } finally {
      button.disabled = false;
    }
  });
})();
