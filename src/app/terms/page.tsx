import type { Metadata } from "next";
import type { ReactElement } from "react";

import { LegalH2, LegalP } from "@/components/marketing/legal-markup";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { marketingSupportEmail } from "@/lib/marketing/constants";

export const metadata: Metadata = {
  title: "Terms of service",
  description: "Terms governing use of Agree on a Time.",
};

export default function TermsPage(): ReactElement {
  return (
    <main
      className="mx-auto min-h-0 w-full max-w-3xl flex-1 px-5 py-8 sm:px-6"
      id="main-content"
    >
      <article>
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">
          Terms of service
        </h1>
        <p className="mb-6 mt-2 text-sm text-neutral-500 dark:text-neutral-400">
          Last updated: May 11, 2026 · Contact: {marketingSupportEmail}
        </p>

        <LegalP>
          These Terms govern your use of Agree on a Time. By creating an account, submitting events, or voting, you agree
          to them. If you disagree, do not use the service.
        </LegalP>

        <LegalH2>The service</LegalH2>
        <LegalP>
          We provide scheduling polls and related collaboration features on an as-is basis. Availability may change
          during beta or early access periods.
        </LegalP>

        <LegalH2>Acceptable use</LegalH2>
        <LegalP>
          Do not abuse the service: no harassment, spam, illegal content, attempts to disrupt other users, or attempts
          to access data you are not authorized to view. We may suspend accounts that violate these rules.
        </LegalP>

        <LegalH2>Content you submit</LegalH2>
        <LegalP>
          You retain rights to the content you submit, but grant us a license to host, process, and display it solely to
          operate Agree on a Time for you and your invitees.
        </LegalP>

        <LegalH2>Disclaimer</LegalH2>
        <LegalP>
          To the fullest extent permitted by law, we disclaim warranties of merchantability, fitness for a particular
          purpose, and non-infringement. We are not liable for indirect, incidental, special, consequential, or punitive
          damages arising from your use of the service.
        </LegalP>

        <LegalH2>Limitation of liability</LegalH2>
        <LegalP>
          Our aggregate liability for any claim arising out of these Terms is limited to the greater of twenty-five dollars
          (USD $25) or the amounts you paid us in the twelve months before the claim (currently zero for free tiers).
        </LegalP>

        <LegalH2>Governing law</LegalH2>
        <LegalP>
          These Terms are governed by the laws of the United States and the State of Delaware, excluding conflict-of-law
          rules, unless your local consumer protections require otherwise.
        </LegalP>

        <div className="pb-8">
          <MarketingFooter />
        </div>
      </article>
    </main>
  );
}
