import type { ReactElement } from "react";
import Link from "next/link";

import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { getWebAppSignInUrl } from "@/lib/marketing/constants";

export function MarketingLanding(): ReactElement {
  const signInHref: string = getWebAppSignInUrl();

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col px-5 pb-16 pt-6 sm:px-6">
      <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
        Agree on a Time
      </h1>
      <p className="mt-3 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
        Propose a few times, let the group vote yes or no, and pick the winner — without the endless
        thread.
      </p>

      <Link
        className="mt-8 inline-flex w-fit items-center justify-center rounded-xl bg-[#FF6B5C] px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6B5C] active:opacity-90"
        href={signInHref}
        rel="noopener noreferrer"
      >
        Open web app
      </Link>
      <p className="mt-3 max-w-xl text-sm text-neutral-500 dark:text-neutral-400">
        Opens the scheduling app in your browser. Native apps use the same account when you sign in
        there.
      </p>

      <h2 className="mb-3 mt-12 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
        How it works
      </h2>
      <ol className="list-none space-y-6 p-0">
        <li>
          <p className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
            <span className="mr-2 text-[#FF6B5C]">1.</span>Create a poll
          </p>
          <p className="mt-1 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
            Add two or more proposed times and a voting deadline.
          </p>
        </li>
        <li>
          <p className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
            <span className="mr-2 text-[#FF6B5C]">2.</span>Share the link
          </p>
          <p className="mt-1 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
            Invitees vote from their phone or the web — no account required to respond.
          </p>
        </li>
        <li>
          <p className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
            <span className="mr-2 text-[#FF6B5C]">3.</span>Lock the time
          </p>
          <p className="mt-1 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
            See which slot won, confirm, and let everyone know it is decided.
          </p>
        </li>
      </ol>

      <section
        aria-labelledby="app-store-heading"
        className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-700 dark:bg-neutral-900"
      >
        <h2
          className="text-center text-base font-medium text-neutral-700 dark:text-neutral-300"
          id="app-store-heading"
        >
          Get it on the App Store
        </h2>
        <p className="mt-2 text-center text-sm text-neutral-500 dark:text-neutral-400">
          Public TestFlight and App Store links ship with the release; check back soon.
        </p>
      </section>

      <MarketingFooter />
    </div>
  );
}
