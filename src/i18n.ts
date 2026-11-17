import { sources, type Professor, type SourceId } from './dataSource';

export type Lang = 'ar' | 'en';

type Copy = {
  brandSub: string;
  dashboard: string;
  dashboardSub: string;
  bankOverview: string;
  total: string;
  questions: string;
  sections: string;
  sectionsNav: string;
  professors: string;
  categories: string;
  quickLaunch: string;
  browse: string;
  solve: string;
  solveSub: string;
  startSolving: string;
  openPatterns: string;
  all: string;
  both: string;
  profAtwan: string;
  profMahfouz: string;
  speedrun: string;
  launch: string;
  reveal: string;
  modelAnswer: string;
  correct: string;
  wrong: string;
  timeUp: string;
  answer: string;
  next: string;
  seconds: string;
  timeLabel: string;
  sourceLabel: string;
  professorLabel: string;
  categoryLabel: string;
  allCategories: string;
  selected: string;
  clear: string;
  start: string;
  hintAnswer: string;
  hintNext: string;
  hintExit: string;
  backHome: string;
  finished: string;
  noteHigh: string;
  noteMid: string;
  noteLow: string;
  replay: string;
  home: string;
  tier: string;
  footer: string;
  showMore: string;
  patterns: string;
  patternsSub: string;
  patternCount: string;
  stepsLabel: string;
  exampleLabel: string;
  problemLabel: string;
  solutionLabel: string;
  relatedQuestions: string;
  focusQuestion: string;
  sound: string;
  setupLead: string;
  mixNote: string;
  types: Record<string, string>;
};

const AR_FOOTER = 'صل على النبي ﷺ · رجاء لا تنسونا من صالح دعائكم';

