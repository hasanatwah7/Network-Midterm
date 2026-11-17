import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import {
  allQuestions,
  findQuestion,
  professorCount,
  professorOf,
  problemSolvingPatterns,
  sections,
  sources,
  sourceCount,
  topicCount,
  topics,
  uniqueQuestions,
  type Professor,
  type Q,
  type SourceId,
  type TopicId,
} from './dataSource';
import { copy, professorName, sourceLabel, type Lang } from './i18n';
import { useRunMotion, useSurfaceMotion } from './motion';
import { isSoundEnabled, playCorrect, playTick, playWrong, resetTicks, setSoundEnabled, unlockAudio } from './sound';
import Cursor from './cursor';

type Section = 'dashboard' | 'solve' | 'patterns' | 'speedrun';
type Duration = 30 | 45 | 60 | 'custom';
type Result = { id: string; chosen: number; correct: boolean; timedOut: boolean };
type Filters = { prof: Professor | 'both'; source: SourceId | 'all'; topic: TopicId | 'all'; focusQ: string | null };

const shortTopic = (label: string, lang: Lang) => label.split(lang === 'ar' ? '،' : ',')[0].trim();
const cleanTitle = (label: string) => label.split(/[,(]/)[0].trim();
const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function App() {
  const [section, setSection] = useState<Section>('dashboard');
  const [lang, setLang] = useState<Lang>('ar');
  const [filters, setFilters] = useState<Filters>({ prof: 'both', source: 'all', topic: 'all', focusQ: null });
  const [patternTarget, setPatternTarget] = useState<string | null>(null);
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.repeat || (e.target as HTMLElement)?.tagName === 'INPUT') return;
      if (e.key.toLowerCase() === 'l') setLang((l) => (l === 'ar' ? 'en' : 'ar'));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const go = (next: Section) => {
    setSection(next);
    scrollTop();
  };

  const openSolve = (patch: Partial<Filters> = {}) => {
    setFilters((f) => ({ ...f, focusQ: null, ...patch }));
    go('solve');
  };

  const openPatterns = (id?: string) => {
    setPatternTarget(id ?? null);
    go('patterns');
  };

  const nav: { id: Section; label: string; index: string }[] = [
    { id: 'dashboard', label: t.dashboard, index: '01' },
    { id: 'solve', label: t.solve, index: '02' },
    { id: 'patterns', label: t.patterns, index: '03' },
    { id: 'speedrun', label: t.speedrun, index: '04' },
  ];

  return (
    <div className="app">
      <div className="grid-bg" aria-hidden="true" />
      <div className="glow-bg" aria-hidden="true" />
      <Cursor />

      <header className="topbar">
        <div className="wrap topbar-inner">
          <button className="brand" onClick={() => go('dashboard')} aria-label="3twah">
            <span className="brand-name">3twah<span className="brand-dot">.</span></span>
            <span className="brand-sub mono">{t.brandSub}</span>
          </button>
          <nav className="section-nav" aria-label={t.sectionsNav}>
            {nav.map((n) => (
              <button key={n.id} className={`nav-btn ${section === n.id ? 'on' : ''}`} onClick={() => go(n.id)} aria-current={section === n.id ? 'page' : undefined}>
                <span className="nav-index mono">{n.index}</span>
                <span>{n.label}</span>
              </button>
            ))}
          </nav>
          <div className="top-actions">
            <SoundToggle lang={lang} />
            <LangToggle lang={lang} onChange={setLang} />
          </div>
        </div>
      </header>

      <main className="main">
        {section === 'dashboard' && (
          <Dashboard
            lang={lang}
            filters={filters}
            onFilter={(patch) => setFilters((f) => ({ ...f, ...patch }))}
            onSolve={openSolve}
            onPatterns={openPatterns}
            onSpeedrun={() => go('speedrun')}
          />
        )}
        {section === 'solve' && <Solve lang={lang} filters={filters} onFilter={(patch) => setFilters((f) => ({ ...f, ...patch }))} />}
        {section === 'patterns' && (
          <Patterns
            lang={lang}
            target={patternTarget}
            onQuestion={(id) => openSolve({ focusQ: id })}
          />
        )}
        {section === 'speedrun' && <Speedrun lang={lang} onHome={() => go('dashboard')} />}
      </main>

      <footer className="footer mono">{t.footer}</footer>
    </div>
  );
}

