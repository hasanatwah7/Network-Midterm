import { useEffect, useState, type RefObject } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

type Scope = RefObject<HTMLElement | null>;

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduced;
}

/** One timeline per surface. Targets are inert DOM nodes marked with data-motion. */
export function useSurfaceMotion(scope: Scope, beat: string) {
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!scope.current) return;
      const q = gsap.utils.selector(scope);
      const targets = q('[data-motion]');
      if (reduced) {
        gsap.set(targets, { clearProps: 'all' });
        return;
      }
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo(q('[data-motion="rail"]'), { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: 'expo.out' }, 0)
        .fromTo(q('[data-motion="head"]'), { autoAlpha: 0, y: -14 }, { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.06 }, 0.04)
        .fromTo(q('[data-motion="chip"]'), { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.34, stagger: 0.035 }, 0.12)
        .fromTo(q('[data-motion="card"]'), { autoAlpha: 0, y: 18, scale: 0.985 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.44, stagger: 0.045 }, 0.16);
      return () => tl.kill();
    },
    { scope, dependencies: [beat, reduced], revertOnUpdate: true },
  );
}

/** The speedrun has its own beat: new question, then reveal. */
export function useRunMotion(scope: Scope, beat: string) {
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!scope.current) return;
      const q = gsap.utils.selector(scope);
      if (reduced) {
        gsap.set(q('[data-run]'), { clearProps: 'all' });
        return;
      }
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo(q('[data-run="meta"]'), { autoAlpha: 0, y: -8 }, { autoAlpha: 1, y: 0, duration: 0.28 }, 0)
        .fromTo(q('[data-run="question"]'), { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.42 }, 0.03)
        .fromTo(q('[data-run="option"]'), { autoAlpha: 0, x: 18 }, { autoAlpha: 1, x: 0, duration: 0.36, stagger: 0.05 }, 0.09)
        .fromTo(q('[data-run="explain"]'), { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.38 }, 0.02)
        .fromTo(q('[data-run="next"]'), { autoAlpha: 0, scale: 0.94 }, { autoAlpha: 1, scale: 1, duration: 0.3 }, 0.08);
      return () => tl.kill();
    },
    { scope, dependencies: [beat, reduced], revertOnUpdate: true },
  );
}
