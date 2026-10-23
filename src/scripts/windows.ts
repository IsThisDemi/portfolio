/**
 * Window manager for the desktop: which window is in front, launch animations as windows scroll
 * into view, and the traffic lights (close/minimize into the Dock, zoom to fill the screen).
 */

type Listener = () => void;

const listeners = new Set<Listener>();
const minimized = new Set<string>();
let active: string | null = null;
let focusedByClick: { id: string; scrollY: number } | null = null;

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const windows = () => [...document.querySelectorAll<HTMLElement>('.window[data-window]')];
const windowById = (id: string) => document.querySelector<HTMLElement>(`.window[data-window="${CSS.escape(id)}"]`);
const dockIcon = (id: string) => document.querySelector<HTMLElement>(`.dock-item[data-target="${CSS.escape(id)}"]`);

const emit = () => listeners.forEach((listener) => listener());

export const onWindowChange = (listener: Listener) => {
  listeners.add(listener);
};

export const activeWindow = () => active;

export const isMinimized = (id: string) => minimized.has(id);

const setActive = (id: string | null) => {
  if (id === active) return;
  active = id;
  for (const win of windows()) win.classList.toggle('is-active', win.dataset.window === id);
  emit();
};

/** The front window is the one under a line a third of the way down the viewport. */
const updateActive = () => {
  if (document.querySelector('.window.is-zoomed')) return;
  if (focusedByClick && Math.abs(window.scrollY - focusedByClick.scrollY) < 80) return;
  focusedByClick = null;

  const line = window.innerHeight * 0.33;
  const visible = windows().filter((win) => !minimized.has(win.dataset.window!));
  const hit = visible.find((win) => {
    const rect = win.getBoundingClientRect();
    return rect.top <= line && rect.bottom >= line;
  });
  const nearest =
    hit ??
    visible.reduce<HTMLElement | undefined>((best, win) => {
      const distance = Math.abs(win.getBoundingClientRect().top - line);
      return !best || distance < Math.abs(best.getBoundingClientRect().top - line) ? win : best;
    }, undefined);
  setActive(nearest?.dataset.window ?? null);
};

// ── Genie-ish animation between a window and its Dock icon. ──
const flyTo = (win: HTMLElement, iconEl: HTMLElement | null, reverse: boolean) => {
  if (reducedMotion()) return Promise.resolve();
  const from = win.getBoundingClientRect();
  const to = iconEl?.getBoundingClientRect() ?? new DOMRect(window.innerWidth / 2, window.innerHeight, 0, 0);
  const dx = to.left + to.width / 2 - (from.left + from.width / 2);
  const dy = to.top + to.height / 2 - (from.top + from.height / 2);
  const scale = Math.max(0.04, to.width / from.width);

  const keyframes: Keyframe[] = [
    { transform: 'none', opacity: 1, filter: 'blur(0)' },
    {
      transform: `translate(${dx * 0.35}px, ${dy * 0.55}px) scale(${0.55}, ${0.42})`,
      opacity: 0.9,
      offset: 0.45,
    },
    { transform: `translate(${dx}px, ${dy}px) scale(${scale})`, opacity: 0, filter: 'blur(2px)' },
  ];
  const animation = win.animate(reverse ? keyframes.reverse() : keyframes, {
    duration: reverse ? 520 : 560,
    easing: reverse ? 'cubic-bezier(0.2, 0.9, 0.3, 1.05)' : 'cubic-bezier(0.55, 0, 0.75, 0.3)',
  });
  win.style.transformOrigin = 'center bottom';
  return animation.finished.then(() => {
    win.style.transformOrigin = '';
  });
};

export const minimizeWindow = async (id: string) => {
  const win = windowById(id);
  if (!win || minimized.has(id)) return;
  if (win.classList.contains('is-zoomed')) await toggleZoom(win);
  minimized.add(id);
  await flyTo(win, dockIcon(id), false);
  win.classList.add('is-minimized');
  updateActive();
  emit();
};

export const restoreWindow = async (id: string) => {
  const win = windowById(id);
  if (!win || !minimized.has(id)) return;
  minimized.delete(id);
  win.classList.remove('is-minimized');
  win.classList.add('is-launched');
  emit();
  scrollToWindow(win, 'instant');
  await flyTo(win, dockIcon(id), true);
};

