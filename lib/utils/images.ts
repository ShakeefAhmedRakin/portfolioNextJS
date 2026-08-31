export function arrayBufferToBase64(buffer: ArrayBuffer): string {
  return `data:image/png;base64,${Buffer.from(buffer).toString("base64")}`;
}

export function extractImagesFromMDX(content: string) {
  const matches = [...content.matchAll(/\{src:"([^"]+)",alt:"([^"]+)"\}/g)];

  const images = matches.map((m) => ({
    src: m[1],
    title: m[2],
  }));

  return images;
}

export function extractFirstImageSrc(html: string): string {
  const match = html.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : "";
}
