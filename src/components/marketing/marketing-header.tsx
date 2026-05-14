import type { ReactElement } from "react";
import Link from "next/link";

export function MarketingHeader(): ReactElement {
  return (
    <header className="border-b border-neutral-200 bg-white/90 backdrop-blur dark:border-neutral-800 dark:bg-black/90">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-5 py-4 sm:px-6">
        <Link
          className="text-lg font-semibold tracking-tight text-neutral-900 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6B5C] dark:text-neutral-50"
          href="/"
        >
          Agree on a Time
        </Link>
        <nav aria-label="Site" className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium">
          <Link
            className="text-neutral-700 underline-offset-4 hover:text-[#FF6B5C] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6B5C] dark:text-neutral-300"
            href="/privacy"
          >
            Privacy
          </Link>
          <Link
            className="text-neutral-700 underline-offset-4 hover:text-[#FF6B5C] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6B5C] dark:text-neutral-300"
            href="/terms"
          >
            Terms
          </Link>
          <Link
            className="text-neutral-700 underline-offset-4 hover:text-[#FF6B5C] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6B5C] dark:text-neutral-300"
            href="/support"
          >
            Support
          </Link>
        </nav>
      </div>
    </header>
  );
}
