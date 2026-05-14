import type { ReactElement } from "react";
import Link from "next/link";

import { marketingSupportEmail } from "@/lib/marketing/constants";

export function MarketingFooter(): ReactElement {
  return (
    <footer className="mt-10 border-t border-neutral-200 pt-8 dark:border-neutral-800">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
        Legal & help
      </p>
      <nav aria-label="Legal and support" className="flex flex-wrap gap-x-4 gap-y-2">
        <Link
          className="text-base font-medium text-[#FF6B5C] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6B5C]"
          href="/privacy"
        >
          Privacy
        </Link>
        <Link
          className="text-base font-medium text-[#FF6B5C] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6B5C]"
          href="/terms"
        >
          Terms
        </Link>
        <Link
          className="text-base font-medium text-[#FF6B5C] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6B5C]"
          href="/support"
        >
          Support
        </Link>
      </nav>
      <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
        Questions?{" "}
        <a
          className="font-medium text-[#FF6B5C] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6B5C]"
          href={`mailto:${marketingSupportEmail}`}
        >
          {marketingSupportEmail}
        </a>
      </p>
    </footer>
  );
}
