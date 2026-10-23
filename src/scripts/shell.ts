/**
 * The window server. One set of app elements (`section.app`), two ways to present them:
 *
 * - desktop (≥ 900px wide): overlapping macOS windows you can drag, resize, focus, minimize
 *   into the Dock, zoom and close;
 * - phone: full-screen iOS apps that open out of their home screen icon and close with the
 *   home indicator (or the browser's back button).
 */

type Listener = () => void;
type OpenOptions = { select?: string; from?: Element | null };

const phoneQuery = window.matchMedia('(max-width: 899px)');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const open = new Set<string>();
const minimized = new Set<string>();
const listeners = new Set<Listener>();
let focused: string | null = null;
let zCounter = 10;

const appEl = (id: string) => document.getElementById(`app-${id}`) as HTMLElement | null;
const allApps = () => [...document.querySelectorAll<HTMLElement>('section.app')];
const desktop = () => document.querySelector<HTMLElement>('.desktop')!;
const isPhone = () => phoneQuery.matches;
const emit = () => listeners.forEach((listener) => listener());

/** Subscribe to window changes; the listener also runs right away with the current state. */
export const onAppsChange = (listener: Listener) => {
  listeners.add(listener);
  listener();
};
export const focusedApp = () => focused;
export const isOpen = (id: string) => open.has(id);
export const isMinimized = (id: string) => minimized.has(id);
export const appName = (id: string | null) => (id ? (appEl(id)?.dataset.name ?? '') : '');

/** Where an app comes from and goes back to: its Dock or home screen icon. */
const launcherFor = (id: string) =>
  document.querySelector<HTMLElement>(
    isPhone() ? `.home [data-open-app="${id}"] .home-icon` : `.dock-item[data-open-app="${id}"] .app-art`,
  );

const rectOf = (el: Element | null | undefined) => {
  const rect = el?.getBoundingClientRect();
  return rect && rect.width ? rect : null;
};

// ───────────────────────── Desktop geometry ─────────────────────────

const DOCK_SPACE = 92;

const area = () => {
  const el = desktop();
  return { width: el.clientWidth, height: el.clientHeight - DOCK_SPACE };
};

/** First-open size and place for each app, arranged like someone actually uses the Mac. */
const defaultFrame = (id: string) => {
  const { width: W, height: H } = area();
  const clampW = (w: number) => Math.min(w, W - 40);
  const clampH = (h: number) => Math.min(h, H - 24);
  const left = Math.max(20, Math.round(W * 0.05));
  switch (id) {
    case 'contacts': {
      const w = clampW(420);
      return { x: left, y: 20, w, h: clampH(680) };
    }
    case 'notes': {
      const x = Math.min(left + 360, Math.max(20, W - 980));
      return { x, y: 64, w: clampW(Math.min(940, W - x - 130)), h: clampH(600) };
    }
    case 'finder': {
      const w = clampW(1020);
      return { x: Math.round((W - w) / 2), y: 36, w, h: clampH(620) };
    }
    case 'terminal': {
      const w = clampW(720);
      return { x: Math.max(20, W - w - 160), y: Math.max(20, H - 470), w, h: clampH(460) };
    }
    case 'mail': {
      const w = clampW(600);
      return { x: Math.round((W - w) / 2) + 40, y: 80, w, h: clampH(480) };
    }
    case 'preview': {
      const w = clampW(680);
      return { x: Math.round((W - w) / 2) + 120, y: 16, w, h: clampH(880) };
    }
    default:
      return { x: 120, y: 60, w: clampW(760), h: clampH(520) };
  }
};

const setFrame = (el: HTMLElement, frame: { x: number; y: number; w: number; h: number }) => {
  el.style.setProperty('--x', `${Math.round(frame.x)}px`);
  el.style.setProperty('--y', `${Math.round(frame.y)}px`);
  el.style.setProperty('--w', `${Math.round(frame.w)}px`);
  el.style.setProperty('--h', `${Math.round(frame.h)}px`);
};

const frameOf = (el: HTMLElement) => ({
  x: parseFloat(el.style.getPropertyValue('--x')) || 0,
  y: parseFloat(el.style.getPropertyValue('--y')) || 0,
  w: parseFloat(el.style.getPropertyValue('--w')) || el.offsetWidth,
  h: parseFloat(el.style.getPropertyValue('--h')) || el.offsetHeight,
});

// ───────────────────────── Focus ─────────────────────────

export const focusApp = (id: string | null) => {
  if (id && !open.has(id)) return;
  focused = id;
  for (const el of allApps()) el.classList.toggle('is-focused', el.dataset.app === id);
  if (id && !isPhone()) {
    appEl(id)!.style.setProperty('--z', String(++zCounter));
    history.replaceState(history.state, '', `#${id}`);
  }
  emit();
};

