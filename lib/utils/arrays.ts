export function chunkAlternating<T>(items: T[], sizes: number[]): T[][] {
  const chunks: T[][] = [];
  let i = 0;
  let sizeIndex = 0;

  while (i < items.length) {
    const size = sizes[sizeIndex % sizes.length];
    chunks.push(items.slice(i, i + size));
    i += size;
    sizeIndex++;
  }

  return chunks;
}
