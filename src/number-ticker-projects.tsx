import React from "react";
import { NumberTicker } from "@/components/number-ticker";

export function NumberTickerProjects() {
  return (
    <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white">
      <NumberTicker value={15} />
    </p>
  );
}