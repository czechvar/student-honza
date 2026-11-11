import { STARTER_TOPICS, DEPRECATED_DEMO_TOPIC_IDS } from './data/starter-topics.js';
import { defaultFirebaseConfig } from './firebase-config.js';

const STORAGE_KEYS = {
  LANG: 'honza_study_lang_v2',
  TOPICS: 'honza_study_topics_v2',
  ATTEMPTS: 'honza_study_attempts_v1',
  FIREBASE_CFG: 'honza_firebase_config_v1',
  AUTH_ROLE: 'honza_auth_role_v1'
};

const AUTH_ACCOUNTS = {
  honza: {
    email: 'honza@honza-study-space.app',
    defaultPass: 'honza123',
    role: 'student',
    displayName: 'Honza'
  },
  admin: {
    email: 'admin@honza-study-space.app',
    defaultPass: 'rodic123',
    role: 'admin',
    displayName: 'Rodič (Admin)'
  }
};

const I18N = {
  en: {
    skipToMain: 'Skip to main content',
    appTitle: "Honza's Study Space",
    syncLocal: 'Offline Ready (Local Mode)',
    syncCloud: '☁️ Firebase Cloud Synced',
    navTopics: 'Study & Quizzes',
    navScores: 'Scores & Review',
    navStudio: 'Parent Studio',
    installAppShort: 'Get App',
    installAppAria: 'Install on Android or iPhone',
    cloudSettingsAria: 'Firebase Cloud Settings',
    cloudBtn: 'Firebase',
    heroHeading: 'Welcome back, Honza! Ready to level up?',
    heroSub: 'Pick a topic to study notes and flashcards, then take the quiz and beat your high score.',
    statTestsCompleted: 'Tests Done',
    statAvgScore: 'Avg Score',
    statStarsEarned: 'Stars Earned',
    availableTopicsHeading: 'Study Topics & Quizzes',
    searchTopicsLabel: 'Filter topics by title or subject',
    searchTopicsPlaceholder: 'Filter topics (e.g. Math, Space, Dějepis)...',
    studyBtn: '📖 Study & Cards',
    startQuizBtn: '🚀 Take Quiz',
    bestScoreLabel: 'Best:',
    questionsCountSuffix: 'questions',
    notesCountSuffix: 'notes',
    cardsCountSuffix: 'flashcards',
    backToTopics: 'Back to Topics',
    startQuizNow: 'Start Quiz Now',
    studyNotesHeading: '📖 Key Study Notes',
    flashcardsHeading: '🃏 Flashcards Practice',
    prevCard: 'Previous',
    flipCard: 'Flip Card',
    nextCard: 'Next',
    cardFrontBadge: 'QUESTION (Tap to flip)',
    cardBackBadge: 'ANSWER (Tap to flip back)',
    exitQuiz: 'Exit Quiz',
    checkAnswerBtn: 'Check Answer',
    nextQuestionBtn: 'Next Question →',
    finishQuizBtn: 'Finish & See Score 🏆',
    scoresHistoryHeading: "Honza's Test Scores & Review History",
    scoresHistorySub: 'Click any completed test to inspect every question, compare answers, and practice mistakes.',
    filterByTopicLabel: 'Filter by topic:',
    allTopicsOption: 'All Topics',
    noScoresYetTitle: 'No completed quizzes yet!',
    noScoresYetSub: 'Once Honza finishes a quiz, his score, time, and full answer review will appear right here.',
    scoresTableCaption: 'Completed quiz attempts and scores',
    colDate: 'Date & Time',
    colTopic: 'Topic',
    colScore: 'Score',
    colTime: 'Time',
    colActions: 'Review & Retry',
    reviewAttemptBtn: '🔍 Review Answers',
    parentStudioHeading: 'Parent Studio — Create & Import Quizzes',
    parentStudioSub: "Create quizzes manually, or upload photos of Honza's textbook pages in Gemini chat to generate ready-to-import study packs.",
    newTopicBtn: 'Create New Quiz / Topic',
    importJsonBtn: 'Import Quiz JSON',
    bookPhotoWorkflowTitle: '📸 How to turn Textbook Photos into Quizzes',
    workflowStep1: "Take a photo of 1–4 pages from Honza's textbook, workbook, or school notebook.",
    workflowStep2: 'Drop the photo right here into our Gemini / Antigravity chat and say: "Make a quiz for Honza from this page".',
    workflowStep3: 'I will automatically add the study notes, flashcards, and mixed quiz questions directly into your app (or give you a JSON block to paste via "Import Quiz JSON").',
    copyAiPromptSummary: 'Copy AI Prompt for external Gemini / ChatGPT chats',
    copyAiPromptDesc: "If you ever use Gemini on your phone with a book photo, copy this prompt so it outputs the exact JSON format for Honza's Study Space:",
    copyPromptBtn: 'Copy Prompt',
    promptCopiedMsg: 'Copied!',
    manageExistingTopicsTitle: '📚 Manage Topics in Library',
    editBtn: 'Edit',
    exportJsonBtn: 'Copy JSON',
    deleteBtn: 'Delete',
    retryMistakesBtn: '🎯 Practice Missed Questions Only',
    retakeFullQuizBtn: '🔄 Retake Full Quiz',
    closeBtn: 'Close',
    editorModalTitle: 'Create / Edit Study Topic',
    topicTitleLabel: 'Topic Title (Required)',
    topicTitleHint: 'E.g., Fractions & Decimals or Starověké Řecko',
    topicTitleError: 'Please enter a topic title (at least 2 characters).',
    topicSubjectLabel: 'Subject (Required)',
    topicSubjectHint: 'E.g., Math, Science, English, Dějepis, Přírodopis',
    topicSubjectError: 'Please enter a school subject.',
    topicDescLabel: 'Short Description',
    topicDescHint: 'What will Honza practice in this topic?',
    topicLangLegend: 'Content Language',
    studyNotesInputLabel: 'Study Notes (One bullet point per line)',
    studyNotesInputHint: 'Honza can read these summary facts before starting the quiz.',
    flashcardsInputLabel: 'Flashcards (One per line in format: Question | Answer)',
    flashcardsInputHint: 'Example: What is the capital of Italy? | Rome',
    questionsBuilderHeading: 'Quiz Questions',
    cancelBtn: 'Cancel',
    saveTopicBtn: 'Save Topic & Quiz',
    importModalTitle: 'Import Quiz JSON',
    importJsonLabel: 'Paste Topic JSON',
    importJsonHint: 'Paste a single topic object or an array of topics generated from textbook photos.',
    importNowBtn: 'Import into Study Space',
    firebaseModalTitle: 'Firebase Cloud Sync Settings',
    firebaseModalDesc: "Connect your Firebase project so Honza's quizzes and test scores sync automatically across your Android, iPhone, and computer.",
    firebaseConfigLabel: 'Firebase Web Config JSON (or JS snippet)',
    firebaseConfigHint: 'Paste your firebaseConfig object (with apiKey, projectId, appId) or configure via Firebase CLI.',
    pushLocalToCloudBtn: '☁️ Upload All Local Quizzes & Scores to Cloud',
    saveFirebaseBtn: 'Save & Connect',
    installModalTitle: 'Add to Android & iPhone Home Screen',
    instantInstallHeading: '📲 Instant Install Available',
    instantInstallDesc: "Install Honza's Study Space directly on this device with one tap:",
    installNowAction: 'Install App Now',
    androidStep1: 'Open this page in Chrome on your Android phone or tablet.',
    androidStep2: 'Tap the ⋮ menu (top-right) and choose "Add to Home screen" or "Install app".',
    androidStep3: 'It launches full-screen just like a native app!',
    iosStep1: 'Open this link in Safari on your iPhone or iPad.',
    iosStep2: 'Tap the Share button (square with arrow pointing up ↑ at the bottom).',
    iosStep3: 'Scroll down and tap "Add to Home Screen", then tap "Add".',
    gotItBtn: 'Got it!',
    typeMcBadge: 'Multiple Choice',
    typeTfBadge: 'True / False',
    typeInputBadge: 'Type Your Answer',
    typeInLabel: 'Your Answer:',
    typeInHint: 'Type your answer below (capital letters and diacritics don\'t matter).',
    typeInSpellingTip: 'correct spelling:',
    selectOptionAlert: 'Please choose or type an answer first!',
    correctHeadline: '✅ Awesome job, Honza! Correct!',
    wrongHeadline: '❌ Not quite! Correct answer:',
    yourAnswerLabel: "Honza's answer:",
    correctAnswerLabel: 'Correct answer:',
    explanationLabel: 'Explanation:',
    switchAccountShort: 'Switch',
    authBadgeLabel: 'User Sign-In',
    authModalTitle: 'Who is studying or managing quizzes?',
    chooseAccountLegend: 'Select account:',
    honzaAccountTitle: '👦 Honza (Student)',
    honzaAccountSub: 'Study notes, flashcards, quizzes, and personal score review',
    adminAccountTitle: '🛡️ Parent (Admin)',
    adminAccountSub: 'Full access + Parent Studio to create, edit, and import quizzes',
    passwordLabel: 'Password',
    loginPasswordHint: 'Enter the password for the selected account.',
    showPasswordBtn: 'Show',
    hidePasswordBtn: 'Hide',
    showPasswordWarning: 'Warning: this will display your password on the screen.',
    passwordLengthError: 'Please enter a valid password (at least 6 characters).',
    signOutBtn: 'Sign Out',
    signInSubmitBtn: 'Sign In',
    invalidPasswordError: 'Incorrect password. Please try again.',
    footerText: "Honza's Study Space • Web, Android & iPhone"
  },
  cs: {
    skipToMain: 'Přeskočit na hlavní obsah',
    appTitle: 'Honzův studijní prostor',
    syncLocal: 'Offline režim (Uloženo v zařízení)',
    syncCloud: '☁️ Synchronizováno s Firebase',
    navTopics: 'Učení a kvízy',
    navScores: 'Výsledky a přehled',
    navStudio: 'Rodičovské studio',
    installAppShort: 'Do mobilu',
    installAppAria: 'Přidat aplikaci na Android nebo iPhone',
    cloudSettingsAria: 'Nastavení Firebase cloudu',
    cloudBtn: 'Firebase',
    heroHeading: 'Ahoj Honzo! Jdeme trénovat?',
    heroSub: 'Vyber si téma, projdi si výpisky a kartičky a pak si vyzkoušej kvíz na maximum bodů.',
    statTestsCompleted: 'Splněné testy',
    statAvgScore: 'Průměr',
    statStarsEarned: 'Získané hvězdy',
    availableTopicsHeading: 'Studijní témata a kvízy',
    searchTopicsLabel: 'Hledat téma podle názvu nebo předmětu',
    searchTopicsPlaceholder: 'Hledat téma (např. Matematika, Dějepis, Space)...',
    studyBtn: '📖 Výpisky a kartičky',
    startQuizBtn: '🚀 Spustit kvíz',
    bestScoreLabel: 'Rekord:',
    questionsCountSuffix: 'otázek',
    notesCountSuffix: 'poznámek',
    cardsCountSuffix: 'kartiček',
    backToTopics: 'Zpět na témata',
    startQuizNow: 'Spustit kvíz',
    studyNotesHeading: '📖 Klíčové výpisky k tématu',
    flashcardsHeading: '🃏 Tréninkové kartičky (Flashcards)',
    prevCard: 'Předchozí',
    flipCard: 'Otočit kartu',
    nextCard: 'Další',
    cardFrontBadge: 'OTÁZKA (Klepni pro otočení)',
    cardBackBadge: 'ODPOVĚĎ (Klepni pro otočení zpět)',
    exitQuiz: 'Ukončit kvíz',
    checkAnswerBtn: 'Zkontrolovat odpověď',
    nextQuestionBtn: 'Další otázka →',
    finishQuizBtn: 'Dokončit a zobrazit skóre 🏆',
    scoresHistoryHeading: 'Honzovy výsledky testů a revize odpovědí',
    scoresHistorySub: 'Kliknutím na libovolný test zobrazíš detail každé otázky, porovnání odpovědí a můžeš si procvičit chyby.',
    filterByTopicLabel: 'Filtrovat podle tématu:',
    allTopicsOption: 'Všechna témata',
    noScoresYetTitle: 'Zatím žádné dokončené kvízy!',
    noScoresYetSub: 'Jakmile Honza dokončí první kvíz, uvidíš zde jeho skóre, čas i kompletní přehled odpovědí.',
    scoresTableCaption: 'Historie dokončených kvízů a výsledků',
    colDate: 'Datum a čas',
    colTopic: 'Téma',
    colScore: 'Skóre',
    colTime: 'Čas',
    colActions: 'Detail a oprava',
    reviewAttemptBtn: '🔍 Projít odpovědi',
    parentStudioHeading: 'Rodičovské studio — Tvorba a import kvízů',
    parentStudioSub: 'Vytvořte kvíz ručně nebo nahrajte fotku stránky z učebnice sem do Gemini chatu pro okamžitou přípravu kvízu.',
    newTopicBtn: 'Vytvořit nové téma / kvíz',
    importJsonBtn: 'Importovat JSON kvíz',
    bookPhotoWorkflowTitle: '📸 Jak vytvořit kvíz z fotky učebnice nebo sešitu',
    workflowStep1: 'Vyfoťte 1–4 stránky z Honzovy učebnice, pracovního sešitu nebo poznámek.',
    workflowStep2: 'Nahrajte fotku přímo sem do našeho Gemini / Antigravity chatu a napište: „Připrav z toho kvíz pro Honzu“.',
    workflowStep3: 'Automaticky přidám výpisky, kartičky i kvízové otázky přímo do aplikace (nebo vám dám JSON pro vložení přes „Importovat JSON kvíz“).',
    copyAiPromptSummary: 'Zkopírovat AI prompt pro externí Gemini / ChatGPT chat',
    copyAiPromptDesc: 'Pokud fotku učebnice nahráváte v mobilu do běžného Gemini chatu, zkopírujte tento příkaz, aby vrátil přesný JSON formát:',
    copyPromptBtn: 'Zkopírovat prompt',
    promptCopiedMsg: 'Zkopírováno!',
    manageExistingTopicsTitle: '📚 Správa témat v knihovně',
    editBtn: 'Upravit',
    exportJsonBtn: 'JSON',
    deleteBtn: 'Smazat',
    retryMistakesBtn: '🎯 Procvičit pouze chybné otázky',
    retakeFullQuizBtn: '🔄 Zopakovat celý kvíz',
    closeBtn: 'Zavřít',
    editorModalTitle: 'Vytvořit / Upravit studijní téma',
    topicTitleLabel: 'Název tématu (Povinné)',
    topicTitleHint: 'Např. Starověké Řecko nebo Fractions & Decimals',
    topicTitleError: 'Zadejte prosím název tématu (alespoň 2 znaky).',
    topicSubjectLabel: 'Předmět (Povinné)',
    topicSubjectHint: 'Např. Matematika, Dějepis, Přírodopis, English',
    topicSubjectError: 'Zadejte prosím školní předmět.',
    topicDescLabel: 'Krátký popis',
    topicDescHint: 'Co si Honza v tomto tématu procvičí?',
    topicLangLegend: 'Jazyk obsahu',
    studyNotesInputLabel: 'Studijní výpisky (jedna poznámka na řádek)',
    studyNotesInputHint: 'Honza si tyto body může projít před spuštěním testu.',
    flashcardsInputLabel: 'Kartičky (jedna na řádek ve tvaru: Otázka | Odpověď)',
    flashcardsInputHint: 'Příklad: Hlavní město Itálie? | Řím',
    questionsBuilderHeading: 'Otázky v kvízu',
    cancelBtn: 'Zrušit',
    saveTopicBtn: 'Uložit téma a kvíz',
    importModalTitle: 'Importovat kvíz z JSONu',
    importJsonLabel: 'Vložte JSON tématu',
    importJsonHint: 'Vložte objekt tématu nebo pole témat vygenerovaných z fotek učebnic.',
    importNowBtn: 'Naimportovat do aplikace',
    firebaseModalTitle: 'Nastavení synchronizace s Firebase',
    firebaseModalDesc: 'Propojte svůj Firebase projekt, aby se Honzovy kvízy a výsledky automaticky synchronizovaly mezi Androidem, iPhonem a počítačem.',
    firebaseConfigLabel: 'Firebase Web Config JSON (nebo JS objekt)',
    firebaseConfigHint: 'Vložte svůj firebaseConfig objekt (obsahující apiKey, projectId, appId).',
    pushLocalToCloudBtn: '☁️ Nahrát lokální kvízy a výsledky do cloudu',
    saveFirebaseBtn: 'Uložit a připojit',
    installModalTitle: 'Přidat jako aplikaci na plochu (Android a iPhone)',
    instantInstallHeading: '📲 Rychlá instalace připravena',
    instantInstallDesc: 'Nainstalujte Honzův studijní prostor přímo do tohoto zařízení jedním klepnutím:',
    installNowAction: 'Nainstalovat aplikaci',
    androidStep1: 'Otevřete tuto stránku v prohlížeči Chrome na telefonu či tabletu s Androidem.',
    androidStep2: 'Klepněte na menu ⋮ (vpravo nahoře) a zvolte „Přidat na plochu“ nebo „Instalovat aplikaci“.',
    androidStep3: 'Aplikace se poté spouští na celou obrazovku jako běžná mobilní aplikace!',
    iosStep1: 'Otevřete tento odkaz v prohlížeči Safari na iPhonu nebo iPadu.',
    iosStep2: 'Klepněte na tlačítko Sdílet (čtvereček se šipkou nahoru ↑ na spodní liště).',
    iosStep3: 'Sjeďte níže, klepněte na „Přidat na plochu“ (Add to Home Screen) a potvrďte „Přidat“.',
    gotItBtn: 'Rozumím!',
    typeMcBadge: 'Výběr z možností',
    typeTfBadge: 'Pravda / Lež',
    typeInputBadge: 'Napiš odpověď',
    typeInLabel: 'Tvoje odpověď:',
    typeInHint: 'Napiš odpověď níže (na velkých písmenech ani diakritice nezáleží).',
    typeInSpellingTip: 'správně se píše:',
    selectOptionAlert: 'Nejprve prosím vyber nebo napiš odpověď!',
    correctHeadline: '✅ Skvělá práce, Honzo! Správně!',
    wrongHeadline: '❌ Těsně vedle! Správná odpověď:',
    yourAnswerLabel: 'Honzova odpověď:',
    correctAnswerLabel: 'Správná odpověď:',
    explanationLabel: 'Vysvětlení:',
    switchAccountShort: 'Přepnout',
    authBadgeLabel: 'Přihlášení uživatele',
    authModalTitle: 'Kdo se právě učí nebo spravuje kvízy?',
    chooseAccountLegend: 'Vyberte účet:',
    honzaAccountTitle: '👦 Honza (Student)',
    honzaAccountSub: 'Učení, kartičky, kvízy a přehled vlastních výsledků',
    adminAccountTitle: '🛡️ Rodič (Admin)',
    adminAccountSub: 'Plný přístup + Rodičovské studio pro tvorbu a úpravu kvízů',
    passwordLabel: 'Heslo',
    loginPasswordHint: 'Zadejte heslo pro vybraný účet.',
    showPasswordBtn: 'Zobrazit',
    hidePasswordBtn: 'Skrýt',
    showPasswordWarning: 'Upozornění: zobrazí heslo na obrazovce.',
    passwordLengthError: 'Zadejte prosím platné heslo (alespoň 6 znaků).',
    signOutBtn: 'Odhlásit se',
    signInSubmitBtn: 'Přihlásit se',
    invalidPasswordError: 'Nesprávné heslo. Zkuste to prosím znovu.',
    footerText: 'Honzův studijní prostor • Web, Android a iPhone'
  }
};

