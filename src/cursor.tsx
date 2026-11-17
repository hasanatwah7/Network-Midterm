import { useEffect, useRef } from 'react';

export default function Cursor() {
  const glow = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const glowEl = glow.current;
    const ringEl = ring.current;
    const dotEl = dot.current;
    if (!glowEl || !ringEl || !dotEl) return;

    let x = 0;
    let y = 0;
    let scale = 1;
    let hot = false;

    const place = (el: HTMLElement, s: number) => {
      el.style.transform = `translate(${x}px, ${y}px) scale(${s})`;
    };
    const repaint = () => {
      place(glowEl, hot ? 1.15 : 1);
      place(ringEl, scale * (hot ? 1.5 : 1));
      place(dotEl, 1);
    };

    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      repaint();
      glowEl.style.opacity = '1';
      ringEl.style.opacity = '1';
      dotEl.style.opacity = '1';
    };

    const over = (e: PointerEvent) => {
      hot = !!((e.target as HTMLElement)?.closest?.('button, a, input, [role="button"]'));
      ringEl.classList.toggle('hot', hot);
      repaint();
    };

    const down = (e: PointerEvent) => {
      scale = 0.82;
      repaint();
      const ripple = document.createElement('span');
      ripple.className = 'click-ripple';
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      document.body.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
    };

    const up = () => {
      scale = 1;
      repaint();
    };
    const leave = () => {
      glowEl.style.opacity = '0';
      ringEl.style.opacity = '0';
      dotEl.style.opacity = '0';
    };

    window.addEventListener('pointermove', move);
    window.addEventListener('pointerover', over);
    window.addEventListener('pointerdown', down);
    window.addEventListener('pointerup', up);
    document.addEventListener('mouseleave', leave);

    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerover', over);
      window.removeEventListener('pointerdown', down);
      window.removeEventListener('pointerup', up);
      document.removeEventListener('mouseleave', leave);
    };
  }, []);

  return (
    <>
      <div ref={glow} className="cursor-glow" aria-hidden="true" />
      <div className="cursor-layer" aria-hidden="true">
        <div ref={ring} className="cursor-ring" />
        <div ref={dot} className="cursor-dot" />
      </div>
    </>
  );
}
