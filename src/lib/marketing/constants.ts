/** Public site origin (this marketing deploy + canonical URLs for metadata / SEO). */
export const marketingSiteOrigin: string = "https://app.agreeonatime.com";

/** Where the product web app (sign-in) lives — same host as marketing for now. */
export const webAppOrigin: string = "https://app.agreeonatime.com";

/** Public marketing / App Store support contact. */
export const marketingSupportEmail: string = "support@aoat.app";

/** Web app entry (sign-in) for CTAs from the marketing site. */
export function getWebAppSignInUrl(): string {
  return `${webAppOrigin}/sign-in`;
}
