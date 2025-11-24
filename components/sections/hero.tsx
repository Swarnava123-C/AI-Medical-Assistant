"use client";

import { motion } from "framer-motion";

import { Icons } from "@/components/icons";
import HeroVideoDialog from "@/components/magicui/hero-video";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";


function HeroPill() {
  return (
    <motion.div
      className="flex items-center space-x-2 bg-primary/20 px-2 py-1 rounded-full ring-1 ring-accent w-auto whitespace-pre"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="bg-accent px-2 py-0.5 rounded-full w-fit font-medium text-primary text-xs sm:text-sm text-center">
        📣 Now Live
      </div>
      <p className="font-medium text-primary text-xs sm:text-sm">
        Introducing the NeuroMedix AI Medical Assistance System
      </p>
      <svg
        width="12"
        height="12"
        className="ml-1"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.78141 5.33312L5.20541 1.75712L6.14808 0.814453L11.3334 5.99979L6.14808 11.1851L5.20541 10.2425L8.78141 6.66645H0.666748V5.33312H8.78141Z"
          fill="hsl(var(--primary))"
        />
      </svg>
    </motion.div>
  );
}

function HeroTitles() {
  return (
    <div className="flex flex-col space-y-4 pt-8 w-full max-w-2xl overflow-hidden">
      <motion.h1
        className="font-medium text-foreground text-4xl sm:text-5xl md:text-6xl text-center leading-tight"
        initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
          staggerChildren: 0.2,
        }}
      >
        {["Your", "AI", "Driven", "Medical","Voice" , "Companion"].map((text, index) => (
          <motion.span
            key={index}
            className="inline-block px-1 md:px-2 font-semibold text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {text}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p
        className="mx-auto max-w-2xl text-muted-foreground text-lg sm:text-xl text-center text-balance leading-7 sm:leading-9"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        Engage in real-time voice consultations with our AI-powered medical agent.
      </motion.p>
    </div>
  );
}

function HeroCTA() {
  const { user } = useUser();

  return (
    <>
      <motion.div
        className="flex sm:flex-row flex-col justify-center items-center sm:space-x-4 space-y-4 sm:space-y-0 mx-auto mt-6 w-full max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link
          href={user ? "/dashboard" : "/signin"}
          className={cn(
            buttonVariants({ variant: "default" }),
            "w-full sm:w-auto text-background flex gap-2"
          )}
        >
          <Icons.logo className="w-6 h-6" />
          {user ? "Dashboard" : "Start a consultation"}
        </Link>
      </motion.div>
      <motion.p
        className="mt-5 text-muted-foreground text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
      >
        Start with 10 free credits — no credit card necessary.
      </motion.p>
    </>
  );
}

function HeroImage() {
  return (
    <motion.div
      className="relative flex justify-center items-center mx-auto w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <HeroVideoDialog
        animationStyle="from-center"
        videoSrc="https://ik.imagekit.io/pv4mornkt/AI%20medical%20agent%20(1).mov"
        // allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        thumbnailSrc="/dashboard.png"
        thumbnailAlt="Hero Video"
        className="shadow-lg mt-16 border rounded-lg max-w-screen-lg"
      />
    </motion.div>
  );
}

export default function Hero2() {
  return (
    <section id="hero">
      <div className="relative flex flex-col justify-start items-center px-4 sm:px-6 lg:px-8 pt-32 sm:pt-24 md:pt-32 w-full">
        <HeroPill />
        <HeroTitles />
        <HeroCTA />
        <HeroImage />
        <div className="-bottom-12 absolute inset-x-0 bg-gradient-to-t from-background via-background to-transparent h-1/3 lg:h-1/4 pointer-events-none"></div>
      </div>
    </section>
  );
}
