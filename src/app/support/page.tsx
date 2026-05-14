import type { Metadata } from "next";
import type { ReactElement } from "react";

import { LegalH2, LegalP } from "@/components/marketing/legal-markup";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { marketingSupportEmail } from "@/lib/marketing/constants";

export const metadata: Metadata = {
  title: "Support",
  description: "Contact Agree on a Time support and read frequently asked questions.",
};

export default function SupportPage(): ReactElement {
  const mailto: string = `mailto:${marketingSupportEmail}?subject=${encodeURIComponent("Agree on a Time support")}`;

  return (
    <main
      className="mx-auto min-h-0 w-full max-w-3xl flex-1 px-5 py-8 sm:px-6"
      id="main-content"
    >
      <article>
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">Support</h1>
        <p className="mb-6 mt-2 text-sm text-neutral-500 dark:text-neutral-400">
          We read every message — typical reply within two business days.
        </p>

        <a
          className="mb-8 inline-flex w-fit rounded-xl border border-[#FF6B5C] px-5 py-3 text-base font-semibold text-[#FF6B5C] transition hover:bg-[#FF6B5C]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6B5C] active:opacity-80"
          href={mailto}
        >
          {marketingSupportEmail}
        </a>

        <LegalH2>Frequently asked questions</LegalH2>

        <h3 className="mb-1 text-base font-semibold text-neutral-900 dark:text-neutral-100">
          Do invitees need an account?
        </h3>
        <LegalP>No. Invitees can vote from a shared link; owners sign in to create and manage events.</LegalP>

        <h3 className="mb-1 text-base font-semibold text-neutral-900 dark:text-neutral-100">
          Where is my data stored?
        </h3>
        <LegalP>
          Application data lives in Convex-backed infrastructure. See the Privacy policy for processors like email and
          analytics.
        </LegalP>

        <h3 className="mb-1 text-base font-semibold text-neutral-900 dark:text-neutral-100">
          How do I delete my account?
        </h3>
        <LegalP>
          In-app account deletion is shipping with the settings screen. Until then, email {marketingSupportEmail} from the
          address on your account and we will process the request manually.
        </LegalP>

        <h3 className="mb-1 text-base font-semibold text-neutral-900 dark:text-neutral-100">
          Is there a phone number?
        </h3>
        <LegalP>Not yet — email is the fastest way to reach the team during the beta.</LegalP>

        <div className="pb-8">
          <MarketingFooter />
        </div>
      </article>
    </main>
  );
}