// Application State
const state = {
  lang: localStorage.getItem(STORAGE_KEYS.LANG) || 'cs',
  currentView: 'topics',
  topics: [],
  attempts: [],
  searchQuery: '',
  selectedSubject: 'all',
  scoresTopicFilter: 'all',
  // Auth state
  auth: null,
  currentUser: null,
  userRole: null, // 'student' | 'admin' | null
  // Study & Flashcards session
  activeStudyTopic: null,
  flashcardIndex: 0,
  flashcardFlipped: false,
  // Active Quiz session
  activeQuiz: null,
  quizTimerInterval: null,
  // Active Review modal
  activeReviewAttempt: null,
  // Firebase state
  db: null,
  firebaseConnected: false,
  unsubscribeTopics: null,
  unsubscribeAttempts: null,
  deferredInstallPrompt: null
};

function t(key) {
  return I18N[state.lang]?.[key] || I18N.en[key] || key;
}

function announce(message) {
  const el = document.getElementById('live-announcer');
  if (!el) return;
  el.textContent = '';
  setTimeout(() => {
    el.textContent = message;
  }, 40);
}

// Normalize strings for tolerant answer comparison (case-insensitive, trims extra spaces, strips diacritics optionally)
function normalizeAnswer(val, stripDiacritics = false) {
  let str = String(val ?? '').trim().toLowerCase().replace(/\s+/g, ' ');
  if (stripDiacritics) {
    str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
  return str;
}

function isAnswerCorrect(question, userRawAnswer) {
  if (!userRawAnswer || !String(userRawAnswer).trim()) return false;
  if (question.type === 'true-false') {
    const u = normalizeAnswer(userRawAnswer, true);
    const c = normalizeAnswer(question.correctAnswer, true);
    const uBool = u === 'true' || u === 'pravda' || u === 'ano';
    const cBool = c === 'true' || c === 'pravda' || c === 'ano';
    return uBool === cBool;
  }
  if (question.type === 'multiple-choice') {
    return normalizeAnswer(userRawAnswer) === normalizeAnswer(question.correctAnswer);
  }
  // For type-in questions: ignore letter case, diacritics, punctuation and spacing
  const candidates = [
    question.correctAnswer,
    ...(Array.isArray(question.acceptedAnswers) ? question.acceptedAnswers : [])
  ].filter(Boolean);

  const userLoose = normalizeTypeInAnswer(userRawAnswer);
  if (!userLoose) return false;
  return candidates.some((cand) => normalizeTypeInAnswer(cand) === userLoose);
}

// Very tolerant normalization for typed answers:
// "Mléčná dráha." === "mlecna draha" === "MLECNA  DRAHA", "H₂O" === "h2o", "6 378" === "6378"
function normalizeTypeInAnswer(val) {
  return String(val ?? '')
    .normalize('NFKD') // also folds subscripts/superscripts (₂ → 2, ² → 2)
    .replace(/[\u0300-\u036f]/g, '') // strip diacritics (á → a, ů → u, ě → e …)
    .toLowerCase()
    .replace(/[\s.,;:!?'"„“”‚‘’«»()[\]{}\-–—_/\\]+/g, ''); // drop punctuation and spaces
}

// True when the typed answer matched only after ignoring diacritics/case (used for a gentle spelling tip)
function typedAnswerDiffersInSpelling(question, userRawAnswer) {
  const typed = String(userRawAnswer ?? '').trim().replace(/\s+/g, ' ');
  const correct = String(question.correctAnswer ?? '').trim().replace(/\s+/g, ' ');
  if (!typed || !correct) return false;
  const all = [correct, ...(Array.isArray(question.acceptedAnswers) ? question.acceptedAnswers : [])];
  return !all.some((cand) => String(cand).trim().replace(/\s+/g, ' ').toLowerCase() === typed.toLowerCase());
}

// ============================================================================
// Modern Web Guidance Fallbacks (:user-invalid WeakMap + <dialog closedby="any">)
// ============================================================================
const UserInvalidFallback = (() => {
  const dirtyState = new WeakMap();

  const updateState = (input) => {
    if (!input.checkValidity) return;
    const isValid = input.checkValidity();
    input.classList.toggle('user-invalid-fallback', !isValid);
    input.classList.toggle('user-valid-fallback', isValid);
    if (!isValid) {
      input.setAttribute('aria-invalid', 'true');
    } else {
      input.removeAttribute('aria-invalid');
    }
  };

  const handleEvent = (event) => {
    const input = event.target;
    if (event.type === 'reset') {
      const controls = input.elements || [];
      for (const control of controls) {
        dirtyState.delete(control);
        control.classList.remove('user-invalid-fallback', 'user-valid-fallback');
        control.removeAttribute('aria-invalid');
      }
      return;
    }
    if (!input || !input.checkValidity) return;
    if (event.type === 'input' || event.type === 'change') {
      const st = dirtyState.get(input) || { hasInteracted: false, hasBlurred: false };
      st.hasInteracted = true;
      dirtyState.set(input, st);
      if (st.hasBlurred) updateState(input);
    } else if (event.type === 'blur') {
      const st = dirtyState.get(input) || { hasInteracted: false, hasBlurred: false };
      st.hasBlurred = true;
      dirtyState.set(input, st);
      if (st.hasInteracted) updateState(input);
    }
  };

  const init = (root = document) => {
    // Sync aria-invalid with native :user-invalid when supported
    const syncAria = (el) => {
      if (!el || typeof el.matches !== 'function') return;
      try {
        if (CSS.supports('selector(:user-invalid)')) {
          el.setAttribute('aria-invalid', el.matches(':user-invalid') ? 'true' : 'false');
        }
      } catch {
        // Ignore on non-form elements
      }
    };
    root.addEventListener('blur', (e) => syncAria(e.target), true);
    root.addEventListener('input', (e) => {
      if (e.target?.hasAttribute?.('aria-invalid')) syncAria(e.target);
    });

    if (CSS.supports('selector(:user-invalid)')) return;
    root.addEventListener('blur', handleEvent, true);
    root.addEventListener('input', handleEvent);
    root.addEventListener('change', handleEvent);
    root.addEventListener('reset', handleEvent, true);
  };

  return { init };
})();

function initDialogFallbacks() {
  // Always clear returnValue on dialog close to prevent stale values
  for (const dialog of document.querySelectorAll('dialog')) {
    dialog.addEventListener('close', () => {
      dialog.returnValue = '';
    });
  }

  // Fallback for browsers without <dialog closedby="any"> support
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    for (const dialog of document.querySelectorAll('dialog[closedby="any"]')) {
      dialog.addEventListener('click', (event) => {
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        const isDialogContent =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width;
        if (isDialogContent) return;
        dialog.close();
      });
    }
  }
}

// ============================================================================
// Data Persistence: LocalStorage + Catalog + Firebase Firestore
// ============================================================================
function loadLocalData() {
  let savedTopics = [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.TOPICS);
    if (raw) savedTopics = JSON.parse(raw);
  } catch (e) {
    console.warn('Could not parse local topics:', e);
  }

  const deprecatedSet = new Set(DEPRECATED_DEMO_TOPIC_IDS || []);
  const starterMap = new Map(STARTER_TOPICS.map((item) => [item.id, item]));

  // Merge STARTER_TOPICS with savedTopics while stripping old demo topics
  const map = new Map();
  for (const item of STARTER_TOPICS) {
    map.set(item.id, item);
  }
  for (const item of savedTopics) {
    if (!item || !item.id || deprecatedSet.has(item.id)) continue;
    const starterItem = starterMap.get(item.id);
    if (starterItem && (Number(starterItem.updatedAt) || 0) >= (Number(item.updatedAt) || 0)) {
      map.set(item.id, starterItem);
    } else {
      map.set(item.id, item);
    }
  }
  state.topics = Array.from(map.values());
  saveLocalTopics();

  try {
    const rawAttempts = localStorage.getItem(STORAGE_KEYS.ATTEMPTS);
    if (rawAttempts) state.attempts = JSON.parse(rawAttempts);
  } catch (e) {
    console.warn('Could not parse local attempts:', e);
  }
}

async function loadCatalogQuizzes() {
  try {
    const res = await fetch('/quizzes/catalog.json', { cache: 'no-store' });
    if (!res.ok) return;
    const data = await res.json();
    if (Array.isArray(data?.topics) && data.topics.length > 0) {
      let changed = false;
      const map = new Map(state.topics.map((tp) => [tp.id, tp]));
      for (const tp of data.topics) {
        if (tp && tp.id && tp.title && Array.isArray(tp.questions)) {
          map.set(tp.id, tp);
          changed = true;
        }
      }
      if (changed) {
        state.topics = Array.from(map.values());
        saveLocalTopics();
        renderAll();
      }
    }
  } catch {
    // Ignore offline fetch errors
  }
}

function saveLocalTopics() {
  localStorage.setItem(STORAGE_KEYS.TOPICS, JSON.stringify(state.topics));
}

function saveLocalAttempts() {
  localStorage.setItem(STORAGE_KEYS.ATTEMPTS, JSON.stringify(state.attempts));
}

function stripSubjectPrefixFromTitle(title = '', subject = '') {
  const cleanTitle = String(title || '').trim();
  const cleanSubject = String(subject || '').trim();
  if (!cleanSubject) return cleanTitle;
  const escaped = cleanSubject.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const prefixRegex = new RegExp(`^${escaped}\\s*[-–—:]\\s*`, 'i');
  return cleanTitle.replace(prefixRegex, '').trim();
}

function sanitizeTopicForFirestore(topic) {
  const now = Date.now();
  const subject = String(topic.subject || 'General').slice(0, 100);
  const title = stripSubjectPrefixFromTitle(topic.title || 'Untitled Topic', subject).slice(0, 200);
  return {
    id: String(topic.id).slice(0, 150),
    title,
    subject,
    description: String(topic.description || '').slice(0, 2000),
    lang: ['en', 'cs', 'both'].includes(topic.lang) ? topic.lang : 'en',
    studyNotes: Array.isArray(topic.studyNotes) ? topic.studyNotes.slice(0, 100) : [],
    flashcards: Array.isArray(topic.flashcards) ? topic.flashcards.slice(0, 200) : [],
    questions: Array.isArray(topic.questions) ? topic.questions.slice(0, 200) : [],
    createdAt: typeof topic.createdAt === 'number' && topic.createdAt >= 0 ? topic.createdAt : now,
    updatedAt: now,
    authorName: String(topic.authorName || 'Parent').slice(0, 100)
  };
}

function sanitizeAttemptForFirestore(attempt) {
  const totalQuestions = Math.max(1, Math.min(200, Math.round(Number(attempt.totalQuestions) || 1)));
  const score = Math.max(0, Math.min(totalQuestions, Math.round(Number(attempt.score) || 0)));
  const percentage = Math.max(0, Math.min(100, Math.round((score / totalQuestions) * 100)));
  return {
    id: String(attempt.id).slice(0, 150),
    topicId: String(attempt.topicId).slice(0, 150),
    topicTitle: String(attempt.topicTitle || 'Quiz').slice(0, 200),
    studentName: String(attempt.studentName || 'Honza').slice(0, 100),
    score,
    totalQuestions,
    percentage,
    answers: Array.isArray(attempt.answers) ? attempt.answers.slice(0, 200) : [],
    completedAt: typeof attempt.completedAt === 'number' && attempt.completedAt >= 0 ? attempt.completedAt : Date.now(),
    durationSeconds: Math.max(0, Math.min(86400, Math.round(Number(attempt.durationSeconds) || 0))),
    mode: attempt.mode === 'mistakes' ? 'mistakes' : 'full'
  };
}

function getActiveFirebaseConfig() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.FIREBASE_CFG);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed?.apiKey && parsed?.projectId) return parsed;
    }
  } catch {
    // Fallback to defaultFirebaseConfig
  }
  if (defaultFirebaseConfig?.apiKey && defaultFirebaseConfig?.projectId) {
    return defaultFirebaseConfig;
  }
  return null;
}

