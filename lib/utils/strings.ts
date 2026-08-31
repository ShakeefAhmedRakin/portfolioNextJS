export function slugToTitleCase(segment: string): string {
  return segment.replace(/-/g, " ").replace(/\b\w/g, (char) =>
    char.toUpperCase(),
  );
}

export function truncate(str: string, maxLength: number): string {
  return str.length > maxLength ? `${str.substring(0, maxLength)}...` : str;
}