function LangToggle({ lang, onChange }: { lang: Lang; onChange: (l: Lang) => void }) {
  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button className={lang === 'ar' ? 'on' : ''} onClick={() => onChange('ar')} aria-pressed={lang === 'ar'}>ع</button>
      <button className={lang === 'en' ? 'on' : ''} onClick={() => onChange('en')} aria-pressed={lang === 'en'}>EN</button>
    </div>
  );
}

function SoundToggle({ lang }: { lang: Lang }) {
  const [on, setOn] = useState(isSoundEnabled());
  return (
    <button
      className={`sound-toggle mono ${on ? '' : 'off'}`}
      onClick={() => { setSoundEnabled(!on); setOn(!on); }}
      title={`${copy[lang].sound}: ${on ? 'ON' : 'OFF'}`}
      aria-label={`${copy[lang].sound}: ${on ? 'ON' : 'OFF'}`}
      aria-pressed={on}
    >
      {on ? '♪' : '♪̸'}
    </button>
  );
}

function ProfessorSwitch({ value, onChange, lang }: { value: Professor | 'both'; onChange: (p: Professor | 'both') => void; lang: Lang }) {
  const t = copy[lang];
  const items: { id: Professor | 'both'; label: string }[] = [
    { id: 'both', label: t.both },
    { id: 'atwan', label: t.profAtwan },
    { id: 'mahfouz', label: t.profMahfouz },
  ];
  return (
    <div className="segmented" role="group" aria-label={t.professorLabel}>
      {items.map((i) => (
        <button key={i.id} className={value === i.id ? 'on' : ''} onClick={() => onChange(i.id)}>{i.label}</button>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ Dashboard */

function Dashboard({
  lang,
  filters,
  onFilter,
  onSolve,
  onPatterns,
  onSpeedrun,
}: {
  lang: Lang;
  filters: Filters;
  onFilter: (patch: Partial<Filters>) => void;
  onSolve: (patch?: Partial<Filters>) => void;
  onPatterns: (id?: string) => void;
  onSpeedrun: () => void;
}) {
  const t = copy[lang];
  const root = useRef<HTMLDivElement>(null);
  const { prof, source, topic } = filters;

  useSurfaceMotion(root, `${prof}-${source}-${topic}-${lang}`);

  const scoped = useMemo(
    () => allQuestions.filter((q) => prof === 'both' || professorOf(q.source) === prof),
    [prof],
  );
  const activeSources = sources.filter((s) => prof === 'both' || s.professor === prof);
  const atwanN = professorCount('atwan');
  const mahfouzN = professorCount('mahfouz');

  const chooseProf = (p: Professor | 'both') => onFilter({ prof: p, source: 'all', topic: 'all' });
  const filteredCount = scoped.filter((q) => source === 'all' || q.source === source).filter((q) => topic === 'all' || q.topic === topic).length;

  return (
    <div className="wrap" ref={root}>
      <div className="scan-line" data-motion="rail" aria-hidden="true"><span /></div>

      <section className="page-head" data-motion="head">
        <div>
          <div className="mono eyebrow">CS-NET / CONTROL ROOM</div>
          <h1>{t.dashboard}</h1>
          <p>{t.dashboardSub}</p>
        </div>
        <ProfessorSwitch value={prof} onChange={chooseProf} lang={lang} />
      </section>

      <section className="dash-grid">
        <article className="panel hero-panel" data-motion="card">
          <div className="panel-tag mono">{t.bankOverview}</div>
          <div className="hero-number mono">{allQuestions.length}<span>{t.questions}</span></div>
          <div className="hero-bars">
            <div className="mini-bar"><span style={{ width: `${(atwanN / allQuestions.length) * 100}%` }} /></div>
            <div className="mini-bar alt"><span style={{ width: `${(mahfouzN / allQuestions.length) * 100}%` }} /></div>
          </div>
          <div className="hero-legend mono">
            <span><i className="dot-a" /> {t.profAtwan} {atwanN}</span>
            <span><i className="dot-b" /> {t.profMahfouz} {mahfouzN}</span>
          </div>
          <button className="hero-cta" onClick={() => onSolve({ source: 'all', topic: 'all' })}>
            <span className="mono">&gt;</span> {t.startSolving}<span className="mono hero-cta-count">{filteredCount}</span><span className="go-arrow">→</span>
          </button>
        </article>

        <article className="panel section-panel" data-motion="card">
          <div className="panel-tag mono">{t.professors}</div>
          <div className="section-list">
            {sections.map((s) => {
              const count = professorCount(s.id);
              const active = prof === s.id;
              return (
                <button key={s.id} className={`section-row ${active ? 'active' : ''}`} onClick={() => chooseProf(active ? 'both' : s.id)}>
                  <span className="section-mark mono">{s.short.slice(0, 2)}</span>
                  <span className="section-copy">
                    <b>{lang === 'ar' ? s.ar : s.en}</b>
                    <small className="mono">{count} {t.questions}</small>
                  </span>
                  <span className="section-arrow">↗</span>
                </button>
              );
            })}
            <button className="section-row solve-row" onClick={() => onSolve({ source: 'all', topic: 'all' })}>
              <span className="section-mark mono">SQ</span>
              <span className="section-copy"><b>{t.solve}</b><small className="mono">{allQuestions.length} {t.questions}</small></span>
              <span className="section-arrow">↗</span>
            </button>
          </div>
        </article>

        <article className="panel launch-panel" data-motion="card">
          <div className="panel-tag mono">{t.quickLaunch}</div>
          <div className="launch-orbit" aria-hidden="true"><span /><span /><span /></div>
          <h2>{t.speedrun}</h2>
          <p className="mono"><kbd>1</kbd><kbd>2</kbd><kbd>3</kbd><kbd>4</kbd> · <kbd>↵</kbd></p>
          <button className="go compact" onClick={onSpeedrun}><span className="prompt mono">&gt;</span> {t.launch}<span className="go-arrow">→</span></button>
        </article>

        <article className="panel source-panel" data-motion="card">
          <div className="panel-tag mono">{t.sourceLabel}</div>
          <div className="source-rows">
            <button className={`source-row ${source === 'all' ? 'active' : ''}`} onClick={() => onSolve({ source: 'all', topic: 'all' })}>
              <span className="mono">ALL</span><b>{t.all}</b><span className="mono count">{scoped.length}</span>
            </button>
            {activeSources.map((s) => (
              <button key={s.id} className={`source-row ${source === s.id ? 'active' : ''}`} onClick={() => onSolve({ source: s.id, topic: 'all' })}>
                <span className="mono">{s.short}</span>
                <b>{sourceLabel(lang, s.id)}</b>
                <span className="mono count">{sourceCount(s.id)}</span>
              </button>
            ))}
          </div>
        </article>

        <article className="panel category-panel" data-motion="card">
          <div className="panel-tag mono">{t.categories}</div>
          <div className="cat-bars">
            {topics.map((top) => {
              const n = topicCount(top.id, prof);
              const pct = scoped.length ? (n / scoped.length) * 100 : 0;
              return (
                <button
                  key={top.id}
                  className={`cat-row ${topic === top.id ? 'active' : ''}`}
                  onClick={() => onSolve({ topic: topic === top.id ? 'all' : top.id, source: 'all' })}
                  style={{ '--cat-color': top.color } as CSSProperties}
                >
                  <span className="cat-name">{shortTopic(lang === 'ar' ? top.titleAr : top.titleEn, lang)}</span>
                  <span className="cat-track"><i style={{ width: `${pct}%` }} /></span>
                  <span className="mono cat-count">{n}</span>
                </button>
              );
            })}
          </div>
        </article>

        <article className="panel patterns-panel" data-motion="card">
          <div className="panel-tag mono">{t.patterns}</div>
          <div className="patterns-preview">
            <div className="patterns-big mono">{problemSolvingPatterns.length}<span>{t.patternCount}</span></div>
            <div className="pattern-chips">
              {problemSolvingPatterns.map((p, i) => (
                <button key={p.id} className="pattern-chip mono" onClick={() => onPatterns(p.id)}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  {cleanTitle(lang === 'ar' ? p.titleAr : p.titleEn)}
                </button>
              ))}
            </div>
          </div>
          <button className="patterns-all mono" onClick={() => onPatterns()}><span>&gt;</span> {t.openPatterns} <span className="go-arrow">→</span></button>
        </article>
      </section>
    </div>
  );
}

/* ----------------------------------------------------------------------- Solve */

function Solve({ lang, filters, onFilter }: { lang: Lang; filters: Filters; onFilter: (patch: Partial<Filters>) => void }) {
  const t = copy[lang];
  const root = useRef<HTMLDivElement>(null);
  const { prof, source, topic, focusQ } = filters;
  const [shown, setShown] = useState(24);
  const [openId, setOpenId] = useState<string | null>(null);

  useSurfaceMotion(root, `${prof}-${source}-${topic}-${focusQ}-${lang}`);

  const scoped = useMemo(
    () => allQuestions.filter((q) => prof === 'both' || professorOf(q.source) === prof),
    [prof],
  );
  const bank = useMemo(
    () => focusQ
      ? allQuestions.filter((q) => q.id === focusQ)
      : scoped
          .filter((q) => source === 'all' || q.source === source)
          .filter((q) => topic === 'all' || q.topic === topic),
    [focusQ, scoped, source, topic],
  );
  const activeSources = sources.filter((s) => prof === 'both' || s.professor === prof);

  const pickSource = (s: SourceId | 'all') => {
    onFilter({ source: s, topic: 'all', focusQ: null });
    setOpenId(null);
    setShown(24);
  };
  const pickTopic = (x: TopicId | 'all') => {
    onFilter({ topic: x, focusQ: null });
    setOpenId(null);
    setShown(24);
  };

  return (
    <div className="wrap" ref={root}>
      <div className="scan-line" data-motion="rail" aria-hidden="true"><span /></div>
      <section className="page-head" data-motion="head">
        <div>
          <div className="mono eyebrow">CS-NET / QUESTION BANK</div>
          <h1>{t.solve}</h1>
          <p>{t.solveSub}</p>
        </div>
        <ProfessorSwitch value={prof} onChange={(p) => onFilter({ prof: p, source: 'all', topic: 'all', focusQ: null })} lang={lang} />
      </section>

      <section className="explorer" id="explorer">
        <div className="explorer-head" data-motion="head">
          <h2>{t.browse}</h2>
          <span className="mono">{bank.length} {t.questions}</span>
        </div>

        {focusQ && (
          <div className="focus-notice mono">
            <span>{t.focusQuestion}: <b>{focusQ}</b></span>
            <button onClick={() => { onFilter({ focusQ: null }); setOpenId(null); setShown(24); }}>{t.clear} ✕</button>
          </div>
        )}

        <nav className="tabs" aria-label={t.sourceLabel}>
          {activeSources.map((s) => (
            <button key={s.id} className={`tab ${source === s.id ? 'active' : ''}`} onClick={() => pickSource(s.id)}>
              {sourceLabel(lang, s.id)}<span className="mono">{sourceCount(s.id)}</span>
            </button>
          ))}
          {activeSources.length > 1 && (
            <button className={`tab ${source === 'all' ? 'active' : ''}`} onClick={() => pickSource('all')}>
              {t.all}<span className="mono">{scoped.length}</span>
            </button>
          )}
        </nav>

        <div className="chips">
          <button className={`chip ${topic === 'all' ? 'active' : ''}`} data-motion="chip" onClick={() => pickTopic('all')}>
            {t.all}<span className="mono">{scoped.length}</span>
          </button>
          {topics.map((top) => (
            <button
              key={top.id}
              className={`chip ${topic === top.id ? 'active' : ''}`}
              data-motion="chip"
              onClick={() => pickTopic(top.id)}
              style={{ '--chip-color': top.color } as CSSProperties}
            >
              {shortTopic(lang === 'ar' ? top.titleAr : top.titleEn, lang)}
              <span className="mono">{topicCount(top.id, prof)}</span>
            </button>
          ))}
        </div>

        <div className="list">
          {bank.slice(0, shown).map((q) => (
            <QuestionCard key={q.id} q={q} lang={lang} open={openId === q.id} onToggle={() => setOpenId(openId === q.id ? null : q.id)} />
          ))}
        </div>
        {shown < bank.length && (
          <button className="more" onClick={() => setShown((n) => n + 24)}>{t.showMore} <span className="mono">{bank.length - shown}</span></button>
        )}
      </section>
    </div>
  );
}

/* -------------------------------------------------------------------- Patterns */

function Patterns({ lang, target, onQuestion }: { lang: Lang; target: string | null; onQuestion: (id: string) => void }) {
  const t = copy[lang];
  const root = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<string | null>(target);

  useSurfaceMotion(root, `${lang}-${target}`);

  useEffect(() => {
    if (!target) return;
    setOpen(target);
    document.getElementById(`pattern-${target}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [target]);

  return (
    <div className="wrap" ref={root}>
      <div className="scan-line" data-motion="rail" aria-hidden="true"><span /></div>
      <section className="page-head" data-motion="head">
        <div>
          <div className="mono eyebrow">CS-NET / FORMULA LAB</div>
          <h1>{t.patterns}</h1>
          <p>{t.patternsSub}</p>
        </div>
        <div className="page-stat mono">{problemSolvingPatterns.length}<span>{t.patternCount}</span></div>
      </section>

      <section className="patterns">
        <div className="pattern-grid">
          {problemSolvingPatterns.map((p, i) => {
            const isOpen = open === p.id;
            return (
              <article key={p.id} id={`pattern-${p.id}`} className={`pattern-card ${isOpen ? 'open' : ''}`} data-motion="card">
                <button className="pattern-card-head" onClick={() => setOpen(isOpen ? null : p.id)} aria-expanded={isOpen}>
                  <span className="pattern-index mono">{String(i + 1).padStart(2, '0')}</span>
                  <span className="pattern-title">{lang === 'ar' ? p.titleAr : p.titleEn}</span>
                  <span className="pattern-toggle mono">{isOpen ? '−' : '+'}</span>
                </button>
                <div className="pattern-formula mono" dir="auto">{p.formula}</div>
                {isOpen && (
                  <div className="pattern-detail">
                    <div className="pattern-label mono">{t.stepsLabel}</div>
                    <ol className="pattern-steps">
                      {p.stepsAr.map((s, j) => <li key={j} dir="rtl">{s}</li>)}
                    </ol>
                    <div className="pattern-label mono">{t.exampleLabel}</div>
                    <div className="worked">
                      <div className="worked-row"><span className="mono">{t.problemLabel}</span><p dir="auto">{p.workedExample.problem}</p></div>
                      <div className="worked-row"><span className="mono">{t.solutionLabel}</span><p className="solution" dir="auto">{p.workedExample.solution}</p></div>
                    </div>
                    <div className="pattern-label mono">{t.relatedQuestions} <span>{p.relatedQuestionIds.length}</span></div>
                    <div className="related-qs">
                      {p.relatedQuestionIds.map((qid) => (
                        <button key={qid} className="related-q mono" onClick={() => onQuestion(qid)} title={findQuestion(qid)?.question ?? qid}>
                          {qid}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

/* ---------------------------------------------------------------- Question card */

function QuestionCard({ q, lang, open, onToggle }: { q: Q; lang: Lang; open: boolean; onToggle: () => void }) {
  const t = copy[lang];
  const [chosen, setChosen] = useState<number | null>(null);
  const isRight = chosen === q.correctAnswerIndex;
  const explanation = lang === 'ar' ? q.explanation.ar : q.explanation.en;
  const topicLabel = lang === 'ar' ? q.topicLabelAr : q.topicLabelEn;

  return (
    <article className={`card ${open ? 'open' : ''}`} data-motion="card">
      <div className="card-meta mono">
        <span className="q-num">#{String(q.number).padStart(2, '0')}</span>
        <span className="badge">{t.types[q.type]}</span>
        <span className="tier">{t.tier} {q.tier}</span>
        <span className="src-mini">{sourceLabel(lang, q.source)}</span>
        <span className="topic-mini">{shortTopic(topicLabel, lang)}</span>
      </div>
      <p className="q-text" dir="auto">{q.question}</p>

      <div className="options">
        {q.options.map((opt, i) => {
          const picked = chosen === i;
          const right = open && i === q.correctAnswerIndex;
          const cls = right ? 'correct' : picked && !isRight ? 'wrong' : '';
          return (
            <button key={i} className={`opt ${cls}`} onClick={() => { setChosen(i); if (!open) onToggle(); }}>
              <span className="opt-key mono">{i + 1}</span>
              <span dir="auto">{opt}</span>
              {right && <span className="mark">✓</span>}
              {picked && !isRight && <span className="mark">✕</span>}
            </button>
          );
        })}
      </div>

      {open && (
        <div className="explain">
          <div className="explain-head">
            <span className={isRight ? 'ok' : 'no'}>{chosen === null ? t.modelAnswer : isRight ? `${t.correct} ✓` : `${t.wrong} ✕`}</span>
            <span className="answer-text" dir="auto">{q.answer}</span>
          </div>
          <p className="ex-copy" dir={lang === 'ar' ? 'rtl' : 'auto'}>{explanation}</p>
        </div>
      )}
      {!open && <button className="reveal" onClick={onToggle}>{t.reveal}<span className="reveal-line" /></button>}
    </article>
  );
}

/* -------------------------------------------------------------------- Speedrun */

function Speedrun({ lang, onHome }: { lang: Lang; onHome: () => void }) {
  const t = copy[lang];
  const surface = useRef<HTMLDivElement>(null);
  const runRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<'setup' | 'run' | 'done'>('setup');
  const [duration, setDuration] = useState<Duration>(30);
  const [customSec, setCustomSec] = useState(90);
  const [prof, setProf] = useState<Professor | 'both'>('both');
  const [speedSource, setSpeedSource] = useState<SourceId | 'all'>('all');
  const [selectedTopics, setSelectedTopics] = useState<TopicId[]>([]);

  const [queue, setQueue] = useState<Q[]>([]);
  const [index, setIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [deadline, setDeadline] = useState<number | null>(null);
  const [chosen, setChosen] = useState(-1);
  const [revealed, setRevealed] = useState(false);
  const [results, setResults] = useState<Result[]>([]);

  useSurfaceMotion(surface, `${phase}-${lang}-${duration}-${prof}-${speedSource}-${selectedTopics.join(',')}`);
  useRunMotion(runRef, `${index}-${revealed}-${lang}`);

  const seconds = duration === 'custom' ? Math.min(600, Math.max(5, customSec || 5)) : duration;
  const q = queue[index];

  const matches = (item: Q) =>
    (prof === 'both' || professorOf(item.source) === prof) &&
    (speedSource === 'all' || item.source === speedSource) &&
    (selectedTopics.length === 0 || selectedTopics.includes(item.topic));

  const poolCount = uniqueQuestions.filter(matches).length;
  const activeSources = sources.filter((s) => prof === 'both' || s.professor === prof);

  const chooseProf = (p: Professor | 'both') => { setProf(p); setSpeedSource('all'); };
  const toggleTopic = (id: TopicId) =>
    setSelectedTopics((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const start = () => {
    const pool = uniqueQuestions.filter(matches);
    if (!pool.length) return;
    unlockAudio();
    resetTicks();
    setQueue(shuffle(pool));
    setIndex(0);
    setChosen(-1);
    setRevealed(false);
    setResults([]);
    setTimeLeft(seconds);
    setDeadline(Date.now() + seconds * 1000);
    setPhase('run');
  };

  const answer = (choice: number) => {
    if (revealed || !q) return;
    if (choice === q.correctAnswerIndex) playCorrect();
    else playWrong();
    resetTicks();
    setChosen(choice);
    setRevealed(true);
    setResults((r) => [...r, { id: q.id, chosen: choice, correct: choice === q.correctAnswerIndex, timedOut: choice < 0 }]);
  };

  const next = () => {
    if (!revealed) return;
    resetTicks();
    if (index + 1 >= queue.length) {
      setPhase('done');
      setDeadline(null);
    } else {
      setIndex(index + 1);
      setChosen(-1);
      setRevealed(false);
      setTimeLeft(seconds);
      setDeadline(Date.now() + seconds * 1000);
    }
  };

  const stop = () => {
    resetTicks();
    setPhase('setup');
    setDeadline(null);
    setQueue([]);
  };

  useEffect(() => {
    if (phase !== 'run' || revealed || deadline === null) return;
    const tick = () => {
      const left = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
      setTimeLeft(left);
      playTick(left);
      if (left === 0) answer(-1);
    };
    tick();
    const id = window.setInterval(tick, 200);
    return () => window.clearInterval(id);
  }, [phase, deadline, revealed, answer]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (phase !== 'run') return;
      if (e.key === 'Escape') { e.preventDefault(); stop(); return; }
      if (e.repeat) return;
      if (!revealed && ['1', '2', '3', '4'].includes(e.key)) {
        e.preventDefault();
        answer(Number(e.key) - 1);
      } else if (revealed && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        next();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [phase, revealed, answer, next]);

  if (phase === 'setup') {
    return (
      <div className="wrap setup" ref={surface}>
        <div className="setup-top" data-motion="head">
          <button className="ghost" onClick={onHome}>← {t.backHome}</button>
        </div>
        <div className="setup-heading" data-motion="head">
          <div className="mono eyebrow">CS-NET / TIMED DRILL</div>
          <h1>{t.speedrun}</h1>
          <p>{t.setupLead}</p>
        </div>
        <div className="setup-block" data-motion="head">
          <label className="mono">{t.timeLabel}</label>
          <div className="pills">
            {([30, 45, 60] as const).map((d) => (
              <button key={d} className={`pill mono ${duration === d ? 'active' : ''}`} data-motion="chip" onClick={() => setDuration(d)}>{d}<small>s</small></button>
            ))}
            <button className={`pill mono ${duration === 'custom' ? 'active' : ''}`} data-motion="chip" onClick={() => setDuration('custom')}>{lang === 'ar' ? 'مخصص' : 'Custom'}</button>
            {duration === 'custom' && (
              <input className="sec-input mono" type="number" min={5} max={600} value={customSec} onChange={(e) => setCustomSec(Number(e.target.value))} autoFocus />
            )}
          </div>
        </div>
        <div className="setup-block" data-motion="head">
          <label className="mono">{t.professorLabel}</label>
          <ProfessorSwitch value={prof} onChange={chooseProf} lang={lang} />
          {prof === 'both' && <p className="mix-note mono">↳ {t.mixNote}</p>}
        </div>
        <div className="setup-block" data-motion="head">
          <label className="mono">{t.sourceLabel}</label>
          <div className="pills">
            <button className={`pill ${speedSource === 'all' ? 'active' : ''}`} data-motion="chip" onClick={() => setSpeedSource('all')}>{t.all}</button>
            {activeSources.map((s) => (
              <button key={s.id} className={`pill ${speedSource === s.id ? 'active' : ''}`} data-motion="chip" onClick={() => setSpeedSource(s.id)}>{sourceLabel(lang, s.id)}</button>
            ))}
          </div>
        </div>
        <div className="setup-block" data-motion="head">
          <label className="mono">{t.categoryLabel}</label>
          <div className="pills wrap-pills">
            <button className={`pill ${selectedTopics.length === 0 ? 'active' : ''}`} data-motion="chip" onClick={() => setSelectedTopics([])}>{t.allCategories}</button>
            {topics.map((top) => {
              const on = selectedTopics.includes(top.id);
              return (
                <button key={top.id} className={`pill selectable ${on ? 'active' : ''}`} data-motion="chip" onClick={() => toggleTopic(top.id)} aria-pressed={on}>
                  <span className="check mono">{on ? '✓' : '+'}</span>
                  {shortTopic(lang === 'ar' ? top.titleAr : top.titleEn, lang)}
                </button>
              );
            })}
          </div>
          {selectedTopics.length > 0 && <button className="clear-cats mono" onClick={() => setSelectedTopics([])}>{t.clear} ✕</button>}
        </div>
        <button className="go" data-motion="head" onClick={start} disabled={!poolCount}>
          <span className="prompt mono">&gt;</span> {t.start}<span className="mono go-count">{poolCount} {t.questions}</span><span className="go-arrow">→</span>
        </button>
        <div className="keys-hint mono">
          <span><kbd>1</kbd>–<kbd>4</kbd> {t.hintAnswer}</span>
          <span><kbd>↵</kbd> {t.hintNext}</span>
          <span><kbd>Esc</kbd> {t.hintExit}</span>
          <span><kbd>L</kbd> EN/ع</span>
        </div>
      </div>
    );
  }

  if (phase === 'done') {
    const right = results.filter((r) => r.correct).length;
    const pct = results.length ? Math.round((right / results.length) * 100) : 0;
    const note = pct >= 80 ? t.noteHigh : pct >= 50 ? t.noteMid : t.noteLow;
    return (
      <div className="wrap done" ref={surface}>
        <div className="done-panel" data-motion="head">
          <div className="mono eyebrow">{t.finished}</div>
          <div className="score mono">{right}<span>/{results.length}</span></div>
          <div className="pct mono">{pct}%</div>
          <p className="done-note">{note}</p>
          <div className="done-actions">
            <button className="go" onClick={() => setPhase('setup')}><span className="prompt mono">&gt;</span> {t.replay}</button>
            <button className="ghost" onClick={onHome}>{t.home}</button>
          </div>
        </div>
        <div className="result-strip" data-motion="card">
          {results.map((r, i) => (
            <span key={r.id + i} className={r.correct ? 'r-ok' : 'r-no'} title={r.id}>{r.chosen < 0 ? '⏱' : r.correct ? '✓' : '✕'}</span>
          ))}
        </div>
      </div>
    );
  }

  if (!q) return null;

  const isRight = chosen === q.correctAnswerIndex;
  const progress = ((index + (revealed ? 1 : 0)) / queue.length) * 100;
  const circumference = 2 * Math.PI * 30;
  const offset = circumference * (1 - timeLeft / seconds);

  return (
    <div className="run" ref={runRef}>
      <div className="progress" data-run="meta"><div style={{ width: `${progress}%` }}><span className="progress-packet" /></div></div>

      <div className={`timer-fly ${timeLeft <= 5 ? 'low' : ''}`} data-run="meta">
        <div className="timer-ring">
          <svg viewBox="0 0 72 72" aria-hidden="true">
            <circle className="ring-bg" cx="36" cy="36" r="30" />
            <circle className="ring-fg" cx="36" cy="36" r="30" strokeDasharray={circumference} strokeDashoffset={offset} />
          </svg>
          <span className="timer-num mono">{timeLeft}</span>
        </div>
        <div className="timer-copy">
          <span className="mono">SEC</span>
          <small className="mono">{String(index + 1).padStart(2, '0')} / {String(queue.length).padStart(2, '0')}</small>
        </div>
        <button className="esc" onClick={stop} title="Esc">✕</button>
      </div>

      <div className="run-body">
        <div className="run-topic mono" data-run="meta">
          {shortTopic(lang === 'ar' ? q.topicLabelAr : q.topicLabelEn, lang)} <i>/</i> {sourceLabel(lang, q.source)} <i>/</i> {professorName(lang, professorOf(q.source))}
        </div>
        <h2 className="run-q" dir="auto" data-run="question">{q.question}</h2>
        <div className="run-options">
          {q.options.map((opt, i) => {
            const cls = revealed
              ? i === q.correctAnswerIndex ? 'correct' : chosen === i ? 'wrong' : 'dim'
              : '';
            return (
              <button key={i} className={`run-opt ${cls}`} data-run="option" onClick={() => answer(i)} disabled={revealed}>
                <span className="run-key mono">{i + 1}</span>
                <span dir="auto">{opt}</span>
                {revealed && i === q.correctAnswerIndex && <span className="mark">✓</span>}
                {revealed && chosen === i && !isRight && <span className="mark">✕</span>}
              </button>
            );
          })}
        </div>
        {revealed && (
          <div className="run-explain" data-run="explain">
            <div className="run-explain-head">
              <span className={isRight ? 'ok' : 'no'}>{chosen < 0 ? t.timeUp : isRight ? t.correct : t.wrong}</span>
              <span dir="auto">{t.answer}: <b>{q.answer}</b></span>
            </div>
            <p className="ex-copy" dir={lang === 'ar' ? 'rtl' : 'auto'}>{lang === 'ar' ? q.explanation.ar : q.explanation.en}</p>
          </div>
        )}
      </div>

      <div className="run-foot">
        {revealed ? (
          <button className="next-btn" data-run="next" onClick={next}>{t.next} <kbd>↵</kbd></button>
        ) : (
          <span className="hint mono"><kbd>1</kbd><kbd>2</kbd><kbd>3</kbd><kbd>4</kbd> {t.hintAnswer}</span>
        )}
      </div>
    </div>
  );
}

export default App;
