import { duration } from './duration';

describe('duration', () => {
  it('counts both the first and the last month', () => {
    expect(duration('2021-07', '2023-08')).toBe('2 yrs 2 mo');
  });

  it('uses the singular for one year', () => {
    expect(duration('2022-01', '2022-12')).toBe('1 yr');
  });

  it('shows only months for less than a year', () => {
    expect(duration('2024-03', '2024-05')).toBe('3 mo');
  });

  it('runs to today when there is no end', () => {
    expect(duration('2023-09', undefined, new Date(2026, 9, 12))).toBe('3 yrs 2 mo');
  });
});
