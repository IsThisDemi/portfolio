/** macOS-style notification banners that slide in at the top right. */

const ICONS: Record<string, string> = {
  download:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 19h14"/></svg>',
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="12" height="12" rx="2.5"/><path d="M16 8V6.5A2.5 2.5 0 0 0 13.5 4h-7A2.5 2.5 0 0 0 4 6.5v7A2.5 2.5 0 0 0 6.5 16H8"/></svg>',
  windows:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 9h18"/></svg>',
};

let stack: HTMLElement | null = null;

export const notify = ({ title, body, icon = 'windows' }: { title: string; body?: string; icon?: string }) => {
  if (!stack) {
    stack = document.createElement('div');
    stack.className = 'notifications';
    stack.setAttribute('role', 'status');
    stack.setAttribute('aria-live', 'polite');
    document.body.append(stack);
  }

  const banner = document.createElement('div');
  banner.className = 'notification glass glass-strong';
  banner.innerHTML = `<span class="notification-icon">${ICONS[icon] ?? ICONS.windows}</span>
    <span class="notification-text"><strong></strong><span></span></span>
    <time class="notification-time">now</time>`;
  banner.querySelector('strong')!.textContent = title;
  banner.querySelector('.notification-text span')!.textContent = body ?? '';
  stack.prepend(banner);

  const dismiss = () => {
    banner.classList.add('is-leaving');
    banner.addEventListener('animationend', () => banner.remove(), { once: true });
  };
  banner.addEventListener('click', dismiss);
  setTimeout(dismiss, 3600);
};
