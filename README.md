# Imaging & Imagery Lab

Website of the Imaging & Imagery Lab, Department of Psychology and Behavioral Sciences,
Zhejiang University.

Static HTML/CSS — no build step. Push to `main` and GitHub Pages serves it.

| file | |
|---|---|
| `index.html` | home |
| `people.html` | lab members |
| `manual.html` | lab manual + internal access |
| `assets/internal/` | encrypted bundles for lab members |

## Internal access

Each member gets a password that opens their own bundle. Bundles are encrypted with
PBKDF2-SHA256 (310k iterations) + AES-GCM, and decrypted in the browser — nothing
readable is stored in this repository. The plaintext materials and the passwords stay
off GitHub; a lost password has to be reset by re-encrypting the bundle.
