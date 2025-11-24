"use client";

import React, { useEffect, useState } from 'react'
import { Icons } from "@/components/icons";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Drawer from './drawer';
import { UserButton } from '@clerk/nextjs';

const menuItems = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
]

function AppHeader() {
  const [addBorder, setAddBorder] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setAddBorder(true);
      } else {
        setAddBorder(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={
        "relative  top-0 z-50 py-2 bg-background/60 backdrop-blur px-2 sm:px-4"
      }
    >
      <div className="flex justify-between items-center container">
        <Link
          href="/"
          title="brand-logo"
          className="relative flex items-center space-x-2 mr-6 px-0 sm:pl-20"
        >
          <Icons.logo className="w-auto h-[40px]" />
          <span className="font-bold text-xl">{siteConfig.name}</span>
        </Link>

        <div className="hidden lg:block">
          <div className="flex items-center">
            <nav>
              {menuItems.map((item) => (
                <Link key={item.id} href={item.href} className="mr-12 font-medium text-gray-500 hover:text-gray-900">
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex justify-center items-center gap-2">
              <UserButton />
            </div>
          </div>
        </div>

        <div className="lg:hidden block mt-2 cursor-pointer">
          <Drawer />
        </div>
      </div>
      <hr
        className={cn(
          "bottom-0 absolute w-full transition-opacity duration-300 ease-in-out",
          addBorder ? "opacity-100" : "opacity-0"
        )}
      />
    </header>
  );

}

export default AppHeader

