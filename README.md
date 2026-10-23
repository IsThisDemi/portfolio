# Riccardo Martinello — Portfolio

My portfolio as a small Mac: a desktop with a menu bar, a Dock and real apps, in the style of macOS Tahoe.
On a phone it becomes an iPhone home screen and the same apps open full screen.

Built with [Astro](https://astro.build), plain CSS and a few small TypeScript modules. No runtime dependencies.

## The apps

| App      | What's in it                                                                                   |
| -------- | ---------------------------------------------------------------------------------------------- |
| Contacts | My card: photo, contact fields, a note about me. _Share_ downloads a real vCard.               |
| Notes    | Work and Education folders; each job or diploma is a note.                                     |
| Finder   | Projects (icon or list view, tags, preview pane, Quick Look with space) and the Stack folder.  |
| Terminal | Interactive: `help`, `whoami`, `projects`, `experience`, `skills`, `contact`, `open github`, … |
| Mail     | A new message to me; _Send_ hands the draft to the visitor's own mail app.                     |
| Preview  | My résumé (PDF).                                                                               |

On the desktop, windows can be dragged by their toolbar, resized from the corner, minimized into the Dock, zoomed
(green button or double-click on the toolbar) and closed. The menus in the menu bar work, Spotlight opens with
`⌘K`, and the Control Center switches appearance (dark by default), accent color and wallpaper.

On a phone, apps open out of their icon and close with the home indicator (tap or swipe up) or the back button.

## Editing content

- `src/data/cv.ts`: profile, skills, jobs, projects, education.
- `src/data/tech.ts`: every technology (name, logo, link), referenced by key from `cv.ts`.
- `src/data/apps.ts`: which apps exist, in Dock order.

The downloadable résumé is the static file `public/cv.pdf`.

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
  apps/        one file per app (Contacts, Notes, Finder, Terminal, Mail, Preview)
  components/  menu bar, Dock, desktop icons, iPhone home screen, Spotlight, window frame, icons
  data/        content and app list
  layouts/     Desktop.astro: page shell, appearance bootstrap
  scripts/     shell.ts (window server), preferences, notifications, liquid glass
  styles/      tokens and the controls shared by the apps
```
