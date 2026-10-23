export type YearMonth = `${number}-${number}`;

export interface Period {
  from: YearMonth;
  /** `null` while still ongoing. */
  to: YearMonth | null;
}

const monthYear = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });

const toDate = (value: YearMonth) => new Date(`${value}-01T00:00:00Z`);

export const formatPeriod = ({ from, to }: Period) =>
  `${monthYear.format(toDate(from))} – ${to ? monthYear.format(toDate(to)) : 'Present'}`;

export const periodYears = ({ from, to }: Period) => {
  const start = from.slice(0, 4);
  const end = to ? to.slice(0, 4) : 'now';
  return start === end ? start : `${start}–${end}`;
};

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
