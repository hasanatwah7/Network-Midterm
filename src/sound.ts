// Tiny synthesized sound effects — no assets, no network requests.
// AudioContext is created lazily and resumed on the first user gesture.

let ctx: AudioContext | null = null;
let enabled = true;
let lastTickSec = -1;

type Osc = OscillatorType;

function context(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  try {
    if (!ctx) {
      const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!Ctor) return null;
      ctx = new Ctor();
    }
    if (ctx.state === 'suspended') void ctx.resume();
    return ctx;
  } catch {
    return null;
  }
}

/** Call from a click/keypress handler so autoplay policies allow audio. */
export function unlockAudio() {
  if (enabled) context();
}

export const isSoundEnabled = () => enabled;

export function setSoundEnabled(value: boolean) {
  enabled = value;
  if (value) unlockAudio();
  else lastTickSec = -1;
}

function beep(freq: number, start: number, duration: number, type: Osc, volume: number, endFreq?: number) {
  const ac = context();
  if (!ac || !enabled) return;
  const t0 = ac.currentTime + start;
  const osc = ac.createOscillator();
  const gain = ac.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t0);
  if (endFreq) osc.frequency.exponentialRampToValueAtTime(endFreq, t0 + duration);
  gain.gain.setValueAtTime(0.0001, t0);
  gain.gain.exponentialRampToValueAtTime(volume, t0 + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
  osc.connect(gain);
  gain.connect(ac.destination);
  osc.start(t0);
  osc.stop(t0 + duration + 0.03);
}

/** Bright ascending three-note chime. */
export function playCorrect() {
  if (!enabled) return;
  beep(523.25, 0, 0.11, 'sine', 0.11);
  beep(659.25, 0.075, 0.11, 'sine', 0.1);
  beep(783.99, 0.15, 0.24, 'sine', 0.09);
}

/** Low descending buzz. */
export function playWrong() {
  if (!enabled) return;
  beep(220, 0, 0.17, 'square', 0.06, 150);
  beep(150, 0.13, 0.23, 'sawtooth', 0.045, 96);
}

/** Short tick during the final seconds; sharper from 3 seconds down. */
export function playTick(secondsLeft: number) {
  if (!enabled || secondsLeft <= 0 || secondsLeft > 5 || secondsLeft === lastTickSec) return;
  lastTickSec = secondsLeft;
  const urgent = secondsLeft <= 3;
  beep(urgent ? 1046.5 : 784, 0, urgent ? 0.085 : 0.05, 'square', urgent ? 0.055 : 0.03);
}

export function resetTicks() {
  lastTickSec = -1;
}
