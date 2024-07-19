"use client";

import Image from "next/image";
import clsx from "clsx";
import React from "react";

import Link from "@/components/ui/link";
import { Sheet, SheetContent } from "@/components/ui/sheet/sheet";
import { WEB_TITLE } from "@/constant/env";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 lef-0 z-10 bg-white shadow-sm">
      <nav className="bg-white border-gray-200 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto container">
          <a href="/" className="flex items-center">
            <Image
              src="/images/washing-machine.png"
              width={36}
              height={36}
              className="mr-3 h-9"
              alt={WEB_TITLE}
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap">Laundry G99</span>
          </a>
          <div className="flex items-center md:order-2 md:hidden">
            {/* <a href="#" className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">Log in</a> */}
            {/* <a href="#" className="text-white bg-primary hover:bg-primary/90 focus:ring-4 focus:ring-primary/70 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">Get started</a> */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
            <Sheet open={isMenuOpen}>
              <SheetContent>
                {/* <SheetHeader>
                  <SheetTitle>Edit profile</SheetTitle>
                  <SheetDescription>
                    Make changes to your profile here. Click save when.
                  </SheetDescription>
                </SheetHeader> */}
                <div className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
                  <MenuList onLinkSelect={() => { setIsMenuOpen(false); }} />
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
            <MenuList onLinkSelect={() => { setIsMenuOpen(false); }} />
          </div>
        </div>
      </nav>
    </header>
  );
};


const MenuList: React.FC<{
  onLinkSelect: () => void
}> = ({ onLinkSelect }) => (
  <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
    <li>
      <MenuItem onClick={onLinkSelect} href="/">Beranda</MenuItem>
    </li>
    <li>
      <MenuItem onClick={onLinkSelect} href="/laundry-karpet-marelan">Laundry Karpet Marelan</MenuItem>
    </li>
  </ul>
);

const MenuItem: React.FC<{
  href: string
  children: React.ReactNode
  onClick: () => void
}> = ({ href, children, onClick }) => {
  let isActive = false;
  if (typeof window !== "undefined") {
    isActive = href === window.location.pathname;
  }

  return (
    <Link
      href={href}
      onClick={() => { onClick(); }}
      className={clsx(
        "block py-2 pr-4 pl-3",
        isActive
          ? "text-white rounded bg-primary md:bg-transparent md:text-primary md:p-0 dark:text-white"
          : "text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0"
      )}
    >
      {children}
    </Link>
  );
};