/**
 * Auto-generated — do not edit manually.
 * Source: scripts/upload-images-to-blob.mjs
 *
 * Maps every local /public image path to its Vercel Blob CDN URL.
 * Import and use instead of bare "/filename.jpg" strings so images
 * are served from Vercel's edge CDN for faster global load times.
 */

export const imageUrls: Record<string, string> = {
  "/hero.jpg": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/hero.jpg",
  "/mission.jpg": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/mission.jpg",
  "/community.jpg": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/community.jpg",
  "/impact.jpg": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/impact.jpg",
  "/impact2.jpg": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/impact2.jpg",
  "/team.jpg": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/team.jpg",
  "/support.jpg": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/support.jpg",
  "/involved.jpg": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/involved.jpg",
  "/story.jpg": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/story.jpg",
  "/hope.jpg": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/hope.jpg",
  "/002.jpg": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/002.jpg",
  "/003.jpg": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/003.jpg",
  "/004.jpg": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/004.jpg",
  "/005.jpg": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/005.jpg",
  "/006.jpg": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/006.jpg",
  "/007.jpg": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/007.jpg",
  "/soccer01.jpg": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/soccer01.jpg",
  "/soccer02.jpg": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/soccer02.jpg",
  "/001.jpg": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/001.jpg",
  "/008.jpg": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/008.jpg",
  "/01.jpg": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/01.jpg",
  "/02.jpg": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/02.jpg",
  "/03.jpeg": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/03.jpeg",
  "/04.jpg": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/04.jpg",
  "/05.jpg": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/05.jpg",
  "/1.jpg": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/1.jpg",
  "/2.jpg": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/2.jpg",
  "/3.jpg": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/3.jpg",
  "/Aline.png": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/Aline.png",
  "/Aristote.jpeg": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/Aristote.jpeg",
  "/Bienvenue.jpeg": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/Bienvenue.jpeg",
  "/Christophe.jpeg": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/Christophe.jpeg",
  "/Esther.jpeg": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/Esther.jpeg",
  "/Patrone.jpeg": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/Patrone.jpeg",
  "/bridgefest2026.png": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/bridgefest2026.png",
  "/newroots-summit.png": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/newroots-summit.png",
  "/youth-unlocking-potential.png": "https://58qjghd7zgq9l2mb.public.blob.vercel-storage.com/site/youth-unlocking-potential.png",
};

/** Returns the Blob CDN URL for a public path, or the original path as fallback. */
export function img(publicPath: string): string {
  return imageUrls[publicPath] ?? publicPath;
}
