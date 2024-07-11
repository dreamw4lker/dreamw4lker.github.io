/**
 * Получение ресурса из папки /assets
 * @param path имя ресурса
 */
export function getAssetUrl(path) {
  return new URL(`/assets/${path}`, import.meta.url).href
}