async function startFirestoreListeners() {
  if (!state.db) return;
  const { collection, onSnapshot } = await import('firebase/firestore');

  if (state.unsubscribeTopics) state.unsubscribeTopics();
  if (state.unsubscribeAttempts) state.unsubscribeAttempts();

  state.unsubscribeTopics = onSnapshot(
    collection(state.db, 'topics'),
    (snapshot) => {
      state.firebaseConnected = true;
      updateSyncBadge();
      if (snapshot.empty && state.topics.length > 0 && state.userRole === 'admin') {
        pushAllLocalDataToCloud().catch(() => {});
        return;
      }
      const deprecatedSet = new Set(DEPRECATED_DEMO_TOPIC_IDS || []);
      const map = new Map(state.topics.map((tp) => [tp.id, tp]));
      const remoteIds = new Set();

      snapshot.forEach((docSnap) => {
        if (deprecatedSet.has(docSnap.id)) {
          if (state.userRole === 'admin') {
            deleteTopicEverywhere(docSnap.id).catch(() => {});
          }
          return;
        }
        remoteIds.add(docSnap.id);
        const data = docSnap.data();
        if (data && data.title && Array.isArray(data.questions)) {
          const existing = map.get(docSnap.id);
          if (!existing || (Number(data.updatedAt) || 0) >= (Number(existing.updatedAt) || 0)) {
            map.set(docSnap.id, { ...data, id: docSnap.id });
          } else if (state.userRole === 'admin') {
            saveTopicEverywhere(existing).catch(() => {});
          }
        }
      });

      if (state.userRole === 'admin') {
        for (const starter of STARTER_TOPICS) {
          if (!remoteIds.has(starter.id)) {
            saveTopicEverywhere(starter).catch(() => {});
          }
        }
      }

      state.topics = Array.from(map.values()).filter((tp) => !deprecatedSet.has(tp.id));
      saveLocalTopics();
      renderAll();
    },
    (err) => {
      console.warn('Firestore topics listener warning:', err.message);
    }
  );

  state.unsubscribeAttempts = onSnapshot(
    collection(state.db, 'attempts'),
    (snapshot) => {
      state.firebaseConnected = true;
      updateSyncBadge();
      const map = new Map(state.attempts.map((at) => [at.id, at]));
      snapshot.forEach((docSnap) => {
        const data = docSnap.data();
        if (data && data.topicId) {
          map.set(docSnap.id, { ...data, id: docSnap.id });
        }
      });
      state.attempts = Array.from(map.values()).sort((a, b) => b.completedAt - a.completedAt);
      saveLocalAttempts();
      renderAll();
    },
    (err) => {
      console.warn('Firestore attempts listener warning:', err.message);
    }
  );
}

function applyRolePermissions() {
  const isAuthenticated = Boolean(state.userRole);
  const isAdmin = state.userRole === 'admin';
  const primaryNav = document.getElementById('primary-nav');
  const heroBanner = document.getElementById('hero-banner');
  const studioNavLi = document.getElementById('nav-studio-li');
  const firebaseBtn = document.getElementById('open-firebase-btn');
  const avatarEl = document.getElementById('current-user-avatar');
  const labelEl = document.getElementById('current-user-label');
  const switchTag = document.getElementById('switch-account-tag');
  const headerLogoutBtn = document.getElementById('header-logout-btn');
  const signOutBtn = document.getElementById('auth-signout-btn');
  const authCloseForm = document.getElementById('auth-close-form');
  const authDialog = document.getElementById('auth-login-dialog');

  if (primaryNav) primaryNav.hidden = !isAuthenticated;
  if (heroBanner) heroBanner.hidden = !isAuthenticated;
  if (studioNavLi) studioNavLi.hidden = !isAdmin;
  if (firebaseBtn) firebaseBtn.hidden = !isAdmin;
  if (headerLogoutBtn) headerLogoutBtn.hidden = !isAuthenticated;
  if (signOutBtn) signOutBtn.hidden = !isAuthenticated;
  if (authCloseForm) authCloseForm.hidden = !isAuthenticated;
  if (switchTag) switchTag.hidden = !isAuthenticated;
  if (authDialog) {
    authDialog.setAttribute('closedby', isAuthenticated ? 'closerequest' : 'none');
  }

  if (!isAuthenticated) {
    if (avatarEl) avatarEl.textContent = '🔒';
    if (labelEl) labelEl.textContent = state.lang === 'cs' ? 'Přihlásit' : 'Sign In';
    for (const v of ['topics', 'study', 'quiz', 'scores', 'studio']) {
      const sec = document.getElementById(`view-${v}`);
      if (sec) sec.hidden = true;
    }
    if (state.quizTimerInterval) {
      clearInterval(state.quizTimerInterval);
      state.quizTimerInterval = null;
    }
    state.activeQuiz = null;
    openLoginDialog();
    return;
  }

  if (isAdmin) {
    if (avatarEl) avatarEl.textContent = '🛡️';
    if (labelEl) labelEl.textContent = state.lang === 'cs' ? 'Rodič (Admin)' : 'Parent (Admin)';
  } else {
    if (avatarEl) avatarEl.textContent = '👦';
    if (labelEl) labelEl.textContent = 'Honza';
    if (state.currentView === 'studio') {
      state.currentView = 'topics';
    }
  }

  switchView(state.currentView || 'topics');
}

