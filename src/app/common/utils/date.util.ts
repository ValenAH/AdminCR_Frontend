export function normalizeToUtcIsoDate(dateValue: string | Date | null | undefined): string {
  if (!dateValue) {
    return '';
  }

  if (dateValue instanceof Date) {
    return Number.isNaN(dateValue.getTime()) ? '' : dateValue.toISOString();
  }

  const value = dateValue.trim();
  if (!value) {
    return '';
  }

  const parsedDate = new Date(value.includes('T') ? value : `${value}T00:00:00Z`);
  return Number.isNaN(parsedDate.getTime()) ? '' : parsedDate.toISOString();
}

export function getCurrentUtcIsoDateTime(): string {
  return new Date().toISOString();
}
