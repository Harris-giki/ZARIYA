"use client";
import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "../lib/utils";

export const StickyBanner = ({ className, children, hideOnScroll = false }) => {
  const [open, setOpen] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (hideOnScroll && latest > 40) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  });

  return (
    <motion.div
      className={cn(
        "sticky inset-x-0 top-0 z-40 flex min-h-14 w-full items-center justify-center px-4 py-3 backdrop-blur-md border-b border-gray-700/60 shadow-sm bg-gray-950 text-gray-100",
        className
      )}
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: open ? 0 : -100,
        opacity: open ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      {children || (
        <div className="flex items-center gap-3">
          <div className="hidden sm:block w-px h-4 bg-gray-600"></div>
          <p className="text-sm hidden sm:block">
            ZARIYA currently raises 12,000 PKR monthly, which is half the amount
            needed to support one student's mess fee. Help us fully sponsor at
            least one deserving student.
          </p>
        </div>
      )}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer hover:bg-gray-800 rounded-full p-1.5 transition-colors duration-200"
        onClick={() => setOpen(!open)}
        aria-label="Close banner"
      >
        <CloseIcon className="h-4 w-4 text-gray-300 hover:text-white" />
      </motion.button>
    </motion.div>
  );
};

const CloseIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};