function openLoginDialog() {
  const isAuthenticated = Boolean(state.userRole);
  const dialog = document.getElementById('auth-login-dialog');
  const feedback = document.getElementById('auth-login-feedback');
  const pwdInput = document.getElementById('login-password');
  const signOutBtn = document.getElementById('auth-signout-btn');
  const authCloseForm = document.getElementById('auth-close-form');
  if (signOutBtn) signOutBtn.hidden = !isAuthenticated;
  if (authCloseForm) authCloseForm.hidden = !isAuthenticated;
  if (feedback) feedback.hidden = true;
  if (pwdInput) {
    pwdInput.value = '';
    pwdInput.type = 'password';
  }
  const toggleBtn = document.getElementById('toggle-login-password-btn');
  if (toggleBtn) {
    toggleBtn.setAttribute('aria-pressed', 'false');
    toggleBtn.textContent = t('showPasswordBtn');
  }
  if (dialog && !dialog.open) {
    dialog.showModal();
  }
}

async function initFirebaseSync() {
  const config = getActiveFirebaseConfig();
  const badge = document.getElementById('sync-status-badge');
  const configInput = document.getElementById('firebase-config-input');
  if (configInput && config) {
    configInput.value = JSON.stringify(config, null, 2);
  }

  if (!config) {
    state.firebaseConnected = false;
    state.userRole = localStorage.getItem(STORAGE_KEYS.AUTH_ROLE) || null;
    applyRolePermissions();
    if (badge) {
      badge.textContent = t('syncLocal');
      badge.classList.remove('is-cloud-connected');
    }
    return false;
  }

  try {
    const { initializeApp, getApps, getApp } = await import('firebase/app');
    const { getFirestore } = await import('firebase/firestore');
    const { getAuth, onAuthStateChanged } = await import('firebase/auth');

    const app = getApps().length ? getApp() : initializeApp(config);
    const db = getFirestore(app);
    const auth = getAuth(app);
    state.db = db;
    state.auth = auth;

    onAuthStateChanged(auth, (user) => {
      state.currentUser = user;
      if (user) {
        const email = (user.email || '').toLowerCase();
        if (email === AUTH_ACCOUNTS.admin.email || email === 'janantl@gmail.com') {
          state.userRole = 'admin';
        } else {
          state.userRole = 'student';
        }
        localStorage.setItem(STORAGE_KEYS.AUTH_ROLE, state.userRole);
        const authDialog = document.getElementById('auth-login-dialog');
        if (authDialog?.open) authDialog.close();
        applyRolePermissions();
        startFirestoreListeners();
      } else {
        if (state.unsubscribeTopics) {
          state.unsubscribeTopics();
          state.unsubscribeTopics = null;
        }
        if (state.unsubscribeAttempts) {
          state.unsubscribeAttempts();
          state.unsubscribeAttempts = null;
        }
        state.userRole = null;
        localStorage.removeItem(STORAGE_KEYS.AUTH_ROLE);
        applyRolePermissions();
        openLoginDialog();
      }
    });

    state.firebaseConnected = true;
    updateSyncBadge();
    return true;
  } catch (err) {
    console.warn('Firebase initialization skipped or failed:', err);
    state.firebaseConnected = false;
    state.userRole = localStorage.getItem(STORAGE_KEYS.AUTH_ROLE) || null;
    applyRolePermissions();
    updateSyncBadge();
    return false;
  }
}

function updateSyncBadge() {
  const badge = document.getElementById('sync-status-badge');
  if (!badge) return;
  if (state.firebaseConnected) {
    badge.textContent = t('syncCloud');
    badge.classList.add('is-cloud-connected');
  } else {
    badge.textContent = t('syncLocal');
    badge.classList.remove('is-cloud-connected');
  }
}

async function saveTopicEverywhere(topic) {
  const clean = sanitizeTopicForFirestore(topic);
  const idx = state.topics.findIndex((tp) => tp.id === clean.id);
  if (idx >= 0) {
    // Preserve original createdAt if updating
    clean.createdAt = state.topics[idx].createdAt || clean.createdAt;
    state.topics[idx] = clean;
  } else {
    state.topics.unshift(clean);
  }
  saveLocalTopics();
  renderAll();

  if (state.db) {
    try {
      const { doc, setDoc } = await import('firebase/firestore');
      await setDoc(doc(state.db, 'topics', clean.id), clean);
    } catch (e) {
      console.warn('Failed to write topic to Firestore:', e);
    }
  }
}

async function deleteTopicEverywhere(topicId) {
  state.topics = state.topics.filter((tp) => tp.id !== topicId);
  saveLocalTopics();
  renderAll();

  if (state.db) {
    try {
      const { doc, deleteDoc } = await import('firebase/firestore');
      await deleteDoc(doc(state.db, 'topics', topicId));
    } catch (e) {
      console.warn('Failed to delete topic from Firestore:', e);
    }
  }
}

async function saveAttemptEverywhere(attempt) {
  const clean = sanitizeAttemptForFirestore(attempt);
  state.attempts.unshift(clean);
  saveLocalAttempts();
  renderAll();

  if (state.db) {
    try {
      const { doc, setDoc } = await import('firebase/firestore');
      await setDoc(doc(state.db, 'attempts', clean.id), clean);
    } catch (e) {
      console.warn('Failed to write attempt to Firestore:', e);
    }
  }
  return clean;
}

async function pushAllLocalDataToCloud() {
  if (!state.db) return false;
  const { doc, setDoc } = await import('firebase/firestore');
  for (const tp of state.topics) {
    const cleanTp = sanitizeTopicForFirestore(tp);
    await setDoc(doc(state.db, 'topics', cleanTp.id), cleanTp);
  }
  for (const at of state.attempts) {
    const cleanAt = sanitizeAttemptForFirestore(at);
    await setDoc(doc(state.db, 'attempts', cleanAt.id), cleanAt);
  }
  return true;
}

// ============================================================================
// UI Rendering & Navigation
// ============================================================================
function applyTranslations() {
  document.documentElement.lang = state.lang;

  for (const el of document.querySelectorAll('[data-i18n]')) {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  }
  for (const el of document.querySelectorAll('[data-i18n-placeholder]')) {
    const key = el.getAttribute('data-i18n-placeholder');
    el.setAttribute('placeholder', t(key));
  }
  for (const el of document.querySelectorAll('[data-i18n-aria]')) {
    const key = el.getAttribute('data-i18n-aria');
    el.setAttribute('aria-label', t(key));
  }

  for (const btn of document.querySelectorAll('[data-lang-switch]')) {
    const isCurrent = btn.getAttribute('data-lang-switch') === state.lang;
    btn.setAttribute('aria-pressed', isCurrent ? 'true' : 'false');
  }

  const brandGroup = document.getElementById('brand-group');
  if (brandGroup) {
    brandGroup.setAttribute('aria-label', t('appTitle'));
  }
  const exp1 = document.getElementById('brand-exp-1');
  const exp2 = document.getElementById('brand-exp-2');
  const exp3 = document.getElementById('brand-exp-3');
  if (exp1 && exp2 && exp3) {
    if (state.lang === 'cs') {
      exp1.textContent = 'onzův\u00A0';
      exp2.textContent = 'tudijní\u00A0';
      exp3.textContent = 'rostor';
    } else {
      exp1.textContent = "onza's\u00A0";
      exp2.textContent = 'tudy\u00A0';
      exp3.textContent = 'lace';
    }
  }

  updateSyncBadge();
  updateDocumentTitle();
}

function updateDocumentTitle() {
  const titles = {
    topics: `${t('navTopics')} | ${t('appTitle')}`,
    study: `${state.activeStudyTopic?.title || t('navTopics')} | ${t('appTitle')}`,
    quiz: `Quiz: ${state.activeQuiz?.topic?.title || ''} | ${t('appTitle')}`,
    scores: `${t('navScores')} | ${t('appTitle')}`,
    studio: `${t('navStudio')} | ${t('appTitle')}`
  };
  document.title = titles[state.currentView] || t('appTitle');
}

function switchView(viewName) {
  const views = ['topics', 'study', 'quiz', 'scores', 'studio'];
  if (!state.userRole) {
    for (const v of views) {
      const sec = document.getElementById(`view-${v}`);
      if (sec) sec.hidden = true;
    }
    openLoginDialog();
    return;
  }

  const targetView = viewName === 'studio' && state.userRole !== 'admin' ? 'topics' : viewName;
  state.currentView = targetView;

  for (const v of views) {
    const sec = document.getElementById(`view-${v}`);
    if (sec) sec.hidden = v !== targetView;
  }

  for (const btn of document.querySelectorAll('[data-nav]')) {
    const active = btn.getAttribute('data-nav') === targetView;
    btn.classList.toggle('is-active', active);
    if (active) {
      btn.setAttribute('aria-current', 'page');
    } else {
      btn.removeAttribute('aria-current');
    }
  }

  updateDocumentTitle();
  renderAll();
}

function renderAll() {
  renderStatsStrip();
  renderSubjectFilterBar();
  renderTopicsGrid();
  renderScoresTable();
  renderStudioTopicsList();
}

function getSubjectIcon(subject = '') {
  const s = subject.toLowerCase();
  if (s.includes('fyzik')) return '⚡';
  if (s.includes('česk') || s.includes('cesk') || s.includes('literat')) return '📕';
  if (s.includes('země') || s.includes('zeme')) return '🌍';
  if (s.includes('mat')) return '📐';
  if (s.includes('děj') || s.includes('dej')) return '🏛️';
  if (s.includes('angli') || s.includes('eng')) return '🇬🇧';
  return '📘';
}

function renderSubjectFilterBar() {
  const bar = document.getElementById('subject-filter-bar');
  if (!bar) return;
  bar.innerHTML = '';

  const counts = new Map();
  for (const tp of state.topics) {
    const subj = (tp.subject || '').trim();
    if (!subj) continue;
    counts.set(subj, (counts.get(subj) || 0) + 1);
  }

  if (state.selectedSubject !== 'all' && !counts.has(state.selectedSubject)) {
    state.selectedSubject = 'all';
  }

  const allBtn = document.createElement('button');
  allBtn.type = 'button';
  allBtn.className = 'subject-filter-pill';
  allBtn.setAttribute('aria-pressed', state.selectedSubject === 'all' ? 'true' : 'false');
  allBtn.textContent =
    state.lang === 'cs'
      ? `📚 Všechny předměty (${state.topics.length})`
      : `📚 All Subjects (${state.topics.length})`;
  allBtn.addEventListener('click', () => {
    state.selectedSubject = 'all';
    renderSubjectFilterBar();
    renderTopicsGrid();
  });
  bar.appendChild(allBtn);

  for (const [subj, count] of counts.entries()) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'subject-filter-pill';
    btn.setAttribute('aria-pressed', state.selectedSubject === subj ? 'true' : 'false');
    btn.textContent = `${getSubjectIcon(subj)} ${subj} (${count})`;
    btn.addEventListener('click', () => {
      state.selectedSubject = subj;
      renderSubjectFilterBar();
      renderTopicsGrid();
    });
    bar.appendChild(btn);
  }
}

function renderStatsStrip() {
  const countEl = document.getElementById('stat-quizzes-taken');
  const avgEl = document.getElementById('stat-avg-score');
  const starsEl = document.getElementById('stat-stars');
  const navBadge = document.getElementById('attempts-count-badge');

  const totalAttempts = state.attempts.length;
  if (countEl) countEl.textContent = String(totalAttempts);
  if (navBadge) navBadge.textContent = String(totalAttempts);

  if (totalAttempts === 0) {
    if (avgEl) avgEl.textContent = '—';
    if (starsEl) starsEl.textContent = '0 ⭐';
    return;
  }

  const sumPct = state.attempts.reduce((acc, cur) => acc + (Number(cur.percentage) || 0), 0);
  const avgPct = Math.round(sumPct / totalAttempts);
  const stars = state.attempts.reduce((acc, cur) => {
    if (cur.percentage >= 90) return acc + 3;
    if (cur.percentage >= 75) return acc + 2;
    if (cur.percentage >= 50) return acc + 1;
    return acc;
  }, 0);

  if (avgEl) avgEl.textContent = `${avgPct}%`;
  if (starsEl) starsEl.textContent = `${stars} ⭐`;
}

function getBestScoreForTopic(topicId) {
  const matches = state.attempts.filter((a) => a.topicId === topicId);
  if (!matches.length) return null;
  return Math.max(...matches.map((a) => Number(a.percentage) || 0));
}