const focusTopmost = () => {
  const candidates = [...open].filter((id) => !minimized.has(id));
  const top = candidates.sort(
    (a, b) => Number(appEl(b)!.style.getPropertyValue('--z')) - Number(appEl(a)!.style.getPropertyValue('--z')),
  )[0];
  focusApp(top ?? null);
  if (!top && !isPhone()) history.replaceState(history.state, '', location.pathname);
};

// ───────────────────────── Animations ─────────────────────────

const animateFrom = (el: HTMLElement, from: DOMRect | null, reverse = false) => {
  if (reducedMotion.matches) return Promise.resolve();
  const to = el.getBoundingClientRect();
  const start = from
    ? `translate(${from.left + from.width / 2 - (to.left + to.width / 2)}px, ${from.top + from.height / 2 - (to.top + to.height / 2)}px) scale(${from.width / to.width}, ${from.height / to.height})`
    : 'scale(0.92)';
  const frames: Keyframe[] = [
    { transform: start, opacity: from ? 0.2 : 0, borderRadius: isPhone() ? '22%' : undefined },
    { transform: 'none', opacity: 1, borderRadius: isPhone() ? '0px' : undefined },
  ].map((frame) => Object.fromEntries(Object.entries(frame).filter(([, value]) => value !== undefined)));
  return el
    .animate(reverse ? frames.reverse() : frames, {
      duration: reverse ? 320 : 520,
      easing: reverse ? 'cubic-bezier(0.4, 0, 0.7, 0.2)' : 'cubic-bezier(0.2, 1.05, 0.3, 1)',
    })
    .finished.then(() => undefined);
};

