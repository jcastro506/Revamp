"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BeforeAfterSlider } from "./before-after-slider";

const EXAMPLES = [
  {
    id: "plumbing",
    tab: "Home Services",
    name: "Reliable Plumbing & Heating",
    result: "3.2× more booking calls in the first 60 days",
    before: "/before-plumbing.png",
    after: "/after-plumbing.png",
  },
  {
    id: "restaurant",
    tab: "Restaurant",
    name: "Mama Rosa's Trattoria",
    result: "Online reservations up 140% after launch",
    before: "/before-restaurant.png",
    after: "/after-restaurant.png",
  },
  {
    id: "dental",
    tab: "Dental",
    name: "Bright Smile Family Dentistry",
    result: "New-patient form submissions doubled",
    before: "/before-dental.png",
    after: "/after-dental.png",
  },
];

export function RedesignShowcase() {
  const [active, setActive] = useState(0);
  const current = EXAMPLES[active];

  return (
    <div className="mx-auto w-full max-w-4xl">
      {/* Tabs */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {EXAMPLES.map((ex, i) => (
          <button
            key={ex.id}
            onClick={() => setActive(i)}
            className={`rounded-full px-5 py-2 text-sm font-bold transition-colors ${
              i === active
                ? "bg-white text-black"
                : "bg-white/5 text-gray-300 ring-1 ring-white/10 hover:bg-white/10"
            }`}
          >
            {ex.tab}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <BeforeAfterSlider
            beforeSrc={current.before}
            afterSrc={current.after}
            beforeAlt={`${current.name} website before the redesign`}
            afterAlt={`${current.name} website after the redesign`}
          />

          <div className="mt-6 flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <div>
              <div className="text-lg font-bold">{current.name}</div>
              <div className="text-sm text-gray-400">
                Drag the handle to reveal the transformation
              </div>
            </div>
            <div className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400 ring-1 ring-green-500/20">
              {current.result}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
