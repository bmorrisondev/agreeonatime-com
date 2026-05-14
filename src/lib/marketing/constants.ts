/** Public marketing / App Store support contact (override at build time). */
export const marketingSupportEmail: string =
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "support@aoat.app";

/** Web app entry (sign-in) for CTAs from the marketing site. */
export function getWebAppSignInUrl(): string {
  const base: string = (
    process.env.NEXT_PUBLIC_WEB_APP_URL ?? "https://aoat.app"
  ).replace(/\/$/, "");
  return `${base}/sign-in`;
}
