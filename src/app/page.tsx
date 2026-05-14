import type { ReactElement } from "react";

import { MarketingLanding } from "@/components/marketing/marketing-landing";

export default function Home(): ReactElement {
  return (
    <main className="min-h-0 flex-1 bg-white dark:bg-black" id="main-content">
      <MarketingLanding />
    </main>
  );
}
