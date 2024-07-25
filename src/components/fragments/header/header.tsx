"use client";

import Image from "next/image";
import clsx from "clsx";
import React from "react";
import { usePathname } from "next/navigation";

import Link from "@/components/ui/link";
import { Sheet, SheetContent } from "@/components/ui/sheet/sheet";
import { GLOBAL_IMG_ALT } from "@/constant/seo/global";
import { ROUTES } from "@/constant/routes";
import { useAnalytic } from "@/libs/analytic/provider";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [shadow, setShadow] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { handleClickNavLogo } = useHeaderTracker();

  return (
    <header className={clsx(
      "sticky top-0 lef-0 z-10 bg-white",
      "transition-shadow duration-300 ease-in-out",
      shadow ? "shadow-md" : ""
    )}>
      <nav className="bg-white border-gray-200 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto container">
          <Link href="/" className="flex items-center" onClick={handleClickNavLogo}>
            <Image
              src="/images/washing-machine.png"
              width={36}
              height={36}
              className="mr-3 h-9"
              alt={GLOBAL_IMG_ALT}
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap">Laundry G99</span>
          </Link>
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
                  <MenuList onLinkClick={() => { setIsMenuOpen(false); }} />
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
            <MenuList onLinkClick={() => { setIsMenuOpen(false); }} />
          </div>
        </div>
      </nav>
    </header>
  );
};


const MenuList: React.FC<{
  onLinkClick: () => void
}> = ({ onLinkClick }) => {
  const { handleClickNavHome, handleClickNavCarpetService } = useHeaderLinkTracker();

  return (
    <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
      <li>
        <MenuItem
          onClick={() => {
            onLinkClick();
            handleClickNavHome();
          }}
          href={ROUTES.HOME}
        >
          Beranda
        </MenuItem>
      </li>
      <li>
        <MenuItem
          onClick={() => {
            onLinkClick();
            handleClickNavCarpetService();
          }}
          href={ROUTES.CARPET_SERVICES}
        >
          Laundry Karpet Marelan
        </MenuItem>
      </li>
    </ul>
  );
};

const MenuItem: React.FC<{
  href: string
  children: React.ReactNode
  onClick: () => void
}> = ({ href, children, onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

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

const useHeaderTracker = () => {
  const analytic = useAnalytic();

  React.useEffect(() => {
    analytic.trackStart("click_nav_logo");
  }, [analytic]);

  const handleClickNavLogo = () => {
    analytic.trackEnd("click_nav_logo");
    analytic.trackEvent("click_nav_logo", "Global", { success: 1, message: "OK" });
  };

  return {
    handleClickNavLogo,
  };
};

const useHeaderLinkTracker = () => {
  const analytic = useAnalytic();

  React.useEffect(() => {
    analytic.trackStart("click_nav_home");
    analytic.trackStart("click_nav_carpet_service");
  }, [analytic]);

  const handleClickNavHome = () => {
    analytic.trackEnd("click_nav_home");
    analytic.trackEvent("click_nav_home", "Global", { success: 1, message: "OK" });
  };

  const handleClickNavCarpetService = () => {
    analytic.trackEnd("click_nav_carpet_service");
    analytic.trackEvent("click_nav_carpet_service", "Global", { success: 1, message: "OK" });
  };

  return {
    handleClickNavHome,
    handleClickNavCarpetService,
  };
};