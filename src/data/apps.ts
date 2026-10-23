import type { ArtName } from './art';
import { profile } from './cv';

export interface AppInfo {
  id: string;
  /** Name in the menu bar and Dock. */
  name: string;
  /** Name on the iPhone home screen, when it differs (Finder is Files there). */
  phoneName?: string;
  art: ArtName;
}

export const apps = [
  { id: 'finder', name: 'Finder', phoneName: 'Files', art: 'finder' },
  { id: 'contacts', name: 'Contacts', art: 'contacts' },
  { id: 'notes', name: 'Notes', art: 'notes' },
  { id: 'mail', name: 'Mail', art: 'mail' },
  { id: 'terminal', name: 'Terminal', art: 'terminal' },
  { id: 'preview', name: 'Preview', art: 'preview' },
] as const satisfies readonly AppInfo[];

export type AppId = (typeof apps)[number]['id'];

/** Web links that sit in the Dock and on the home screen next to the apps. */
export const webLinks = profile.links.map((link) => ({
  label: link.label,
  url: link.url,
  art: (link.label === 'GitHub' ? 'github' : 'linkedin') as ArtName,
}));
