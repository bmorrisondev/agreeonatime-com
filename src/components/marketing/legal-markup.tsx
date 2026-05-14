import type { ReactElement, ReactNode } from "react";

interface LegalPProps {
  readonly children: ReactNode;
}

export function LegalP({ children }: LegalPProps): ReactElement {
  return (
    <p className="mb-4 text-base leading-relaxed text-neutral-800 dark:text-neutral-200">
      {children}
    </p>
  );
}

interface LegalH2Props {
  readonly children: string;
}

export function LegalH2({ children }: LegalH2Props): ReactElement {
  return (
    <h2 className="mb-2 mt-6 text-xl font-semibold text-neutral-900 dark:text-neutral-50">
      {children}
    </h2>
  );
}
