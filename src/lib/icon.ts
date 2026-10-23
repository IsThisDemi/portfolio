import { getIconData, iconToHTML, iconToSVG, replaceIDs } from '@iconify/utils';
import circleFlags from '@iconify-json/circle-flags/icons.json';
import fa6Brands from '@iconify-json/fa6-brands/icons.json';
import fa6Solid from '@iconify-json/fa6-solid/icons.json';
import logos from '@iconify-json/logos/icons.json';
import mdi from '@iconify-json/mdi/icons.json';
import simpleIcons from '@iconify-json/simple-icons/icons.json';
import type { IconifyJSON } from '@iconify/types';

const sets: Record<string, IconifyJSON> = {
  'circle-flags': circleFlags as IconifyJSON,
  'fa6-brands': fa6Brands as IconifyJSON,
  'fa6-solid': fa6Solid as IconifyJSON,
  logos: logos as IconifyJSON,
  mdi: mdi as IconifyJSON,
  'simple-icons': simpleIcons as IconifyJSON,
};

const render = (name: string) => {
  const [prefix, icon] = name.split(':');
  const set = prefix ? sets[prefix] : undefined;
  const data = set && icon ? getIconData(set, icon) : null;
  if (!data) throw new Error(`Unknown icon "${name}"`);
  return iconToSVG(data, { height: '1em' });
};

/**
 * Icons repeated across the page (technology logos) are emitted once in a sprite (IconSprite.astro)
 * and referenced with <use>; everything else is inlined where it is used.
 */
const sprite = new Set<string>();

export const registerSpriteIcons = (names: Iterable<string>) => {
  for (const name of names) sprite.add(name);
};

const symbolId = (name: string) => `i-${name.replace(':', '--')}`;

export const spriteSymbols = () =>
  [...sprite].map((name) => {
    const { attributes, body } = render(name);
    return `<symbol id="${symbolId(name)}" viewBox="${attributes.viewBox}">${replaceIDs(body, symbolId(name))}</symbol>`;
  });

/** Renders an Iconify icon ("set:name") to an SVG string at build time. */
export function iconSvg(name: string, attrs: Record<string, string> = {}): string {
  const { attributes, body } = render(name);
  const content = sprite.has(name) ? `<use href="#${symbolId(name)}"></use>` : replaceIDs(body);
  return iconToHTML(content, { ...attributes, 'aria-hidden': 'true', ...attrs });
}
