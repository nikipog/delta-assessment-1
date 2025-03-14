
export function getDiffClass(diff: number) {
    if (diff > 0) return 'stats-table__cell_positive';
    if (diff < 0) return 'stats-table__cell_negative';
    return 'stats-table__cell_zero';
  }
