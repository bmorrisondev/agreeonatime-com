import type { Metadata } from "next";
import type { ReactElement } from "react";

import { LegalH2, LegalP } from "@/components/marketing/legal-markup";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { marketingSupportEmail } from "@/lib/marketing/constants";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Agree on a Time collects, uses, and shares personal information.",
};

export default function PrivacyPage(): ReactElement {
  return (
    <main
      className="mx-auto min-h-0 w-full max-w-3xl flex-1 px-5 py-8 sm:px-6"
      id="main-content"
    >
      <article>
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">
          Privacy policy
        </h1>
        <p className="mb-6 mt-2 text-sm text-neutral-500 dark:text-neutral-400">
          Last updated: May 11, 2026 · Contact: {marketingSupportEmail}
        </p>

        <LegalP>
          Agree on a Time (&quot;we&quot;, &quot;us&quot;) helps groups pick a shared time. This policy explains what we
          collect, why we collect it, how long we keep it, and the services that help us run the product.
        </LegalP>

        <LegalH2>What we collect</LegalH2>
        <LegalP>
          Account data: name and email when you create an owner account. Event content: titles, descriptions, proposed
          times, deadlines, voting choices, and invitee display names entered on polls. Technical data: device identifiers
          needed for push notifications if you opt in, basic diagnostics, and product analytics events (for example app
          opened and scheduling actions) when enabled in your build.
        </LegalP>

        <LegalH2>How we use data</LegalH2>
        <LegalP>
          We use this information to provide scheduling features, sync votes in real time, send transactional email (such
          as magic links or time confirmations), improve reliability, and understand where the experience breaks down.
          We do not sell your personal information.
        </LegalP>

        <LegalH2>Third-party processors</LegalH2>
        <LegalP>
          Depending on how the app is configured, data may be processed by: Convex (database and backend), Better Auth
          (authentication), Resend (email delivery), Expo / EAS (builds and optional push delivery), Apple (Sign in with
          Apple and App Store distribution), RevenueCat (in-app subscriptions when enabled), and PostHog (product
          analytics when a PostHog client key is configured). Each vendor processes data under their own terms and
          security practices.
        </LegalP>

        <LegalH2>Retention</LegalH2>
        <LegalP>
          We keep event and voting data while an event is active and for a reasonable period afterward so owners can
          reference outcomes. Server logs may be retained for security and abuse prevention. Exact retention windows evolve
          with the product and will be tightened as we approach general availability.
        </LegalP>

        <LegalH2>Deletion</LegalH2>
        <LegalP>
          Owners can delete their accounts from in-app settings when that flow ships; deletion removes owned events and
          related votes as described in the product. Invitees who only vote on the web can clear browser cookies or
          request deletion by emailing {marketingSupportEmail} with the event link they used.
        </LegalP>

        <LegalH2>International users</LegalH2>
        <LegalP>
          We may process data in the United States or other regions where our subprocessors operate. If you reside in the
          EEA, UK, or Switzerland, you may have additional rights under local law; contact us at the address above and we
          will respond within the timelines required by applicable regulations.
        </LegalP>

        <LegalH2>Children</LegalH2>
        <LegalP>
          Agree on a Time is not directed at children under 13, and we do not knowingly collect their personal information.
        </LegalP>

        <LegalH2>Changes</LegalH2>
        <LegalP>
          We will update this page when practices change. Continued use after updates means you accept the revised policy.
        </LegalP>

        <div className="pb-8">
          <MarketingFooter />
        </div>
      </article>
    </main>
  );
}
