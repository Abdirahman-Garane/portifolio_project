"use client";

import { AnimatePresence, m } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingOverlay() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <m.div
          key="boot"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0b0e11]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
        >
          <m.div
            className="flex h-12 w-12 items-center justify-center rounded-md bg-[#fcd535]"
            initial={{ scale: 0.7, y: 12 }}
            animate={{ scale: [0.7, 1.06, 1], y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-lg font-bold text-[#181a20]">A</span>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