function renderTopicsGrid() {
  const grid = document.getElementById('topics-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const q = state.searchQuery.trim().toLowerCase();
  const filtered = state.topics.filter((tp) => {
    if (state.selectedSubject !== 'all' && tp.subject !== state.selectedSubject) {
      return false;
    }
    if (!q) return true;
    return (
      tp.title.toLowerCase().includes(q) ||
      tp.subject.toLowerCase().includes(q) ||
      (tp.description || '').toLowerCase().includes(q)
    );
  });

  for (const tp of filtered) {
    const li = document.createElement('li');
    li.className = 'topic-card';

    const bestPct = getBestScoreForTopic(tp.id);
    const topDiv = document.createElement('div');

    const metaRow = document.createElement('div');
    metaRow.className = 'topic-card-meta';

    const subjTag = document.createElement('span');
    subjTag.className = 'subject-tag';
    subjTag.textContent = tp.subject;
    metaRow.appendChild(subjTag);

    if (bestPct !== null) {
      const bestPill = document.createElement('span');
      bestPill.className = 'best-score-pill';
      bestPill.textContent = `🏆 ${t('bestScoreLabel')} ${bestPct}%`;
      metaRow.appendChild(bestPill);
    }

    const h3 = document.createElement('h3');
    h3.textContent = stripSubjectPrefixFromTitle(tp.title, tp.subject);
    if (tp.lang && tp.lang !== state.lang && tp.lang !== 'both') {
      h3.setAttribute('lang', tp.lang);
    }

    const desc = document.createElement('p');
    desc.className = 'muted-text';
    desc.textContent = tp.description || '';

    const statsRow = document.createElement('div');
    statsRow.className = 'topic-stats-row';
    const qCount = Array.isArray(tp.questions) ? tp.questions.length : 0;
    const nCount = Array.isArray(tp.studyNotes) ? tp.studyNotes.length : 0;
    const cCount = Array.isArray(tp.flashcards) ? tp.flashcards.length : 0;
    statsRow.textContent = `❓ ${qCount} ${t('questionsCountSuffix')} • 📝 ${nCount} ${t('notesCountSuffix')} • 🃏 ${cCount} ${t('cardsCountSuffix')}`;

    topDiv.append(metaRow, h3, desc, statsRow);

    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'topic-card-actions';

    const studyBtn = document.createElement('button');
    studyBtn.type = 'button';
    studyBtn.className = 'secondary-btn';
    studyBtn.textContent = t('studyBtn');
    studyBtn.setAttribute('aria-label', `${t('studyBtn')} — ${tp.title}`);
    studyBtn.addEventListener('click', () => openStudyMode(tp.id));

    const quizBtn = document.createElement('button');
    quizBtn.type = 'button';
    quizBtn.className = 'primary-btn';
    quizBtn.textContent = t('startQuizBtn');
    quizBtn.setAttribute('aria-label', `${t('startQuizBtn')} — ${tp.title}`);
    quizBtn.addEventListener('click', () => startQuiz(tp.id, 'full'));

    actionsDiv.append(studyBtn, quizBtn);
    li.append(topDiv, actionsDiv);
    grid.appendChild(li);
  }
}

// ============================================================================
// Study Notes & Flashcards Mode
// ============================================================================
let studyNotesScrollObserver = null;

function setupStudyNotesScrollFallback(notesList) {
  if (studyNotesScrollObserver) {
    studyNotesScrollObserver.disconnect();
    studyNotesScrollObserver = null;
  }
  if (
    typeof CSS === 'undefined' ||
    typeof IntersectionObserver === 'undefined' ||
    CSS.supports('(animation-timeline: view()) and (animation-range: entry)') ||
    !window.matchMedia('(prefers-reduced-motion: no-preference)').matches
  ) {
    return;
  }

  const cards = notesList.querySelectorAll('.study-note-card');
  const total = Math.max(1, cards.length);
  studyNotesScrollObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const idx = Number(entry.target.getAttribute('data-note-index') || 1);
        const targetScale = 0.92 + 0.08 * (idx / total);
        const currentScale = targetScale + (1 - targetScale) * (1 - entry.intersectionRatio * 0.5);
        entry.target.style.scale = String(Number(currentScale.toFixed(4)));
      }
    },
    {
      threshold: Array.from({ length: 21 }, (_, i) => i / 20)
    }
  );

  cards.forEach((card) => studyNotesScrollObserver.observe(card));
}

function openStudyMode(topicId) {
  const topic = state.topics.find((tp) => tp.id === topicId);
  if (!topic) return;

  state.activeStudyTopic = topic;
  state.flashcardIndex = 0;
  state.flashcardFlipped = false;

  document.getElementById('study-topic-subject').textContent = topic.subject;
  document.getElementById('study-topic-title').textContent = stripSubjectPrefixFromTitle(topic.title, topic.subject);
  document.getElementById('study-topic-desc').textContent = topic.description || '';

  const notesList = document.getElementById('study-notes-list');
  notesList.innerHTML = '';
  const notes = Array.isArray(topic.studyNotes) && topic.studyNotes.length
    ? topic.studyNotes
    : ['Review the flashcards and start the quiz when ready!'];

  const totalNotes = notes.length;
  notesList.style.setProperty('--notes-total', String(totalNotes));

  notes.forEach((note, idx) => {
    const stepNum = idx + 1;
    const li = document.createElement('li');
    li.className = 'study-note-item';
    li.style.setProperty('--note-index', String(stepNum));

    const card = document.createElement('div');
    card.className = 'study-note-card';
    card.setAttribute('data-note-index', String(stepNum));

    const header = document.createElement('div');
    header.className = 'study-note-card-header';

    const badge = document.createElement('span');
    badge.className = 'study-note-step-badge';
    badge.textContent = `${String(stepNum).padStart(2, '0')} / ${String(totalNotes).padStart(2, '0')}`;
    header.appendChild(badge);

    const body = document.createElement('p');
    body.className = 'study-note-body';

    const colonIdx = typeof note === 'string' ? note.indexOf(':') : -1;
    if (colonIdx > 1 && colonIdx <= 80) {
      const headingText = note.slice(0, colonIdx).trim();
      const restText = note.slice(colonIdx + 1).trim();
      const headingEl = document.createElement('strong');
      headingEl.className = 'study-note-heading';
      headingEl.textContent = headingText;
      header.appendChild(headingEl);
      body.textContent = restText;
    } else {
      body.textContent = note;
    }

    card.append(header, body);
    li.appendChild(card);
    notesList.appendChild(li);
  });

  setupStudyNotesScrollFallback(notesList);
  renderActiveFlashcard();
  switchView('study');
}

function renderActiveFlashcard() {
  const topic = state.activeStudyTopic;
  if (!topic) return;

  const cards = Array.isArray(topic.flashcards) && topic.flashcards.length
    ? topic.flashcards
    : topic.questions.map((q) => ({ front: q.prompt, back: q.correctAnswer }));

  const total = cards.length;
  if (total === 0) return;

  if (state.flashcardIndex >= total) state.flashcardIndex = 0;
  if (state.flashcardIndex < 0) state.flashcardIndex = total - 1;

  const card = cards[state.flashcardIndex];
  const counterEl = document.getElementById('flashcard-counter');
  const boxBtn = document.getElementById('flashcard-flip-btn');
  const sideLabel = document.getElementById('flashcard-side-label');
  const contentEl = document.getElementById('flashcard-content');

  counterEl.textContent = `${state.flashcardIndex + 1} / ${total}`;
  boxBtn.classList.toggle('is-flipped', state.flashcardFlipped);
  sideLabel.textContent = state.flashcardFlipped ? t('cardBackBadge') : t('cardFrontBadge');
  contentEl.textContent = state.flashcardFlipped ? card.back : card.front;
}

// ============================================================================
// Interactive Quiz Engine
// ============================================================================
function shuffleArray(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function randomizeQuestionOptions(questions) {
  let prevCorrectIdx = -1;
  return questions.map((q) => {
    const copy = { ...q };
    if (copy.type === 'multiple-choice' && Array.isArray(copy.options) && copy.options.length > 1) {
      let opts = shuffleArray(copy.options);
      const normCorrect = normalizeAnswer(copy.correctAnswer);
      let correctIdx = opts.findIndex((o) => normalizeAnswer(o) === normCorrect);
      // Avoid placing the correct answer in the exact same position (e.g. 'A') twice in a row
      if (opts.length > 2 && correctIdx !== -1 && correctIdx === prevCorrectIdx) {
        const swapIdx = (correctIdx + 1 + Math.floor(Math.random() * (opts.length - 1))) % opts.length;
        [opts[correctIdx], opts[swapIdx]] = [opts[swapIdx], opts[correctIdx]];
        correctIdx = swapIdx;
      }
      prevCorrectIdx = correctIdx;
      copy.options = opts;
    }
    return copy;
  });
}

function selectQuizQuestionsForAttempt(topic) {
  const pool = Array.isArray(topic.questions) ? topic.questions : [];
  if (pool.length <= 1) return randomizeQuestionOptions(pool);

  // Target quiz size (~55–60% of the topic question bank, e.g. 12–15 questions out of 22–25)
  const quizSize =
    pool.length >= 16
      ? Math.max(10, Math.min(15, Math.round(pool.length * 0.6)))
      : pool.length >= 8
      ? Math.max(6, Math.round(pool.length * 0.7))
      : pool.length;

  // Gather prompts from the previous quiz on this topic (either in-memory or last saved attempt)
  if (!state.lastQuizPromptsByTopic) state.lastQuizPromptsByTopic = {};
  const lastAttempt = state.attempts.find(
    (a) => a.topicId === topic.id && a.mode !== 'mistakes' && Array.isArray(a.answers) && a.answers.length > 0
  );
  const prevPromptsList =
    state.lastQuizPromptsByTopic[topic.id] ||
    (lastAttempt ? lastAttempt.answers.map((a) => a.prompt) : []);
  const prevPromptsSet = new Set(prevPromptsList);
  const missedPromptsSet = new Set(
    (lastAttempt?.answers || []).filter((a) => !a.isCorrect).map((a) => a.prompt)
  );

  let selected;
  if (prevPromptsSet.size === 0 || quizSize >= pool.length) {
    selected = shuffleArray(pool).slice(0, quizSize);
  } else {
    const freshPool = shuffleArray(pool.filter((q) => !prevPromptsSet.has(q.prompt)));
    const repeatMissed = shuffleArray(
      pool.filter((q) => prevPromptsSet.has(q.prompt) && missedPromptsSet.has(q.prompt))
    );
    const repeatOther = shuffleArray(
      pool.filter((q) => prevPromptsSet.has(q.prompt) && !missedPromptsSet.has(q.prompt))
    );
    const repeatPool = [...repeatMissed, ...repeatOther];

    // Enforce at most 60% overlap with the previous quiz, and at least 40% fresh questions
    const maxSame = Math.floor(quizSize * 0.6);
    const minFresh = quizSize - maxSame;

    const chosenFresh = freshPool.slice(0, Math.max(minFresh, quizSize - repeatPool.length));
    const remainingNeeded = quizSize - chosenFresh.length;
    const chosenRepeat = repeatPool.slice(0, Math.min(maxSame, remainingNeeded));

    selected = [...chosenFresh, ...chosenRepeat];

    // If still short (e.g. small pool), top up from remaining fresh or repeat questions
    if (selected.length < quizSize) {
      const usedPrompts = new Set(selected.map((q) => q.prompt));
      for (const candidate of [...freshPool, ...repeatPool]) {
        if (selected.length >= quizSize) break;
        if (!usedPrompts.has(candidate.prompt)) {
          selected.push(candidate);
          usedPrompts.add(candidate.prompt);
        }
      }
    }

    selected = shuffleArray(selected);
  }

  state.lastQuizPromptsByTopic[topic.id] = selected.map((q) => q.prompt);
  return randomizeQuestionOptions(selected);
}

function startQuiz(topicId, mode = 'full', customQuestions = null) {
  const topic = state.topics.find((tp) => tp.id === topicId);
  if (!topic) return;

  const questionsPool =
    Array.isArray(customQuestions) && customQuestions.length
      ? randomizeQuestionOptions(shuffleArray(customQuestions))
      : selectQuizQuestionsForAttempt(topic);

  if (!questionsPool || !questionsPool.length) return;

  if (state.quizTimerInterval) clearInterval(state.quizTimerInterval);

  state.activeQuiz = {
    topic,
    mode,
    questions: questionsPool,
    currentIndex: 0,
    score: 0,
    answers: [],
    startedAt: Date.now(),
    answeredCurrent: false
  };

  const timerEl = document.getElementById('quiz-timer-display');
  state.quizTimerInterval = setInterval(() => {
    if (!state.activeQuiz) return;
    const elapsed = Math.floor((Date.now() - state.activeQuiz.startedAt) / 1000);
    const mins = String(Math.floor(elapsed / 60)).padStart(2, '0');
    const secs = String(elapsed % 60).padStart(2, '0');
    if (timerEl) timerEl.textContent = `${mins}:${secs}`;
  }, 1000);

  switchView('quiz');
  renderCurrentQuizQuestion();
}

function renderCurrentQuizQuestion() {
  const quiz = state.activeQuiz;
  if (!quiz) return;

  const q = quiz.questions[quiz.currentIndex];
  const total = quiz.questions.length;
  const idxNum = quiz.currentIndex + 1;

  // Update progress bar & dynamic CSS custom property --brand-hue
  const progressLabel = document.getElementById('quiz-progress-label');
  const progressBar = document.getElementById('quiz-progress-bar');
  progressLabel.textContent = `${ state.lang === 'cs' ? 'Otázka' : 'Question' } ${idxNum} / ${total}`;
  progressBar.max = total;
  progressBar.value = idxNum;
  const pctDone = Math.round((idxNum / total) * 100);
  progressBar.style.setProperty('--brand-hue', String(Math.round(210 - (pctDone * 0.7))));

  // Type badge & prompt
  const typeBadge = document.getElementById('quiz-question-type-badge');
  if (q.type === 'multiple-choice') typeBadge.textContent = t('typeMcBadge');
  else if (q.type === 'true-false') typeBadge.textContent = t('typeTfBadge');
  else typeBadge.textContent = t('typeInputBadge');

  const promptEl = document.getElementById('quiz-question-prompt');
  promptEl.textContent = q.prompt;

  // Mount question input control
  const mount = document.getElementById('quiz-input-Mount');
  mount.innerHTML = '';

  if (q.type === 'multiple-choice' || q.type === 'true-false') {
    const fieldset = document.createElement('fieldset');
    fieldset.className = 'quiz-options-fieldset';

    const legend = document.createElement('legend');
    legend.className = 'visually-hidden';
    legend.textContent = q.prompt;
    fieldset.appendChild(legend);

    const options = Array.isArray(q.options) && q.options.length
      ? q.options
      : ['True', 'False'];

    options.forEach((optText, i) => {
      const label = document.createElement('label');
      label.className = 'quiz-radio-card';

      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quizOption';
      radio.value = optText;
      radio.required = true;
      if (i === 0) radio.autofocus = true;

      const span = document.createElement('span');
      span.textContent = optText;

      label.append(radio, span);
      fieldset.appendChild(label);
    });

    mount.appendChild(fieldset);
  } else {
    // Type-in question
    const fieldDiv = document.createElement('div');
    fieldDiv.className = 'field';

    const label = document.createElement('label');
    label.setAttribute('for', 'quiz-typein-input');
    label.textContent = t('typeInLabel');

    const hint = document.createElement('span');
    hint.id = 'quiz-typein-hint';
    hint.className = 'hint';
    hint.textContent = t('typeInHint');

    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'quiz-typein-input';
    input.name = 'quizTypeIn';
    input.required = true;
    input.autocomplete = 'off';
    // Stop phone keyboards from auto-capitalizing, autocorrecting words or adding a trailing period
    input.setAttribute('autocapitalize', 'off');
    input.setAttribute('autocorrect', 'off');
    input.spellcheck = false;
    input.setAttribute('aria-describedby', 'quiz-typein-hint');
    input.setAttribute('enterkeyhint', 'done');

    // Check KeyboardEvent.isComposing per forms guide
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.isComposing) {
        e.preventDefault();
        if (!quiz.answeredCurrent) {
          handleQuizCheckAnswer();
        } else {
          handleQuizNextQuestion();
        }
      }
    });

    fieldDiv.append(label, hint, input);
    mount.appendChild(fieldDiv);
    setTimeout(() => input.focus(), 30);
  }

  // Reset feedback & buttons
  const feedbackBox = document.getElementById('quiz-instant-feedback');
  feedbackBox.hidden = true;
  feedbackBox.classList.remove('is-correct', 'is-wrong');

  const submitBtn = document.getElementById('quiz-submit-answer-btn');
  const nextBtn = document.getElementById('quiz-next-question-btn');
  submitBtn.hidden = false;
  submitBtn.disabled = false;
  nextBtn.hidden = true;
  nextBtn.textContent = idxNum === total ? t('finishQuizBtn') : t('nextQuestionBtn');
}

