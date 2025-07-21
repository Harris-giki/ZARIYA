"use client";
import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
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
        "sticky inset-x-0 top-0 z-40 flex min-h-10 sm:min-h-12 w-full items-center justify-center px-2 sm:px-4 py-1 sm:py-2 backdrop-blur-md border-b border-gray-700/60 shadow-sm bg-gray-950 text-gray-100",
        className
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: open ? 0 : -100, opacity: open ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children || (
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="hidden sm:block w-px h-3 sm:h-4 bg-gray-600"></div>
          <p className="text-xs sm:text-sm justify-center">
            <span className="block sm:hidden text-center">
              ZARIYA raises 12,000 PKR monthly, that is half the amount needed
              to sponsor a student’s mess fee. Help us reach our goal.
            </span>
            <span className="hidden sm:block text-center">
              ZARIYA currently raises 12,000 PKR monthly, which is half the
              amount needed to support one student's mess fee. Help us fully
              sponsor at least one deserving student.
            </span>
          </p>
        </div>
      )}
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
