/** Bump when team photos in /public are replaced to bust browser and Next.js image cache. */
export const TEAM_PHOTO_VERSION = "20260616";

export function teamPhoto(path: string): string {
  return `${path}?v=${TEAM_PHOTO_VERSION}`;
}