function getSelectedQuizAnswer() {
  const quiz = state.activeQuiz;
  if (!quiz) return '';
  const q = quiz.questions[quiz.currentIndex];
  if (q.type === 'multiple-choice' || q.type === 'true-false') {
    const checked = document.querySelector('#quiz-answer-form input[name="quizOption"]:checked');
    return checked ? checked.value : '';
  }
  const textInput = document.getElementById('quiz-typein-input');
  return textInput ? textInput.value.trim() : '';
}

function handleQuizCheckAnswer() {
  const quiz = state.activeQuiz;
  if (!quiz || quiz.answeredCurrent) return;

  const userAnswer = getSelectedQuizAnswer();
  if (!userAnswer) {
    announce(t('selectOptionAlert'));
    return;
  }

  const q = quiz.questions[quiz.currentIndex];
  const correct = isAnswerCorrect(q, userAnswer);
  quiz.answeredCurrent = true;
  if (correct) quiz.score += 1;

  quiz.answers.push({
    questionId: q.id || `q-${quiz.currentIndex + 1}`,
    prompt: q.prompt,
    type: q.type,
    userAnswer,
    correctAnswer: q.correctAnswer,
    isCorrect: correct,
    explanation: q.explanation || ''
  });

  // Disable inputs after checking
  for (const el of document.querySelectorAll('#quiz-input-Mount input')) {
    el.disabled = true;
  }

  const feedbackBox = document.getElementById('quiz-instant-feedback');
  const headline = document.getElementById('quiz-feedback-headline');
  const expl = document.getElementById('quiz-feedback-explanation');

  feedbackBox.hidden = false;
  feedbackBox.classList.toggle('is-correct', correct);
  feedbackBox.classList.toggle('is-wrong', !correct);

  headline.textContent = correct
    ? t('correctHeadline')
    : `${t('wrongHeadline')} ${q.correctAnswer}`;
  if (correct && q.type === 'type-in' && typedAnswerDiffersInSpelling(q, userAnswer)) {
    headline.textContent = `${t('correctHeadline')} (${t('typeInSpellingTip')} ${q.correctAnswer})`;
  }
  expl.textContent = q.explanation || '';

  announce(`${headline.textContent} ${expl.textContent}`);

  const submitBtn = document.getElementById('quiz-submit-answer-btn');
  const nextBtn = document.getElementById('quiz-next-question-btn');
  submitBtn.hidden = true;
  nextBtn.hidden = false;
  nextBtn.focus();
}