export const restoreAll = () => [...minimized].forEach((id) => restoreWindow(id));

/** Document position from layout alone, so launch/zoom transforms don't skew it. */
const pageTop = (el: HTMLElement) => {
  let top = 0;
  for (let node: HTMLElement | null = el; node; node = node.offsetParent as HTMLElement | null) top += node.offsetTop;
  return top;
};

const scrollToWindow = (win: HTMLElement, behavior: ScrollBehavior) => {
  const top = pageTop(win);
  const offset = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--menubar-h')) + 16;
  window.scrollTo({ top: Math.max(0, top - offset), behavior: reducedMotion() ? 'instant' : behavior });
};

/** Bring a window to the front: restore it if needed, scroll to it and make it active. */
export const focusWindow = async (id: string) => {
  const win = windowById(id);
  if (!win) return;
  const zoomed = document.querySelector<HTMLElement>('.window.is-zoomed');
  if (zoomed && zoomed !== win) await toggleZoom(zoomed);
  if (minimized.has(id)) await restoreWindow(id);
  else scrollToWindow(win, 'smooth');
  focusedByClick = null;
  setActive(id);
  history.replaceState(null, '', `#${id}`);
};

// ── Zoom: the window grows from its place to fill the screen (FLIP). ──
const toggleZoom = async (win: HTMLElement) => {
  const zooming = !win.classList.contains('is-zoomed');
  const first = win.getBoundingClientRect();

  if (zooming) {
    const placeholder = document.createElement('div');
    placeholder.className = 'window-placeholder';
    placeholder.style.height = `${first.height}px`;
    placeholder.style.gridColumn = getComputedStyle(win).gridColumn;
    win.before(placeholder);
    const backdrop = document.createElement('div');
    backdrop.className = 'zoom-backdrop';
    backdrop.addEventListener('click', () => toggleZoom(win));
    document.body.append(backdrop);
    win.classList.add('is-zoomed');
    document.documentElement.style.overflow = 'hidden';
    setActive(win.dataset.window ?? null);
  } else {
    win.previousElementSibling?.classList.contains('window-placeholder') && win.previousElementSibling.remove();
    document.querySelector('.zoom-backdrop')?.remove();
    win.classList.remove('is-zoomed');
    win.scrollTop = 0;
    document.documentElement.style.overflow = '';
  }

  if (reducedMotion()) return;
  const last = win.getBoundingClientRect();
  await win.animate(
    [
      {
        transformOrigin: 'top left',
        transform: `translate(${first.left - last.left}px, ${first.top - last.top}px) scale(${first.width / last.width}, ${first.height / last.height})`,
      },
      { transformOrigin: 'top left', transform: 'none' },
    ],
    { duration: 520, easing: 'cubic-bezier(0.25, 1.1, 0.4, 1)' },
  ).finished;
};

// ── Wiring ──
const init = () => {
  for (const win of document.querySelectorAll<HTMLElement>('.window')) {
    win.addEventListener('click', (event) => {
      const button = (event.target as Element).closest<HTMLButtonElement>('.light');
      if (button) {
        const id = win.dataset.window;
        const action = button.dataset.action;
        if (action === 'zoom') toggleZoom(win);
        else if (id) minimizeWindow(id);
        return;
      }
    });

    win.addEventListener('pointerdown', () => {
      if (win.dataset.window && !win.classList.contains('is-zoomed')) {
        focusedByClick = { id: win.dataset.window, scrollY: window.scrollY };
        setActive(win.dataset.window);
      }
    });
  }

  // Launch animation: windows start "closed" (see Window.astro) and open when they scroll in.
  const allWindows = [...document.querySelectorAll<HTMLElement>('.window')];
  if (reducedMotion() || !('IntersectionObserver' in window)) {
    allWindows.forEach((win) => win.classList.add('is-launched'));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const win = entry.target as HTMLElement;
          const delay = Number(win.dataset.launchDelay ?? 0);
          setTimeout(() => win.classList.add('is-launched'), delay);
          observer.unobserve(win);
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    );
    allWindows.forEach((win, index) => {
      win.dataset.launchDelay = String(index < 2 ? 120 + index * 140 : 0);
      observer.observe(win);
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    const zoomed = document.querySelector<HTMLElement>('.window.is-zoomed');
    if (zoomed) toggleZoom(zoomed);
  });

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      updateActive();
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  updateActive();
};

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
