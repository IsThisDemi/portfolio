# Riccardo Martinello — Portfolio

My portfolio, built as a small macOS desktop in the browser: a menu bar, a Dock, and one window per section,
in a Liquid Glass style. On phones the Dock becomes a floating tab bar.

Built with [Astro](https://astro.build). No UI framework and no runtime dependencies: plain CSS and a few small TypeScript modules.

## Features

- **Windows**: traffic lights work. Red/yellow minimize the window into the Dock, green zooms it to fill the
  screen (Esc to exit). The window in focus gets colored lights and a deeper shadow.
- **Dock**: magnification on hover, launch bounce, running indicators. On phones it becomes a tab bar with a sliding selection.
- **Spotlight** (`⌘K`, `Ctrl+K` or `/`): search sections, jobs, projects, skills and links.
- **Control Center**: light/dark/auto appearance (dark by default), accent color, wallpaper. Choices are saved in the browser.
- **Quick Look**: project cards open a full-detail panel with screenshots.
- **Liquid Glass**: blurred, saturated glass with specular rims everywhere. On Chromium, the menu bar and Dock
  also refract their edges through an SVG displacement map (`src/scripts/liquid-glass.ts`).
- Respects `prefers-reduced-motion` and `prefers-reduced-transparency`, and works without JavaScript (content is plain HTML).

## Editing content

Everything shown on the site lives in two files:

- `src/data/cv.ts`: profile, skills, jobs, projects, education, and the list of sections/windows.
- `src/data/tech.ts`: every technology (name, logo, link), referenced by key from `cv.ts`.

Icons are [Iconify](https://icon-sets.iconify.design) names (`set:name`) rendered to SVG at build time. The
available sets are listed in `src/lib/icon.ts`; to use another set, install `@iconify-json/<set>` and add it there.

The downloadable CV is the static file `public/cv.pdf`.

## Development

```sh
npm install
npm run dev      # http://localhost:4321
npm run check    # type check
npm run build    # static site in dist/
```

## Structure

```
src/
  data/        content (cv.ts, tech.ts)
  layouts/     Desktop.astro: page shell, appearance bootstrap
  components/  MenuBar, Dock, Window, Spotlight, Wallpaper, icons and chips
  sections/    one window per section
  scripts/     window manager, preferences, notifications, liquid glass
  styles/      global tokens and the glass material
```
