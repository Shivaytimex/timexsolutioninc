export function getResponsiveSrcSet(src) {
  if (!src?.endsWith("-1600.webp")) return undefined;

  return `${src.replace("-1600.webp", "-960.webp")} 960w, ${src} 1600w`;
}
