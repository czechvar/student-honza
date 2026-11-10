# Honzův studijní prostor (Honza's Study Space)

Progressive Web Application (PWA) designed as a personal study hub, flashcard trainer, and interactive quiz platform for 6th-grade school subjects (**Fyzika**, **Český jazyk a literatura**, and more), backed by **Firebase Authentication**, **Cloud Firestore**, and **Firebase Hosting**.

- **Live App**: [https://honza-study-space.web.app](https://honza-study-space.web.app)
- **Firebase Project**: `honza-study-space` (`eur3` multi-region)

---

## ✨ Key Features

- **Subject-Organized Study Hub**:
  - One-tap filtering by school subject (**📚 Všechny předměty**, **⚡ Fyzika**, **📕 Český jazyk a literatura**) and instant keyword search.
  - Structured **Study Notes (`Výpisky`)** and interactive flip **Flashcards (`Kartičky`)** for each topic before starting a test.
- **Mixed-Question Quiz Engine**:
  - Supports **Multiple-Choice (`Výběr z možností`)**, **True / False (`Pravda / Lež`)**, and **Type-In (`Napiš odpověď`)** questions.
  - Case-insensitive and diacritic-tolerant grading for typed answers, with immediate explanations after each question.
- **Test Score History & Mistake Review**:
  - Every completed quiz attempt is saved locally and synchronized to Cloud Firestore (`attempts` collection) with score percentage, star rating, completion time, and full per-question breakdown.
  - **Review Modal (`Projít odpovědi`)** compares Honza's answer against the correct answer with explanations and includes a **"🎯 Procvičit pouze chybné otázky" (Practice Missed Questions Only)** mode.
- **Role-Based Access Control (Student vs. Parent Admin)**:
  - Protected behind a mandatory sign-in gate (`#auth-login-dialog`) when unauthenticated.
  - **👦 Honza (Student)**: Full access to study notes, flashcards, quizzes, and personal score reviews.
  - **🛡️ Rodič (Admin)**: Unlocks **Rodičovské studio (Parent Studio)** to create, edit, export/import JSON quizzes, and manage Firebase Cloud sync settings.
- **Book-Photo-to-Quiz Workflow**:
  - Parents can upload photos of textbook pages, worksheets, or school exam announcements (`Bakaláři` / `Škola OnLine`) in Gemini/Antigravity chat to generate ready-to-study notes, flashcards, and quizzes.
- **Installable Mobile & Desktop PWA**:
  - Configured with `manifest.webmanifest` and offline-capable Service Worker (`sw.js`) for "Add to Home Screen" installation on **Android (Chrome)** and **iPhone / iPad (Safari)**.
- **Bilingual UI (`CZ | EN`)**:
  - **Czech (`cs`)** is the default interface language, with instant switching to **English (`en`)**.

---

## 📚 Current Study Topics (6.C)

1. **⚡ Fyzika** — *Těleso a látka, skupenství látek, atomy a molekuly*
   - Fyzikální těleso vs. látka, skupenství látek (pevné krystalické/amorfní, kapalné, plynné, tekutiny), přeměny skupenství, částicová stavba látek, stavba atomu (jádro: protony a neutrony; obal: elektrony), prvky, molekuly, sloučeniny, Brownův pohyb a difuze.
2. **📕 Český jazyk a literatura** — *Čtvrtletní písemná práce: Útvary jazyka, slovanské jazyky a tvorba slov*
   - Spisovná čeština (vč. hovorové) a nespisovné útvary národního jazyka (nářečí/dialekt, obecná čeština, profesní mluva, slang, argot), slovanské jazyky (západoslovanské, východoslovanské, jihoslovanské, staroslověnština a hlaholice) a tvorba slov (slovo základové, slovo příbuzné, kořen, střídání samohlásek a souhlásek při odvozování).
3. **📕 Český jazyk a literatura** — *Čtvrtletní diktát: Trénink pravopisu (i/y, mě/mně, s/z, shoda)*
   - Vyjmenovaná slova a homonyma (*být/bít, mít/mýt, výr/vír, slepýš/slepíš, pýcha/píchá*), shoda přísudku s podmětem, skupiny *mě/mně*, předpony *s-/z-/vz-*, koncovky podstatných a přídavných jmen a zdvojené souhlásky (*-nn-* vs. *-ěný*).

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend Architecture** | Vanilla JavaScript (ES2022+ Modules), zero build-step static bundle |
| **Markup & Accessibility** | Semantic HTML5 (`<dialog>`, `<search>`, `<progress>`, `<details>`, ARIA live regions, keyboard navigation) |
| **Styling & Theming** | Modern CSS (`@layer reset, base, theme, components, utilities`, `light-dark()` color scheme, CSS Grid/Flexbox, `:user-invalid` validation) |
| **PWA & Offline** | Web App Manifest (`manifest.webmanifest`), Service Worker (`sw.js`) with network-first + cache fallback + `localStorage` persistence |
| **Authentication** | Firebase Authentication (`firebase/auth` v11 ESM via CDN importmap, Email/Password provider) |
| **Database** | Cloud Firestore (`firebase/firestore` v11 ESM, real-time `onSnapshot` listeners on `topics` and `attempts` collections) |
| **Security** | Declarative Cloud Firestore Security Rules (`firestore.rules`) enforcing authentication, admin-only topic mutations, and immutable quiz score attempts |
| **Hosting** | Firebase Hosting (`honza-study-space.web.app`) |

---

## 📁 Project Structure

```text
student-honza/
├── .firebaserc                 # Firebase project alias (honza-study-space)
├── firebase.json               # Firebase Hosting & Firestore configuration
├── firestore.indexes.json      # Cloud Firestore composite index definitions
├── firestore.rules             # Cloud Firestore Security Rules (Auth + RBAC + schema validation)
├── package.json                # Local preview and Firebase deployment scripts
└── public/
    ├── index.html              # Single-page application shell & modal dialogs
    ├── styles.css              # Layered CSS design system with automatic light/dark mode
    ├── app.js                  # Application state, quiz engine, i18n, and Firebase Auth/Firestore sync
    ├── firebase-config.js      # Firebase Web App configuration
    ├── manifest.webmanifest    # PWA manifest for Android & iOS home screen installation
    ├── sw.js                   # Offline-ready Service Worker
    ├── data/
    │   └── starter-topics.js   # Built-in study topics, flashcards, and quizzes
    ├── icons/
    │   └── icon.svg            # Scalable app icon
    └── quizzes/
        └── catalog.json        # JSON catalog of study topics
```

---

## 🚀 Local Development & Git Worktree Workflow

### 1. Run Local Preview Server

```bash
npm start
# Or directly via Python 3:
python3 -m http.server 8080 --directory public
```

Then open [http://localhost:8080](http://localhost:8080) in your browser.

### 2. Working in Git Worktrees & Opening PRs

All feature and content changes are developed in isolated Git worktrees inside `.worktrees/` and merged into `main` via Pull Requests:

```bash
# Create a new isolated worktree and branch from main
git worktree add -b feat/<feature-name> .worktrees/<feature-name> main

# Work inside the worktree
cd .worktrees/<feature-name>

# Validate JavaScript syntax
node --check public/app.js
node --check public/data/starter-topics.js

# Stage, commit, push, and open a Pull Request to main
git add -A
git commit -m "feat: description of change"
git push -u origin feat/<feature-name>
gh pr create --base main --head feat/<feature-name> --fill
```

### 3. Deploy to Firebase

```bash
# Deploy Hosting only
npx firebase-tools deploy --only hosting --project honza-study-space

# Full deploy (Hosting + Firestore Security Rules & Indexes)
npm run deploy
```

