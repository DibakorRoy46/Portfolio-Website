/**
 * Length of a period in years and months, counting both the first and the last
 * month. `start` and `end` are YYYY-MM; without an end the period runs to `today`.
 */
export function duration(start: string, end?: string, today = new Date()): string {
  const [startYear, startMonth] = start.split('-').map(Number);
  const [endYear, endMonth] = end
    ? end.split('-').map(Number)
    : [today.getFullYear(), today.getMonth() + 1];

  const months = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  return [years ? `${years} yr${years > 1 ? 's' : ''}` : '', rest ? `${rest} mo` : '']
    .filter(Boolean)
    .join(' ');
}
