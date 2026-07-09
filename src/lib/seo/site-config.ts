export const SEO_SITE_URL = 'https://www.sproutern.com';
export const SEO_SITE_NAME = 'Sproutern';
export const SEO_LOGO_URL = `${SEO_SITE_URL}/logo.jpg`;
export const SEO_DEFAULT_OG_IMAGE = `${SEO_SITE_URL}/opengraph.jpg`;
export const SEO_DEFAULT_TWITTER_IMAGE = `${SEO_SITE_URL}/twitter.jpg`;

export function toAbsoluteUrl(pathOrUrl?: string): string | undefined {
  if (!pathOrUrl) {
    return undefined;
  }

  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  const normalizedPath = pathOrUrl.startsWith('/')
    ? pathOrUrl
    : `/${pathOrUrl}`;

  return `${SEO_SITE_URL}${normalizedPath}`;
}