export const copy: Record<Lang, Copy> = {
  ar: {
    brandSub: 'شبكات الحاسب · لوحة المذاكرة',
    dashboard: 'لوحة الأسئلة',
    dashboardSub: 'كل بنوك الأسئلة في مكان واحد. اختار الدكتور، الكاتيجوريات، وابدأ.',
    bankOverview: 'نظرة عامة',
    total: 'إجمالي الأسئلة',
    questions: 'سؤال',
    sections: 'الأقسام',
    sectionsNav: 'أقسام الموقع',
    professors: 'الدكاترة',
    categories: 'الكاتيجوريات',
    quickLaunch: 'ابدأ سريع',
    browse: 'تصفح الأسئلة',
    solve: 'حل الأسئلة',
    solveSub: 'تصفح البنوك، اختر المصدر والكاتيجوري، وافتح الشرح لأي سؤال.',
    startSolving: 'ابدأ الحل',
    openPatterns: 'كل القوالب',
    all: 'الكل',
    both: 'الاثنان',
    profAtwan: 'عطوان',
    profMahfouz: 'محفوظ',
    speedrun: 'speedrun',
    launch: 'شغّل السبيدرن',
    reveal: 'اعرض الشرح',
    modelAnswer: 'الإجابة النموذجية',
    correct: 'صح',
    wrong: 'غلط',
    timeUp: 'انتهى الوقت',
    answer: 'الإجابة',
    next: 'السؤال الجاي',
    seconds: 'ثانية',
    timeLabel: 'الوقت لكل سؤال',
    sourceLabel: 'المصدر',
    professorLabel: 'الدكتور',
    categoryLabel: 'الكاتيجوريات (اختر أكتر من واحدة)',
    allCategories: 'كل الكاتيجوريات',
    selected: 'مختار',
    clear: 'مسح',
    start: 'ابدأ',
    hintAnswer: 'إجابة',
    hintNext: 'التالي',
    hintExit: 'خروج',
    backHome: 'الرئيسية',
    finished: 'انتهيت',
    noteHigh: 'قوي جداً 🔥',
    noteMid: 'كويس، راجع اللي غلطت فيه',
    noteLow: 'هتعلم، جرّب رunda تانية',
    replay: 'إعادة',
    home: 'الرئيسية',
    tier: 'أولوية',
    footer: AR_FOOTER,
    showMore: 'عرض المزيد',
    patterns: 'بصمجة المسائل',
    patternsSub: 'قوالب جاهزة للمسائل اللي بتتكرر في الامتحان: المعادلة، الخطوات، ومثال محلول. اضغط على أي قالب وافتح الأسئلة المرتبطة بيه.',
    patternCount: 'قالب',
    stepsLabel: 'الخطوات',
    exampleLabel: 'مثال محلول',
    problemLabel: 'المسألة',
    solutionLabel: 'الحل',
    relatedQuestions: 'أسئلة مرتبطة',
    focusQuestion: 'السؤال المحدد',
    sound: 'الصوت',
    setupLead: 'أسئلة متقلبة، وقت محدد، وشرح بعد كل سؤال. بالكيبورد بس.',
    mixNote: 'هتخلط أسئلة الدكتورين مع بعض',
    types: {
      mcq: 'اختيار',
      practical: 'مسألة',
      'short-answer': 'إجابة قصيرة',
      essay: 'مقالي',
      'fill-in-blank': 'أكمل',
    },
  },
  en: {
    brandSub: 'Computer Networks · Study Console',
    dashboard: 'Question Dashboard',
    dashboardSub: 'Every bank in one place. Pick a professor, filter categories, then run the clock.',
    bankOverview: 'Overview',
    total: 'Total questions',
    questions: 'questions',
    sections: 'Sections',
    sectionsNav: 'Site sections',
    professors: 'Professors',
    categories: 'Categories',
    quickLaunch: 'Quick launch',
    browse: 'Browse bank',
    solve: 'Solve',
    solveSub: 'Browse the banks, pick a source and category, and reveal any explanation.',
    startSolving: 'Start solving',
    openPatterns: 'All templates',
    all: 'All',
    both: 'Both',
    profAtwan: 'Atwan',
    profMahfouz: 'Mahfouz',
    speedrun: 'speedrun',
    launch: 'Launch speedrun',
    reveal: 'Reveal answer',
    modelAnswer: 'Model answer',
    correct: 'Correct',
    wrong: 'Wrong',
    timeUp: "Time's up",
    answer: 'Answer',
    next: 'Next question',
    seconds: 'sec',
    timeLabel: 'Time per question',
    sourceLabel: 'Source',
    professorLabel: 'Professor',
    categoryLabel: 'Categories (pick as many as you want)',
    allCategories: 'All categories',
    selected: 'selected',
    clear: 'Clear',
    start: 'Start',
    hintAnswer: 'to answer',
    hintNext: 'next',
    hintExit: 'exit',
    backHome: 'Home',
    finished: 'Run complete',
    noteHigh: 'Sharp 🔥',
    noteMid: 'Solid — review the misses',
    noteLow: 'Warm up and run it again',
    replay: 'Again',
    home: 'Home',
    tier: 'Tier',
    footer: AR_FOOTER,
    showMore: 'Load more',
    patterns: 'Problem Patterns',
    patternsSub: 'Ready-made templates for the exam’s recurring problem types: the formula, the steps, and a worked example. Open a template to jump to its related questions.',
    patternCount: 'templates',
    stepsLabel: 'Steps',
    exampleLabel: 'Worked example',
    problemLabel: 'Problem',
    solutionLabel: 'Solution',
    relatedQuestions: 'Related questions',
    focusQuestion: 'Focused question',
    sound: 'Sound',
    setupLead: 'Shuffled questions, a hard clock, and an explanation after every answer. Keyboard only.',
    mixNote: 'Questions from both professors will be mixed',
    types: {
      mcq: 'MCQ',
      practical: 'Practical',
      'short-answer': 'Short',
      essay: 'Essay',
      'fill-in-blank': 'Fill',
    },
  },
};

export const professorName = (lang: Lang, p: Professor) =>
  p === 'atwan' ? copy[lang].profAtwan : copy[lang].profMahfouz;

export const sourceLabel = (lang: Lang, id: SourceId) => {
  const s = sources.find((x) => x.id === id)!;
  return lang === 'ar' ? s.ar : s.en;
};