/** Genie-ish: the window narrows toward the bottom while it falls into its Dock icon. */
const genie = (el: HTMLElement, target: DOMRect | null, restoring: boolean) => {
  if (reducedMotion.matches) return Promise.resolve();
  const from = el.getBoundingClientRect();
  const to = target ?? new DOMRect(window.innerWidth / 2, window.innerHeight, 0, 0);
  const dx = to.left + to.width / 2 - (from.left + from.width / 2);
  const dy = to.top + to.height / 2 - (from.top + from.height / 2);
  const scale = Math.max(0.03, to.width / from.width);
  const frames: Keyframe[] = [
    { transform: 'none', opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
    {
      transform: `translate(${dx * 0.3}px, ${dy * 0.5}px) scale(0.6, 0.5)`,
      opacity: 0.9,
      clipPath: 'polygon(0 0, 100% 0, 72% 100%, 28% 100%)',
      offset: 0.45,
    },
    {
      transform: `translate(${dx}px, ${dy}px) scale(${scale})`,
      opacity: 0,
      clipPath: 'polygon(30% 0, 70% 0, 52% 100%, 48% 100%)',
    },
  ];
  el.style.transformOrigin = 'center bottom';
  return el
    .animate(restoring ? frames.reverse() : frames, {
      duration: 560,
      easing: restoring ? 'cubic-bezier(0.2, 0.9, 0.3, 1.04)' : 'cubic-bezier(0.55, 0, 0.75, 0.3)',
    })
    .finished.then(() => {
      el.style.transformOrigin = '';
    });
};

// ───────────────────────── Open / close ─────────────────────────

export const openApp = async (id: string, options: OpenOptions = {}) => {
  const el = appEl(id);
  if (!el) return;
  const select = () => options.select && el.dispatchEvent(new CustomEvent('app:select', { detail: options.select }));

  if (isPhone()) {
    if (open.has(id)) {
      select();
      return;
    }
    for (const other of [...open]) hide(other);
    open.add(id);
    el.classList.add('is-open');
    el.dispatchEvent(new Event('app:open'));
    history.pushState({ app: id }, '', `#${id}`);
    focusApp(id);
    select();
    await animateFrom(el, rectOf(options.from ?? launcherFor(id)));
    return;
  }

  if (minimized.has(id)) {
    minimized.delete(id);
    el.classList.remove('is-minimized');
    focusApp(id);
    await genie(el, rectOf(launcherFor(id)), true);
  } else if (!open.has(id)) {
    if (!el.style.getPropertyValue('--w')) setFrame(el, defaultFrame(id));
    open.add(id);
    el.classList.add('is-open');
    el.dispatchEvent(new Event('app:open'));
    focusApp(id);
    select();
    await animateFrom(el, rectOf(options.from ?? launcherFor(id)));
    return;
  }
  focusApp(id);
  select();
};

const hide = (id: string) => {
  const el = appEl(id)!;
  open.delete(id);
  minimized.delete(id);
  el.classList.remove('is-open', 'is-minimized', 'is-zoomed', 'is-focused', 'is-detail');
};

export const closeApp = async (id: string) => {
  const el = appEl(id);
  if (!el || !open.has(id)) return;
  if (isPhone()) {
    await animateFrom(el, rectOf(launcherFor(id)), true);
    hide(id);
    focusApp(null);
    if (history.state?.app === id) history.back();
    return;
  }
  await el.animate(
    [
      { transform: 'none', opacity: 1 },
      { transform: 'scale(0.94)', opacity: 0 },
    ],
    {
      duration: reducedMotion.matches ? 1 : 190,
      easing: 'ease-in',
    },
  ).finished;
  hide(id);
  focusTopmost();
  emit();
};

export const minimizeApp = async (id: string) => {
  const el = appEl(id);
  if (!el || !open.has(id) || minimized.has(id) || isPhone()) return;
  if (el.classList.contains('is-zoomed')) await toggleZoom(id);
  minimized.add(id);
  await genie(el, rectOf(launcherFor(id)), false);
  el.classList.add('is-minimized');
  focusTopmost();
  emit();
};

export const toggleZoom = async (id: string) => {
  const el = appEl(id);
  if (!el || isPhone()) return;
  const first = el.getBoundingClientRect();
  el.classList.toggle('is-zoomed');
  focusApp(id);
  if (reducedMotion.matches) return;
  const last = el.getBoundingClientRect();
  await el.animate(
    [
      {
        transformOrigin: 'top left',
        transform: `translate(${first.left - last.left}px, ${first.top - last.top}px) scale(${first.width / last.width}, ${first.height / last.height})`,
      },
      { transformOrigin: 'top left', transform: 'none' },
    ],
    { duration: 460, easing: 'cubic-bezier(0.25, 1.05, 0.4, 1)' },
  ).finished;
};

export const restoreAll = () => [...minimized].forEach((id) => openApp(id));

// ───────────────────────── Drag and resize ─────────────────────────

const INTERACTIVE = 'button, a, input, textarea, select, label, [role="option"], [data-nodrag]';

const startDrag = (el: HTMLElement, event: PointerEvent, mode: 'move' | 'resize') => {
  if (isPhone() || el.classList.contains('is-zoomed')) return;
  event.preventDefault();
  const start = { px: event.clientX, py: event.clientY, ...frameOf(el) };
  const bounds = desktop().getBoundingClientRect();
  document.documentElement.classList.add(mode === 'move' ? 'is-dragging' : 'is-resizing');

  const move = (moveEvent: PointerEvent) => {
    const dx = moveEvent.clientX - start.px;
    const dy = moveEvent.clientY - start.py;
    if (mode === 'move') {
      setFrame(el, {
        ...start,
        x: Math.min(bounds.width - 120, Math.max(120 - start.w, start.x + dx)),
        y: Math.min(bounds.height - 60, Math.max(0, start.y + dy)),
      });
    } else {
      setFrame(el, { ...start, w: Math.max(380, start.w + dx), h: Math.max(300, start.h + dy) });
    }
  };
  const end = () => {
    window.removeEventListener('pointermove', move);
    document.documentElement.classList.remove('is-dragging', 'is-resizing');
  };
  window.addEventListener('pointermove', move);
  window.addEventListener('pointerup', end, { once: true });
  window.addEventListener('pointercancel', end, { once: true });
};

// ───────────────────────── Phone: home indicator gesture ─────────────────────────

const homeGesture = (el: HTMLElement, event: PointerEvent) => {
  const id = el.dataset.app!;
  const startY = event.clientY;
  let dy = 0;
  const indicator = event.currentTarget as HTMLElement;
  indicator.setPointerCapture(event.pointerId);

  const move = (moveEvent: PointerEvent) => {
    dy = Math.min(0, moveEvent.clientY - startY);
    const progress = Math.min(1, -dy / 320);
    el.style.transform = `translateY(${dy * 0.55}px) scale(${1 - progress * 0.35})`;
    el.style.borderRadius = `${12 + progress * 30}px`;
  };
  const end = async () => {
    indicator.removeEventListener('pointermove', move);
    if (dy < -50 || Math.abs(dy) < 4) {
      const current = el.getBoundingClientRect();
      const target = rectOf(launcherFor(id));
      el.style.transform = '';
      el.style.borderRadius = '';
      // Continue from where the finger left the app, down into its icon.
      if (target && !reducedMotion.matches) {
        const to = el.getBoundingClientRect();
        const fromTransform = `translate(${current.left + current.width / 2 - (to.left + to.width / 2)}px, ${current.top + current.height / 2 - (to.top + to.height / 2)}px) scale(${current.width / to.width})`;
        const toTransform = `translate(${target.left + target.width / 2 - (to.left + to.width / 2)}px, ${target.top + target.height / 2 - (to.top + to.height / 2)}px) scale(${target.width / to.width}, ${target.height / to.height})`;
        await el.animate(
          [
            { transform: fromTransform, borderRadius: '40px', opacity: 1 },
            { transform: toTransform, borderRadius: '22%', opacity: 0.3 },
          ],
          { duration: 300, easing: 'cubic-bezier(0.3, 0.7, 0.4, 1)' },
        ).finished;
        hide(id);
        focusApp(null);
        if (history.state?.app === id) history.back();
      } else {
        closeApp(id);
      }
    } else {
      el.animate([{ transform: el.style.transform }, { transform: 'none' }], {
        duration: 300,
        easing: 'cubic-bezier(0.2, 1.2, 0.4, 1)',
      });
      el.style.transform = '';
      el.style.borderRadius = '';
    }
  };
  indicator.addEventListener('pointermove', move);
  indicator.addEventListener('pointerup', end, { once: true });
  indicator.addEventListener('pointercancel', end, { once: true });
};

// ───────────────────────── Wiring ─────────────────────────

const appFromHash = () => {
  const id = location.hash.slice(1);
  return id && appEl(id) ? id : null;
};

const startDesktop = () => {
  const requested = appFromHash();
  const initial = ['notes', 'contacts'];
  for (const id of initial) {
    const el = appEl(id)!;
    setFrame(el, defaultFrame(id));
    open.add(id);
    el.classList.add('is-open');
    el.dispatchEvent(new Event('app:open'));
    focusApp(id);
  }
  if (requested && !initial.includes(requested)) openApp(requested);
  else if (requested) focusApp(requested);
  else history.replaceState(null, '', location.pathname);
};

const startPhone = () => {
  const requested = appFromHash();
  history.replaceState(null, '', location.pathname);
  if (requested) openApp(requested);
};

const init = () => {
  for (const el of allApps()) {
    el.addEventListener('pointerdown', (event) => {
      const target = event.target as Element;
      if (isPhone()) return;
      if (open.has(el.dataset.app!) && focused !== el.dataset.app) focusApp(el.dataset.app!);
      if (target.closest('.window-resize')) startDrag(el, event, 'resize');
      else if (target.closest('[data-drag]') && !target.closest(INTERACTIVE)) startDrag(el, event, 'move');
    });

    // Double-clicking a toolbar zooms, as on the Mac.
    el.addEventListener('dblclick', (event) => {
      const target = event.target as Element;
      if (!isPhone() && target.closest('[data-drag]') && !target.closest(INTERACTIVE)) toggleZoom(el.dataset.app!);
    });

    el.addEventListener('click', (event) => {
      const action = (event.target as Element).closest<HTMLElement>('[data-window-action]')?.dataset.windowAction;
      const id = el.dataset.app!;
      if (action === 'close') closeApp(id);
      else if (action === 'minimize') minimizeApp(id);
      else if (action === 'zoom') toggleZoom(id);
    });

    el.querySelector<HTMLElement>('.home-indicator')?.addEventListener('pointerdown', (event) => {
      if (isPhone()) homeGesture(el, event);
    });
  }

  // Anything with data-open-app launches that app: Dock, desktop icons, menus, home screen.
  document.addEventListener('click', (event) => {
    const launcher = (event.target as Element).closest<HTMLElement>('[data-open-app]');
    if (!launcher || launcher.closest('[data-launch="dblclick"]')) return;
    event.preventDefault();
    openApp(launcher.dataset.openApp!, {
      select: launcher.dataset.select,
      from: launcher.querySelector('.home-icon, .app-art'),
    });
  });

  window.addEventListener('popstate', () => {
    if (!isPhone()) return;
    for (const id of [...open])
      if (history.state?.app !== id) {
        const el = appEl(id)!;
        animateFrom(el, rectOf(launcherFor(id)), true).then(() => {
          hide(id);
          focusApp(null);
        });
      }
  });

  phoneQuery.addEventListener('change', () => {
    for (const id of [...open]) hide(id);
    focusApp(null);
    if (isPhone()) startPhone();
    else startDesktop();
  });

  // Keep windows reachable when the browser window shrinks.
  window.addEventListener('resize', () => {
    if (isPhone()) return;
    const { width } = area();
    for (const id of open) {
      const el = appEl(id)!;
      const frame = frameOf(el);
      if (frame.x > width - 120) setFrame(el, { ...frame, x: Math.max(0, width - frame.w - 20) });
    }
  });

  if (isPhone()) startPhone();
  else startDesktop();
};

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