async function handleQuizNextQuestion() {
  const quiz = state.activeQuiz;
  if (!quiz) return;

  if (quiz.currentIndex + 1 < quiz.questions.length) {
    quiz.currentIndex += 1;
    quiz.answeredCurrent = false;
    renderCurrentQuizQuestion();
    return;
  }

  // Quiz complete! Save attempt & open Review Modal
  if (state.quizTimerInterval) {
    clearInterval(state.quizTimerInterval);
    state.quizTimerInterval = null;
  }

  const durationSeconds = Math.max(1, Math.round((Date.now() - quiz.startedAt) / 1000));
  const totalQuestions = quiz.questions.length;
  const percentage = Math.round((quiz.score / totalQuestions) * 100);

  const attemptRecord = {
    id: `att-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    topicId: quiz.topic.id,
    topicTitle: quiz.topic.title,
    studentName: 'Honza',
    score: quiz.score,
    totalQuestions,
    percentage,
    answers: quiz.answers,
    completedAt: Date.now(),
    durationSeconds,
    mode: quiz.mode
  };

  state.activeQuiz = null;
  const saved = await saveAttemptEverywhere(attemptRecord);
  switchView('scores');
  openAttemptReviewModal(saved.id);
}

// ============================================================================
// Scoreboard & Detailed Attempt Review Modal
// ============================================================================
function renderScoresTable() {
  const filterSelect = document.getElementById('scores-topic-filter');
  const tbody = document.getElementById('scores-table-body');
  const emptyCard = document.getElementById('scores-empty-state');
  const tableWrapper = document.getElementById('scores-table-wrapper');
  if (!tbody || !filterSelect) return;

  // Populate topic filter options while preserving selection
  const currentFilter = state.scoresTopicFilter;
  filterSelect.innerHTML = `<option value="all">${t('allTopicsOption')}</option>`;
  for (const tp of state.topics) {
    const opt = document.createElement('option');
    opt.value = tp.id;
    opt.textContent = tp.title;
    if (tp.id === currentFilter) opt.selected = true;
    filterSelect.appendChild(opt);
  }

  const filteredAttempts = state.attempts.filter((at) => {
    if (currentFilter === 'all') return true;
    return at.topicId === currentFilter;
  });

  tbody.innerHTML = '';
  if (filteredAttempts.length === 0) {
    emptyCard.hidden = false;
    tableWrapper.hidden = true;
    return;
  }

  emptyCard.hidden = true;
  tableWrapper.hidden = false;

  for (const at of filteredAttempts) {
    const tr = document.createElement('tr');

    const tdDate = document.createElement('td');
    const dt = new Date(at.completedAt);
    tdDate.textContent = dt.toLocaleString(state.lang === 'cs' ? 'cs-CZ' : 'en-GB', {
      dateStyle: 'medium',
      timeStyle: 'short'
    });

    const tdTopic = document.createElement('td');
    const strongTitle = document.createElement('strong');
    strongTitle.textContent = at.topicTitle;
    tdTopic.appendChild(strongTitle);

    const tdScore = document.createElement('td');
    const scoreBadge = document.createElement('span');
    const tier = at.percentage >= 80 ? 'high' : at.percentage >= 50 ? 'medium' : 'low';
    scoreBadge.className = `score-badge ${tier}`;
    scoreBadge.textContent = `${at.score} / ${at.totalQuestions} (${at.percentage}%)`;
    tdScore.appendChild(scoreBadge);

    const tdTime = document.createElement('td');
    const mins = Math.floor((at.durationSeconds || 0) / 60);
    const secs = (at.durationSeconds || 0) % 60;
    tdTime.textContent = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;

    const tdAction = document.createElement('td');
    const revBtn = document.createElement('button');
    revBtn.type = 'button';
    revBtn.className = 'secondary-btn sm-btn';
    revBtn.textContent = t('reviewAttemptBtn');
    revBtn.setAttribute('aria-label', `${t('reviewAttemptBtn')} — ${at.topicTitle} (${at.percentage}%)`);
    revBtn.addEventListener('click', () => openAttemptReviewModal(at.id));
    tdAction.appendChild(revBtn);

    tr.append(tdDate, tdTopic, tdScore, tdTime, tdAction);
    tbody.appendChild(tr);
  }
}

function openAttemptReviewModal(attemptId) {
  const attempt = state.attempts.find((a) => a.id === attemptId);
  if (!attempt) return;
  state.activeReviewAttempt = attempt;

  const dialog = document.getElementById('attempt-review-dialog');
  const titleEl = document.getElementById('review-dialog-title');
  const summaryBanner = document.getElementById('review-summary-banner');
  const listEl = document.getElementById('review-questions-list');
  const retryMistakesBtn = document.getElementById('review-retry-mistakes-btn');

  titleEl.textContent = `${attempt.topicTitle} — ${attempt.score}/${attempt.totalQuestions} (${attempt.percentage}%)`;

  const dtStr = new Date(attempt.completedAt).toLocaleString(state.lang === 'cs' ? 'cs-CZ' : 'en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short'
  });

  summaryBanner.innerHTML = '';
  const summaryLeft = document.createElement('div');
  summaryLeft.innerHTML = `<strong>${attempt.studentName}</strong> • ${dtStr}`;
  const summaryRight = document.createElement('span');
  const tier = attempt.percentage >= 80 ? 'high' : attempt.percentage >= 50 ? 'medium' : 'low';
  summaryRight.className = `score-badge ${tier}`;
  summaryRight.textContent = `${attempt.percentage}% (${attempt.score}/${attempt.totalQuestions})`;
  summaryBanner.append(summaryLeft, summaryRight);

  listEl.innerHTML = '';
  const missedQuestions = [];

  (attempt.answers || []).forEach((ans, idx) => {
    const card = document.createElement('div');
    card.className = `review-item-card ${ans.isCorrect ? 'is-correct' : 'is-wrong'}`;

    const qHeading = document.createElement('h3');
    qHeading.textContent = `${idx + 1}. ${ans.prompt} ${ans.isCorrect ? '✅' : '❌'}`;

    const userAnsP = document.createElement('p');
    userAnsP.innerHTML = `<strong>${t('yourAnswerLabel')}</strong> `;
    const userSpan = document.createElement('span');
    userSpan.textContent = ans.userAnswer || '—';
    userAnsP.appendChild(userSpan);

    card.append(qHeading, userAnsP);

    if (!ans.isCorrect) {
      const corrAnsP = document.createElement('p');
      corrAnsP.innerHTML = `<strong>${t('correctAnswerLabel')}</strong> `;
      const corrSpan = document.createElement('span');
      corrSpan.textContent = ans.correctAnswer;
      corrAnsP.appendChild(corrSpan);
      card.appendChild(corrAnsP);
      missedQuestions.push(ans);
    }

    if (ans.explanation) {
      const explP = document.createElement('p');
      explP.className = 'muted-text';
      explP.textContent = `💡 ${ans.explanation}`;
      card.appendChild(explP);
    }

    listEl.appendChild(card);
  });

  retryMistakesBtn.hidden = missedQuestions.length === 0;
  dialog.showModal();
}

// ============================================================================
// Parent Studio: In-App Topic Editor & JSON Importer
// ============================================================================
function renderStudioTopicsList() {
  const list = document.getElementById('studio-topics-list');
  if (!list) return;
  list.innerHTML = '';

  for (const tp of state.topics) {
    const li = document.createElement('li');
    li.className = 'studio-topic-item';

    const info = document.createElement('div');
    const titleStrong = document.createElement('strong');
    titleStrong.textContent = tp.title;
    const subSpan = document.createElement('span');
    subSpan.className = 'muted-text';
    subSpan.textContent = ` (${tp.subject} • ${tp.questions?.length || 0} ${t('questionsCountSuffix')})`;
    info.append(titleStrong, subSpan);

    const btnGroup = document.createElement('div');
    btnGroup.className = 'button-row';

    const editBtn = document.createElement('button');
    editBtn.type = 'button';
    editBtn.className = 'secondary-btn sm-btn';
    editBtn.textContent = t('editBtn');
    editBtn.setAttribute('aria-label', `${t('editBtn')} ${tp.title}`);
    editBtn.addEventListener('click', () => openTopicEditorModal(tp));

    const exportBtn = document.createElement('button');
    exportBtn.type = 'button';
    exportBtn.className = 'secondary-btn sm-btn';
    exportBtn.textContent = t('exportJsonBtn');
    exportBtn.setAttribute('aria-label', `${t('exportJsonBtn')} ${tp.title}`);
    exportBtn.addEventListener('click', () => {
      navigator.clipboard?.writeText(JSON.stringify(tp, null, 2));
      exportBtn.textContent = t('promptCopiedMsg');
      setTimeout(() => {
        exportBtn.textContent = t('exportJsonBtn');
      }, 1500);
    });

    const delBtn = document.createElement('button');
    delBtn.type = 'button';
    delBtn.className = 'danger-btn sm-btn';
    delBtn.textContent = t('deleteBtn');
    delBtn.setAttribute('aria-label', `${t('deleteBtn')} ${tp.title}`);
    delBtn.addEventListener('click', () => {
      deleteTopicEverywhere(tp.id);
    });

    btnGroup.append(editBtn, exportBtn, delBtn);
    li.append(info, btnGroup);
    list.appendChild(li);
  }
}

function openTopicEditorModal(topicToEdit = null) {
  const dialog = document.getElementById('topic-editor-dialog');
  const form = document.getElementById('topic-editor-form');
  form.reset();

  document.getElementById('edit-topic-id').value = topicToEdit ? topicToEdit.id : '';
  document.getElementById('edit-topic-title').value = topicToEdit ? topicToEdit.title : '';
  document.getElementById('edit-topic-subject').value = topicToEdit ? topicToEdit.subject : '';
  document.getElementById('edit-topic-desc').value = topicToEdit ? (topicToEdit.description || '') : '';

  const langVal = topicToEdit?.lang || 'cs';
  const langRadio = form.querySelector(`input[name="lang"][value="${langVal}"]`);
  if (langRadio) langRadio.checked = true;

  document.getElementById('edit-study-notes').value = Array.isArray(topicToEdit?.studyNotes)
    ? topicToEdit.studyNotes.join('\n')
    : '';

  document.getElementById('edit-flashcards').value = Array.isArray(topicToEdit?.flashcards)
    ? topicToEdit.flashcards.map((fc) => `${fc.front} | ${fc.back}`).join('\n')
    : '';

  const qContainer = document.getElementById('editor-questions-container');
  qContainer.innerHTML = '';

  const initialQuestions = Array.isArray(topicToEdit?.questions) && topicToEdit.questions.length
    ? topicToEdit.questions
    : [
        {
          id: 'q-1',
          type: 'multiple-choice',
          prompt: '',
          options: ['', '', '', ''],
          correctAnswer: '',
          explanation: ''
        }
      ];

  for (const q of initialQuestions) {
    appendQuestionBuilderCard(q);
  }

  dialog.showModal();
}

let questionBuilderCounter = 1;

function appendQuestionBuilderCard(qData = {}) {
  questionBuilderCounter += 1;
  const uid = `qb-${Date.now()}-${questionBuilderCounter}`;
  const type = qData.type || 'multiple-choice';
  const container = document.getElementById('editor-questions-container');

  const card = document.createElement('div');
  card.className = 'question-builder-card';
  card.dataset.qType = type;

  const topRow = document.createElement('div');
  topRow.className = 'question-builder-top';

  const badge = document.createElement('span');
  badge.className = 'subject-tag';
  badge.textContent =
    type === 'multiple-choice'
      ? t('typeMcBadge')
      : type === 'true-false'
      ? t('typeTfBadge')
      : t('typeInputBadge');

  const removeBtn = document.createElement('button');
  removeBtn.type = 'button';
  removeBtn.className = 'danger-btn sm-btn';
  removeBtn.textContent = '✕';
  removeBtn.setAttribute('aria-label', 'Remove question');
  removeBtn.addEventListener('click', () => {
    if (container.children.length > 1) {
      card.remove();
    }
  });

  topRow.append(badge, removeBtn);

  // Prompt input
  const isCs = state.lang === 'cs';
  const promptField = document.createElement('div');
  promptField.className = 'field';
  const promptLabel = document.createElement('label');
  promptLabel.setAttribute('for', `${uid}-prompt`);
  promptLabel.textContent = isCs ? 'Zadání otázky (Povinné)' : 'Question Prompt (Required)';
  const promptInput = document.createElement('input');
  promptInput.type = 'text';
  promptInput.id = `${uid}-prompt`;
  promptInput.className = 'qb-prompt';
  promptInput.required = true;
  promptInput.value = qData.prompt || '';
  promptField.append(promptLabel, promptInput);

  card.append(topRow, promptField);

  if (type === 'multiple-choice') {
    const optsField = document.createElement('div');
    optsField.className = 'field';
    const optsLabel = document.createElement('label');
    optsLabel.setAttribute('for', `${uid}-opts`);
    optsLabel.textContent = isCs
      ? 'Možnosti oddělené čárkou (např. Merkur, Venuše, Mars, Jupiter)'
      : 'Options (comma-separated, e.g. Mercury, Venus, Mars, Jupiter)';
    const optsInput = document.createElement('input');
    optsInput.type = 'text';
    optsInput.id = `${uid}-opts`;
    optsInput.className = 'qb-options';
    optsInput.required = true;
    optsInput.value = Array.isArray(qData.options) ? qData.options.join(', ') : '';
    optsField.append(optsLabel, optsInput);
    card.appendChild(optsField);
  }

  // Correct Answer
  const ansField = document.createElement('div');
  ansField.className = 'field';
  const ansLabel = document.createElement('label');
  ansLabel.setAttribute('for', `${uid}-ans`);
  ansLabel.textContent =
    type === 'true-false'
      ? isCs
        ? 'Správná odpověď (Pravda nebo Lež)'
        : 'Correct Answer (True or False)'
      : isCs
      ? 'Správná odpověď (Povinné)'
      : 'Correct Answer (Required)';
  const ansInput = document.createElement('input');
  ansInput.type = 'text';
  ansInput.id = `${uid}-ans`;
  ansInput.className = 'qb-correct';
  ansInput.required = true;
  ansInput.value = qData.correctAnswer || (type === 'true-false' ? (isCs ? 'Pravda' : 'True') : '');
  ansField.append(ansLabel, ansInput);

  // Explanation
  const expField = document.createElement('div');
  expField.className = 'field';
  const expLabel = document.createElement('label');
  expLabel.setAttribute('for', `${uid}-exp`);
  expLabel.textContent = isCs ? 'Vysvětlení pro kontrolu (Volitelné)' : 'Explanation for Review (Optional)';
  const expInput = document.createElement('input');
  expInput.type = 'text';
  expInput.id = `${uid}-exp`;
  expInput.className = 'qb-explanation';
  expInput.value = qData.explanation || '';
  expField.append(expLabel, expInput);

  card.append(ansField, expField);
  container.appendChild(card);
}

async function handleSaveTopicForm(e) {
  e.preventDefault();
  const form = e.target;
  if (!form.checkValidity()) {
    const firstInvalid = form.querySelector(':invalid');
    if (firstInvalid) firstInvalid.focus();
    return;
  }

  const existingId = document.getElementById('edit-topic-id').value.trim();
  const title = document.getElementById('edit-topic-title').value.trim();
  const subject = document.getElementById('edit-topic-subject').value.trim();
  const description = document.getElementById('edit-topic-desc').value.trim();
  const lang = form.querySelector('input[name="lang"]:checked')?.value || 'cs';

  const rawNotes = document.getElementById('edit-study-notes').value;
  const studyNotes = rawNotes
    .split('\n')
    .map((s) => s.trim())
    .filter(Boolean);

  const rawCards = document.getElementById('edit-flashcards').value;
  const flashcards = rawCards
    .split('\n')
    .map((line) => {
      const parts = line.split('|');
      if (parts.length < 2) return null;
      return { front: parts[0].trim(), back: parts.slice(1).join('|').trim() };
    })
    .filter(Boolean);

  const questionCards = document.querySelectorAll('#editor-questions-container .question-builder-card');
  const questions = [];
  questionCards.forEach((card, i) => {
    const qType = card.dataset.qType || 'multiple-choice';
    const prompt = card.querySelector('.qb-prompt')?.value.trim() || '';
    const correctAnswer = card.querySelector('.qb-correct')?.value.trim() || '';
    const explanation = card.querySelector('.qb-explanation')?.value.trim() || '';
    if (!prompt || !correctAnswer) return;

    if (qType === 'multiple-choice') {
      const rawOpts = card.querySelector('.qb-options')?.value || '';
      const options = rawOpts.split(',').map((s) => s.trim()).filter(Boolean);
      if (!options.includes(correctAnswer)) options.push(correctAnswer);
      questions.push({
        id: `q-${i + 1}`,
        type: 'multiple-choice',
        prompt,
        options,
        correctAnswer,
        explanation
      });
    } else if (qType === 'true-false') {
      const norm = normalizeAnswer(correctAnswer, true);
      const isFalse = norm === 'false' || norm === 'lez' || norm === 'ne';
      const useCs = lang === 'cs' || state.lang === 'cs';
      questions.push({
        id: `q-${i + 1}`,
        type: 'true-false',
        prompt,
        options: useCs ? ['Pravda', 'Lež'] : ['True', 'False'],
        correctAnswer: isFalse ? (useCs ? 'Lež' : 'False') : (useCs ? 'Pravda' : 'True'),
        explanation
      });
    } else {
      questions.push({
        id: `q-${i + 1}`,
        type: 'type-in',
        prompt,
        correctAnswer,
        acceptedAnswers: [correctAnswer.toLowerCase()],
        explanation
      });
    }
  });

  if (questions.length === 0) return;

  const slug =
    existingId ||
    `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}-${Date.now().toString(36)}`;

  await saveTopicEverywhere({
    id: slug,
    title,
    subject,
    description,
    lang,
    studyNotes,
    flashcards,
    questions
  });

  document.getElementById('topic-editor-dialog').close();
}

// ============================================================================
// Event Listeners & Initialization
// ============================================================================
function initEvents() {
  // Navigation tabs
  for (const btn of document.querySelectorAll('[data-nav]')) {
    btn.addEventListener('click', () => {
      switchView(btn.getAttribute('data-nav'));
    });
  }

  // Language switcher
  for (const btn of document.querySelectorAll('[data-lang-switch]')) {
    btn.addEventListener('click', () => {
      const nextLang = btn.getAttribute('data-lang-switch');
      state.lang = nextLang;
      localStorage.setItem(STORAGE_KEYS.LANG, nextLang);
      applyTranslations();
      renderAll();
      if (state.currentView === 'study') renderActiveFlashcard();
      if (state.currentView === 'quiz') renderCurrentQuizQuestion();
    });
  }

  // Search filter
  const searchForm = document.getElementById('topic-filter-form');
  const searchInput = document.getElementById('topic-search-input');
  searchForm?.addEventListener('submit', (e) => e.preventDefault());
  searchInput?.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderTopicsGrid();
  });

  // Study mode controls
  document.getElementById('back-from-study-btn')?.addEventListener('click', () => {
    switchView('topics');
  });
  document.getElementById('start-quiz-from-study-btn')?.addEventListener('click', () => {
    if (state.activeStudyTopic) {
      startQuiz(state.activeStudyTopic.id, 'full');
    }
  });
  const flipCardHandler = () => {
    state.flashcardFlipped = !state.flashcardFlipped;
    renderActiveFlashcard();
  };
  document.getElementById('flashcard-flip-btn')?.addEventListener('click', flipCardHandler);
  document.getElementById('flashcard-flip-action-btn')?.addEventListener('click', flipCardHandler);
  document.getElementById('flashcard-prev-btn')?.addEventListener('click', () => {
    state.flashcardIndex -= 1;
    state.flashcardFlipped = false;
    renderActiveFlashcard();
  });
  document.getElementById('flashcard-next-btn')?.addEventListener('click', () => {
    state.flashcardIndex += 1;
    state.flashcardFlipped = false;
    renderActiveFlashcard();
  });

  // Quiz controls
  document.getElementById('quit-quiz-btn')?.addEventListener('click', () => {
    if (state.quizTimerInterval) clearInterval(state.quizTimerInterval);
    state.activeQuiz = null;
    switchView('topics');
  });
  document.getElementById('quiz-answer-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    handleQuizCheckAnswer();
  });
  document.getElementById('quiz-next-question-btn')?.addEventListener('click', () => {
    handleQuizNextQuestion();
  });

  // Scores filter
  document.getElementById('scores-topic-filter')?.addEventListener('change', (e) => {
    state.scoresTopicFilter = e.target.value;
    renderScoresTable();
  });

  // Review Dialog actions
  document.getElementById('review-retake-full-btn')?.addEventListener('click', () => {
    const att = state.activeReviewAttempt;
    document.getElementById('attempt-review-dialog')?.close();
    if (att) startQuiz(att.topicId, 'full');
  });
  document.getElementById('review-retry-mistakes-btn')?.addEventListener('click', () => {
    const att = state.activeReviewAttempt;
    document.getElementById('attempt-review-dialog')?.close();
    if (!att) return;
    const topic = state.topics.find((tp) => tp.id === att.topicId);
    if (!topic) return;
    const missedIds = new Set(
      (att.answers || []).filter((a) => !a.isCorrect).map((a) => a.prompt)
    );
    const missedQuestions = topic.questions.filter((q) => missedIds.has(q.prompt));
    if (missedQuestions.length > 0) {
      startQuiz(topic.id, 'mistakes', missedQuestions);
    }
  });

  // Parent Studio buttons
  document.getElementById('create-new-topic-btn')?.addEventListener('click', () => {
    openTopicEditorModal(null);
  });
  document.getElementById('cancel-editor-btn')?.addEventListener('click', () => {
    document.getElementById('topic-editor-dialog')?.close();
  });
  document.getElementById('add-mc-question-btn')?.addEventListener('click', () => {
    appendQuestionBuilderCard({ type: 'multiple-choice' });
  });
  document.getElementById('add-tf-question-btn')?.addEventListener('click', () => {
    appendQuestionBuilderCard({ type: 'true-false' });
  });
  document.getElementById('add-typein-question-btn')?.addEventListener('click', () => {
    appendQuestionBuilderCard({ type: 'type-in' });
  });
  document.getElementById('topic-editor-form')?.addEventListener('submit', handleSaveTopicForm);

  // Copy AI Prompt button
  document.getElementById('copy-prompt-btn')?.addEventListener('click', (e) => {
    const code = document.getElementById('ai-prompt-template')?.textContent || '';
    navigator.clipboard?.writeText(code);
    const btn = e.currentTarget;
    btn.textContent = t('promptCopiedMsg');
    setTimeout(() => {
      btn.textContent = t('copyPromptBtn');
    }, 1500);
  });

  // Import JSON Modal
  document.getElementById('open-import-modal-btn')?.addEventListener('click', () => {
    document.getElementById('import-json-form')?.reset();
    document.getElementById('import-dialog')?.showModal();
  });
  document.getElementById('import-json-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const textarea = document.getElementById('import-json-textarea');
    const raw = textarea?.value.trim() || '';
    try {
      const parsed = JSON.parse(raw);
      const list = Array.isArray(parsed)
        ? parsed
        : Array.isArray(parsed?.topics)
        ? parsed.topics
        : [parsed];
      for (const item of list) {
        if (item && item.title && Array.isArray(item.questions)) {
          item.id = item.id || `import-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
          await saveTopicEverywhere(item);
        }
      }
      document.getElementById('import-dialog')?.close();
    } catch (err) {
      textarea.setCustomValidity('Invalid JSON');
      textarea.classList.add('user-invalid-fallback');
      document.getElementById('import-json-error-text').textContent = err.message;
    }
  });
  document.getElementById('import-json-textarea')?.addEventListener('input', (e) => {
    e.target.setCustomValidity('');
    e.target.classList.remove('user-invalid-fallback');
  });

  // Firebase Cloud Modal
  document.getElementById('open-firebase-btn')?.addEventListener('click', () => {
    document.getElementById('firebase-config-dialog')?.showModal();
  });
  document.getElementById('firebase-config-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const raw = document.getElementById('firebase-config-input')?.value.trim() || '';
    const feedback = document.getElementById('firebase-form-feedback');
    if (!raw) {
      localStorage.removeItem(STORAGE_KEYS.FIREBASE_CFG);
      state.firebaseConnected = false;
      updateSyncBadge();
      document.getElementById('firebase-config-dialog')?.close();
      return;
    }
    try {
      // Support pasting either strict JSON or JS object literal from Firebase Console
      const jsonReady = raw
        .replace(/^[^{]*(\{[\s\S]*\})[^}]*$/, '$1')
        .replace(/(['"])?([a-zA-Z0-9_]+)(['"])?\s*:/g, '"$2":')
        .replace(/,\s*\}/g, '}');
      const cfg = JSON.parse(jsonReady);
      if (!cfg.apiKey || !cfg.projectId) {
        throw new Error('Missing apiKey or projectId');
      }
      localStorage.setItem(STORAGE_KEYS.FIREBASE_CFG, JSON.stringify(cfg));
      const ok = await initFirebaseSync();
      if (ok) {
        await pushAllLocalDataToCloud();
        document.getElementById('firebase-config-dialog')?.close();
      }
    } catch (err) {
      if (feedback) {
        feedback.hidden = false;
        feedback.className = 'quiz-feedback-box is-wrong';
        feedback.textContent = `Could not parse Firebase config: ${err.message}`;
      }
    }
  });
  document.getElementById('sync-local-to-cloud-btn')?.addEventListener('click', async () => {
    const feedback = document.getElementById('firebase-form-feedback');
    if (!state.db) {
      if (feedback) {
        feedback.hidden = false;
        feedback.className = 'quiz-feedback-box is-wrong';
        feedback.textContent = 'Please save a valid Firebase configuration first.';
      }
      return;
    }
    await pushAllLocalDataToCloud();
    if (feedback) {
      feedback.hidden = false;
      feedback.className = 'quiz-feedback-box is-correct';
      feedback.textContent = '✅ All local topics and test scores uploaded to Firestore!';
    }
  });

  // Install PWA Modal & beforeinstallprompt
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    state.deferredInstallPrompt = e;
    const banner = document.getElementById('native-install-banner');
    if (banner) banner.hidden = false;
  });

  document.getElementById('open-install-btn')?.addEventListener('click', () => {
    document.getElementById('install-pwa-dialog')?.showModal();
  });

  document.getElementById('trigger-native-install-btn')?.addEventListener('click', async () => {
    if (!state.deferredInstallPrompt) return;
    state.deferredInstallPrompt.prompt();
    await state.deferredInstallPrompt.userChoice;
    state.deferredInstallPrompt = null;
    document.getElementById('native-install-banner').hidden = true;
  });

  // Auth Sign-In Dialog & Role Switcher
  const authDialog = document.getElementById('auth-login-dialog');
  authDialog?.addEventListener('cancel', (e) => {
    if (!state.userRole) {
      e.preventDefault();
    }
  });
  authDialog?.addEventListener('close', () => {
    if (!state.userRole) {
      openLoginDialog();
    }
  });

  document.getElementById('open-login-btn')?.addEventListener('click', () => {
    openLoginDialog();
  });

  for (const radio of document.querySelectorAll('input[name="accountRole"]')) {
    radio.addEventListener('change', (e) => {
      const selected = e.target.value === 'admin' ? AUTH_ACCOUNTS.admin : AUTH_ACCOUNTS.honza;
      const usernameInput = document.getElementById('login-username');
      if (usernameInput) usernameInput.value = selected.email;
    });
  }

  document.getElementById('toggle-login-password-btn')?.addEventListener('click', (e) => {
    const btn = e.currentTarget;
    const pwdInput = document.getElementById('login-password');
    if (!pwdInput) return;
    const isShowing = pwdInput.type === 'text';
    pwdInput.type = isShowing ? 'password' : 'text';
    btn.setAttribute('aria-pressed', isShowing ? 'false' : 'true');
    btn.textContent = isShowing ? t('showPasswordBtn') : t('hidePasswordBtn');
  });

  document.getElementById('auth-login-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const roleKey = form.querySelector('input[name="accountRole"]:checked')?.value || 'honza';
    const account = roleKey === 'admin' ? AUTH_ACCOUNTS.admin : AUTH_ACCOUNTS.honza;
    const password = document.getElementById('login-password')?.value || '';
    const feedback = document.getElementById('auth-login-feedback');
    const submitBtn = document.getElementById('auth-submit-btn');

    if (password.length < 6) {
      document.getElementById('login-password')?.focus();
      return;
    }

    if (feedback) feedback.hidden = true;
    if (submitBtn) submitBtn.disabled = true;

    try {
      if (state.auth) {
        const { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } = await import('firebase/auth');
        try {
          await signInWithEmailAndPassword(state.auth, account.email, password);
        } catch (signInErr) {
          // Auto-provision default account on first login if not created yet
          if (
            (signInErr.code === 'auth/user-not-found' || signInErr.code === 'auth/invalid-credential') &&
            password === account.defaultPass
          ) {
            const cred = await createUserWithEmailAndPassword(state.auth, account.email, password);
            await updateProfile(cred.user, { displayName: account.displayName });
          } else {
            throw signInErr;
          }
        }
      } else {
        // Offline local fallback verification
        if (password !== account.defaultPass) {
          throw new Error('Invalid password');
        }
      }

      state.userRole = account.role;
      state.currentView = account.role === 'admin' ? 'studio' : 'topics';
      localStorage.setItem(STORAGE_KEYS.AUTH_ROLE, account.role);
      applyRolePermissions();
      document.getElementById('auth-login-dialog')?.close();
    } catch {
      if (feedback) {
        feedback.hidden = false;
        feedback.textContent = t('invalidPasswordError');
      }
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });

  const handleSignOut = async () => {
    if (state.auth) {
      const { signOut } = await import('firebase/auth');
      await signOut(state.auth).catch(() => {});
    }
    state.userRole = null;
    localStorage.removeItem(STORAGE_KEYS.AUTH_ROLE);
    applyRolePermissions();
    openLoginDialog();
  };

  document.getElementById('auth-signout-btn')?.addEventListener('click', handleSignOut);
  document.getElementById('header-logout-btn')?.addEventListener('click', handleSignOut);
}

// Register Service Worker for Android / iOS PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}

// Boot Application
UserInvalidFallback.init(document);
initDialogFallbacks();
loadLocalData();
initEvents();
applyTranslations();
applyRolePermissions();
renderAll();
loadCatalogQuizzes();
initFirebaseSync();

