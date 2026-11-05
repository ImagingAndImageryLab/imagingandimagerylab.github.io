# Imaging & Imagery Lab

Website of the Imaging & Imagery Lab, Department of Psychology and Behavioral Sciences,
Zhejiang University — https://imagingandimagerylab.github.io

Built with the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme, the same
template as the lab's other sites. Pushing to `main` triggers GitHub Actions, which builds
the site and publishes it to `gh-pages`.

| path | |
|---|---|
| `_pages/index.md` | home |
| `_pages/people.md` | lab members |
| `_pages/manual.md` | lab manual + internal access |
| `assets/internal/` | encrypted bundles for lab members |

## Internal access

Each member gets a password that opens their own bundle. Bundles are encrypted with
PBKDF2-SHA256 (310k iterations) + AES-GCM and decrypted in the browser — nothing readable
is stored in this repository. The plaintext materials and the passwords never leave the
maintainer's machine; a lost password has to be reset by re-encrypting that bundle.
