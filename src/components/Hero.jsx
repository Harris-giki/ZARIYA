import React, { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Users, Mail, Handshake, BicepsFlexed } from "lucide-react";
import { StickyBanner } from "../../ui/sticky-banner";

const Hero = () => {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.8,
      },
    },
  };

  const badgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.4,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 1.2,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <StickyBanner />

      {/* Main Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.header
          className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-6 gap-4 sm:gap-0 text-center sm:text-left"
          variants={itemVariants}
        >
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <div className="w-15 h-15 flex items-center justify-center">
                <span className="text-white text-xs font-bold">
                  <img src="/Zariya.png" alt="site-logo" />
                </span>
              </div>
            </div>
            <span className="text-gray-600 text-sm">ZARIYA</span>
          </motion.div>

          <motion.div
            className="flex items-center space-x-4"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin
                className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/107045450",
                    "_blank"
                  )
                }
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail
                className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors"
                onClick={() =>
                  window.open("mailto:harris.giki@gmail.com", "_self")
                }
              />
            </motion.div>
          </motion.div>
        </motion.header>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Main content */}
            <motion.div className="space-y-8" variants={containerVariants}>
              <motion.div
                className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                variants={badgeVariants}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
                <span>51 Monthly Contributors!</span>
              </motion.div>

              <motion.div className="space-y-4" variants={itemVariants}>
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900"
                  variants={titleVariants}
                >
                  Nourishing Dreams,
                </motion.h1>
                <motion.h2
                  className="text-3xl sm:text-4xl md:text-6xl font-light text-gray-400"
                  variants={titleVariants}
                  transition={{ delay: 0.2 }}
                >
                  One Meal at a Time.
                </motion.h2>
              </motion.div>

              <motion.p
                className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg"
                variants={itemVariants}
              >
                Join hands to pay meals of a deserving student with a monthly
                donation of as low as Rs.200/-
              </motion.p>

              <motion.p
                className="text-gray-500 text-xs sm:text-sm"
                variants={itemVariants}
              >
                A Non-Profit Initiative by BSCS Batch 33 @ GIKI
              </motion.p>
            </motion.div>

            {/* Right side - What we do section */}
            <motion.div
              className="space-y-8 pt-15 sm:pt-0 lg:pt-0 md:pt-0"
              variants={containerVariants}
            >
              <motion.h3
                className="text-2xl sm:text-3xl font-light text-gray-900 text-center sm:text-start lg:text-start"
                variants={itemVariants}
              >
                What we do
              </motion.h3>

              <motion.div className="space-y-6" variants={containerVariants}>
                {/* Compassion */}
                <motion.div
                  className="flex flex-col sm:flex-row items-start sm:space-x-4 space-y-2 sm:space-y-0"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="relative inline-flex h-10 w-10 rounded-full p-[1px] overflow-hidden flex-shrink-0"
                    variants={iconVariants}
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <div className="relative flex items-center justify-center h-full w-full rounded-full bg-black z-10">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-900 mb-2">
                      Compassion
                    </h4>
                    <p className="text-gray-600">
                      Supporting financially struggling students with mess meals
                      through student-led initiative.
                    </p>
                  </div>
                </motion.div>

                {/* Empowerment */}
                <motion.div
                  className="flex flex-col sm:flex-row items-start sm:space-x-4 space-y-2 sm:space-y-0"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="relative inline-flex h-10 w-10 rounded-full p-[1px] overflow-hidden flex-shrink-0"
                    variants={iconVariants}
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <div className="relative flex items-center justify-center h-full w-full rounded-full bg-black z-10">
                      <BicepsFlexed className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-900 mb-2">
                      Empowerment
                    </h4>
                    <p className="text-gray-600">
                      Enabling financially struggling students to continue their
                      education without having to worry about paying for daily
                      meals.
                    </p>
                  </div>
                </motion.div>

                {/* Unity */}
                <motion.div
                  className="flex flex-col sm:flex-row items-start sm:space-x-4 space-y-2 sm:space-y-0"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="relative inline-flex h-10 w-10 rounded-full p-[1px] overflow-hidden focus:outline-none"
                    variants={iconVariants}
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <div className="relative flex items-center justify-center h-full w-full rounded-full bg-black z-10">
                      <Handshake className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-900 mb-2">
                      Unity
                    </h4>
                    <p className="text-gray-600">
                      Bringing students and donors together creating a
                      meaningful impact.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* CTA Button – Hidden on mobile */}
        <div className="hidden sm:flex justify-center items-center mt-7 px-4 sm:px-0">
          <motion.button
            onClick={() => {
              document
                .getElementById("JoinUs")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white backdrop-blur-3xl">
              JOIN OUR MISSION
            </span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
