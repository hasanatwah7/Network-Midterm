import {
  allQuestions as atwanAll,
  topics,
  courseMetadata,
  type Question as AtwanQuestion,
  type QuestionSource as AtwanSource,
} from '../data';
import {
  ch1Questions,
  ch2Questions,
  ch5Questions,
  problemSolvingPatterns,
  type ProblemSolvingPattern,
} from '../data (1)';

export type { TopicId, QuestionType, PriorityTier } from '../data';
export type { ProblemSolvingPattern };
export { topics, courseMetadata, problemSolvingPatterns };

export type SourceId = AtwanSource | 'ch1' | 'ch2' | 'ch5';
export type Professor = 'atwan' | 'mahfouz';
export type Q = Omit<AtwanQuestion, 'source'> & { source: SourceId };

export const mahfouzQuestions: Q[] = [...ch1Questions, ...ch2Questions, ...ch5Questions];
export const allQuestions: Q[] = [...atwanAll, ...mahfouzQuestions];
export const uniqueQuestions: Q[] = allQuestions.filter((q) => !q.isDuplicate);

export const professorOf = (s: SourceId): Professor =>
  s === 'ch1' || s === 'ch2' || s === 'ch5' ? 'mahfouz' : 'atwan';

export const sections: { id: Professor; ar: string; en: string; short: string; sources: SourceId[] }[] = [
  {
    id: 'atwan',
    ar: 'د. أحمد عطوان',
    en: 'Prof. Ahmed Atwan',
    short: 'ATWAN',
    sources: ['midterm-2025', 'midterm-2026', 'question-bank'],
  },
  {
    id: 'mahfouz',
    ar: 'د. محفوظ',
    en: 'Prof. Mahfouz',
    short: 'MAHFOUZ',
    sources: ['ch1', 'ch2', 'ch5'],
  },
];

export const sources: { id: SourceId; professor: Professor; ar: string; en: string; short: string }[] = [
  { id: 'midterm-2025', professor: 'atwan', ar: 'ميدتيرم 25', en: 'Midterm 25', short: 'M25' },
  { id: 'midterm-2026', professor: 'atwan', ar: 'ميدتيرم 26', en: 'Midterm 26', short: 'M26' },
  { id: 'question-bank', professor: 'atwan', ar: 'بنك الأسئلة', en: 'Question Bank', short: 'BANK' },
  { id: 'ch1', professor: 'mahfouz', ar: 'الفصل الأول', en: 'Chapter 1', short: 'CH1' },
  { id: 'ch2', professor: 'mahfouz', ar: 'الفصل الثاني', en: 'Chapter 2', short: 'CH2' },
  { id: 'ch5', professor: 'mahfouz', ar: 'المحاضرة 3 / Ch5', en: 'Lecture 3 / Ch5', short: 'CH5' },
];

export const countFor = (predicate: (q: Q) => boolean) => allQuestions.filter(predicate).length;
export const sourceCount = (s: SourceId) => countFor((q) => q.source === s);
export const professorCount = (p: Professor) => countFor((q) => professorOf(q.source) === p);
export const topicCount = (t: string, p?: Professor | 'both') =>
  countFor((q) => q.topic === t && (!p || p === 'both' || professorOf(q.source) === p));

export const findQuestion = (id: string) => allQuestions.find((q) => q.id === id);
