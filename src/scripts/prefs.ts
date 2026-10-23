/**
 * Appearance preferences (theme, accent, wallpaper), stored per visitor.
 * The same keys are read before first paint by the inline script in Desktop.astro.
 */

export type Theme = 'light' | 'dark' | 'auto';

export const ACCENTS = ['blue', 'purple', 'pink', 'red', 'orange', 'yellow', 'green', 'lime', 'graphite'] as const;
export const WALLPAPERS = ['lake', 'dusk', 'meadow', 'graphite'] as const;

const read = (key: string) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};

const write = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* Private mode: the choice lasts for this page view only. */
  }
};

const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

export const getTheme = (): Theme => {
  const stored = read('theme');
  return stored === 'light' || stored === 'auto' ? stored : 'dark';
};

export const getAccent = () => document.documentElement.dataset.accent ?? 'blue';
export const getWallpaper = () => document.documentElement.dataset.wallpaper ?? 'lake';

const applyTheme = (theme: Theme) => {
  const dark = theme === 'dark' || (theme === 'auto' && systemDark.matches);
  const root = document.documentElement;
  // Crossfade the whole page instead of snapping between appearances.
  root.classList.add('theme-transition');
  root.classList.toggle('dark', dark);
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#0b1230' : '#d7ecff');
  setTimeout(() => root.classList.remove('theme-transition'), 450);
};

export const setTheme = (theme: Theme) => {
  write('theme', theme);
  applyTheme(theme);
};

export const setAccent = (accent: string) => {
  write('accent', accent);
  document.documentElement.dataset.accent = accent;
};

export const setWallpaper = (wallpaper: string) => {
  write('wallpaper', wallpaper);
  document.documentElement.dataset.wallpaper = wallpaper;
};

systemDark.addEventListener('change', () => getTheme() === 'auto' && applyTheme('auto'));
