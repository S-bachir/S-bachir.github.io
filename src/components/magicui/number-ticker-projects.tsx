import React from "react";
import { NumberTicker } from "@/components/magicui/number-ticker";

export function NumberTickerProjects() {
  return (
    <h2 className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white">
      <NumberTicker value={15} />
    </h2>
  );
}