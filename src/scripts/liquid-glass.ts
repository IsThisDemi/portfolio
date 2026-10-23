/**
 * Refraction for Liquid Glass surfaces (elements with `data-liquid`).
 *
 * Each element gets an SVG filter whose displacement map bends the backdrop near its rounded
 * edges, like light through the rim of a glass lens. Only Chromium can use an SVG filter in
 * `backdrop-filter`, so elsewhere the CSS blur/rim from `.glass` stays on its own.
 */

const SVG_NS = 'http://www.w3.org/2000/svg';

const supported = () => {
  const brands = (navigator as Navigator & { userAgentData?: { brands: { brand: string }[] } }).userAgentData?.brands;
  return (
    !!brands?.some((b) => b.brand === 'Chromium') &&
    !window.matchMedia('(prefers-reduced-transparency: reduce)').matches
  );
};

/** Displacement map for a rounded rectangle: neutral gray inside, pulling inward along a bezel. */
const buildMap = (width: number, height: number, radius: number, bezel: number) => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;
  const image = ctx.createImageData(width, height);
  const { data } = image;
  const hx = width / 2;
  const hy = height / 2;
  const r = Math.min(radius, hx, hy);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const px = x + 0.5 - hx;
      const py = y + 0.5 - hy;
      const qx = Math.abs(px) - (hx - r);
      const qy = Math.abs(py) - (hy - r);
      // Signed distance to the rounded rect (negative inside) and the outward normal.
      let nx: number;
      let ny: number;
      let dist: number;
      if (qx > 0 && qy > 0) {
        const len = Math.hypot(qx, qy);
        dist = len - r;
        nx = (qx / len) * Math.sign(px);
        ny = (qy / len) * Math.sign(py);
      } else if (qx > qy) {
        dist = qx - r;
        nx = Math.sign(px);
        ny = 0;
      } else {
        dist = qy - r;
        nx = 0;
        ny = Math.sign(py);
      }
      const inside = -dist;
      const t = inside < bezel ? 1 - Math.max(0, inside) / bezel : 0;
      // Circular lens profile: steep at the very edge, flat toward the middle.
      const strength = t > 0 ? 1 - Math.sqrt(1 - t * t) : 0;
      const i = (y * width + x) * 4;
      data[i] = 128 - nx * strength * 127;
      data[i + 1] = 128 - ny * strength * 127;
      data[i + 2] = 128;
      data[i + 3] = 255;
    }
  }
  ctx.putImageData(image, 0, 0);
  return canvas.toDataURL();
};

let defs: SVGSVGElement | null = null;
let counter = 0;

const createFilter = () => {
  if (!defs) {
    defs = document.createElementNS(SVG_NS, 'svg');
    defs.setAttribute('aria-hidden', 'true');
    defs.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
    document.body.append(defs);
  }
  const id = `liquid-${++counter}`;
  const filter = document.createElementNS(SVG_NS, 'filter');
  filter.id = id;
  filter.setAttribute('color-interpolation-filters', 'sRGB');
  filter.innerHTML = `
    <feFlood flood-color="rgb(128,128,128)" result="neutral"/>
    <feImage x="0" y="0" preserveAspectRatio="none" result="map"/>
    <feComposite in="map" in2="neutral" operator="over" result="displacement"/>
    <feDisplacementMap in="SourceGraphic" in2="displacement" xChannelSelector="R" yChannelSelector="G"/>`;
  defs.append(filter);
  return filter;
};

const enhance = (el: HTMLElement) => {
  const filter = createFilter();
  const image = filter.querySelector('feImage')!;
  const displacement = filter.querySelector('feDisplacementMap')!;
  let pending = 0;
  let lastKey = '';

  const update = () => {
    const width = Math.round(el.offsetWidth);
    const height = Math.round(el.offsetHeight);
    if (!width || !height) return;
    const radius = parseFloat(getComputedStyle(el).borderTopLeftRadius) || 0;
    const key = `${width}x${height}x${radius}`;
    if (key === lastKey) return;
    lastKey = key;
    const bezel = Math.min(22, height * 0.42);
    image.setAttribute('width', String(width));
    image.setAttribute('height', String(height));
    image.setAttribute('href', buildMap(width, height, radius, bezel));
    displacement.setAttribute('scale', String(Math.min(70, height * 0.9)));
    const blur = getComputedStyle(el).getPropertyValue('--glass-blur').trim() || '10px';
    el.style.setProperty('backdrop-filter', `url(#${filter.id}) blur(${blur}) saturate(190%) brightness(1.04)`);
    el.classList.add('is-refracting');
  };

  // Size changes (Dock magnification, rotation) settle before the map is rebuilt.
  new ResizeObserver(() => {
    clearTimeout(pending);
    pending = window.setTimeout(update, 120);
  }).observe(el);
  update();
};

export const initLiquidGlass = () => {
  if (!supported()) return;
  document.querySelectorAll<HTMLElement>('[data-liquid]').forEach(enhance);
};
