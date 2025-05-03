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
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { handleClickNavLogo } = useHeaderTracker();

  return (
    <header className={clsx(
      "sticky top-0 lef-0 z-50",
      "transition-colors duration-500 ease-in-out",
      scrolled ? "shadow-2xl border-b-[1px] border-muted-foreground bg-secondary" : "bg-primary"
    )}>
      <nav className="py-2.5 md:py-7">
        <div className="flex flex-wrap justify-between items-center mx-auto container">
          <Link href="/" className="flex items-center" onClick={handleClickNavLogo}>
            <Image
              src="/images/logo.png"
              width={36}
              height={36}
              className={clsx(
                "mr-3 h-9 rounded-md  border-[1px] transition-colors",
                scrolled ? "border-white" : "border-secondary"
              )}
              alt={GLOBAL_IMG_ALT}
            />
            <span className={clsx(
              "self-center text-xl font-bold whitespace-nowrap transition-colors",
              scrolled ? "text-white" : "text-secondary"
            )}>
              Laundry G 99
            </span>
          </Link>

          <div className="flex items-center md:order-2 md:hidden">
            {/* <a href="#" className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">Log in</a> */}
            {/* <a href="#" className="text-white bg-primary hover:bg-primary/90 focus:ring-4 focus:ring-primary/70 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">Get started</a> */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              // className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden hover:text-secondary/80"
              className={
                clsx(
                  "inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden",
                  scrolled ? "text-white" : "text-secondary",
                )
              }
              aria-expanded="false"
              aria-label="menu"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
            <SideBarMenu
              isOpen={isMenuOpen}
              onOpen={() => setIsMenuOpen(true)}
              onClose={() => setIsMenuOpen(false)}
            />
          </div>

          <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
            <MenuNavBar
              onLinkClick={() => { setIsMenuOpen(false); }}
              scrolled={scrolled}
              onMenuOpen={() => setIsMenuOpen(true)}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

const SideBarMenu: React.FC<{
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}> = ({ isOpen, onOpen, onClose }) => {
  const { handleClickNavHome, handleClickNavCarpetService } = useHeaderLinkTracker();
  const pathname = usePathname();

  const handleMenuClick = () => {
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={() => { isOpen ? onClose() : onOpen(); }}>
      <SheetContent>
        <div className="flex justify-center mt-10">
          <Image
            src="/images/logo.png"
            width={150}
            height={150}
            className="rounded-full border-white border-4"
            alt={GLOBAL_IMG_ALT}
          />
        </div>
        <div className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
          <ul className={clsx(
            "flex",
            "mt-10 flex-col items-center space-y-4 w-full",
          )}>
            <li>
              <MenuItem
                onClick={() => {
                  onClose();
                  handleClickNavHome();
                }}
                isActive={pathname === ROUTES.HOME}
                href={ROUTES.HOME}
                scrolled={true}
              >
                BERANDA
              </MenuItem>
            </li>
            <li>
              <MenuItem
                onClick={() => {
                  onClose();
                  handleClickNavCarpetService();
                }}
                isActive={pathname === ROUTES.CARPET_SERVICES}
                href={ROUTES.CARPET_SERVICES}
                scrolled={true}
              >
                LAUNDRY KARPET
              </MenuItem>
            </li>
            <li>
              <MenuItem
                onClick={handleMenuClick}
                isActive={pathname === ROUTES.SPRING_BED_SERVICES}
                href={ROUTES.SPRING_BED_SERVICES}
                scrolled={true}
              >
                LAUNDRY SPRING BED
              </MenuItem>
            </li>
            <li>
              <MenuItem
                onClick={handleMenuClick}
                isActive={pathname === ROUTES.SOFA_SERVICES}
                href={ROUTES.SOFA_SERVICES}
                scrolled={true}
              >
                LAUNDRY SOFA
              </MenuItem>
            </li>
            <li>
              <MenuItem
                onClick={handleMenuClick}
                isActive={pathname === ROUTES.STROLLER_SERVICES}
                href={ROUTES.STROLLER_SERVICES}
                scrolled={true}
              >
                LAUNDRY STROLLER
              </MenuItem>
            </li>
            <li>
              <MenuItem
                onClick={handleMenuClick}
                isActive={pathname === ROUTES.SUITCASE_SERVICES}
                href={ROUTES.SUITCASE_SERVICES}
                scrolled={true}
              >
                LAUNDRY KOPER
              </MenuItem>
            </li>
            <li>
              <MenuItem
                onClick={handleMenuClick}
                isActive={pathname === ROUTES.BAG_SERVICES}
                href={ROUTES.BAG_SERVICES}
                scrolled={true}
              >
                LAUNDRY TAS
              </MenuItem>
            </li>
            <li>
              <MenuItem
                onClick={handleMenuClick}
                isActive={pathname === ROUTES.DOLL_SERVICES}
                href={ROUTES.DOLL_SERVICES}
                scrolled={true}
              >
                LAUNDRY BONEKA
              </MenuItem>
            </li>
            <li>
              <MenuItem
                onClick={handleMenuClick}
                isActive={pathname === ROUTES.HELM_SERVICES}
                href={ROUTES.HELM_SERVICES}
                scrolled={true}
              >
                LAUNDRY HELM
              </MenuItem>
            </li>
            <li>
              <MenuItem
                onClick={handleMenuClick}
                isActive={pathname === ROUTES.PILLOW_SERVICES}
                href={ROUTES.PILLOW_SERVICES}
                scrolled={true}
              >
                LAUNDRY BANTAL & GULING
              </MenuItem>
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const MenuNavBar: React.FC<{
  onLinkClick: () => void
  scrolled: boolean
  onMenuOpen: () => void
}> = ({ onMenuOpen, onLinkClick, scrolled }) => {
  const { handleClickNavHome, handleClickNavCarpetService } = useHeaderLinkTracker();

  const pathname = usePathname();

  return (
    <ul className={clsx(
      "flex",
      "mt-10 flex-col items-center space-y-5",
      "md:mt-0 md:flex-row md:space-x-10 md:space-y-0"
    )}>
      <li>
        <MenuItem
          isActive={pathname === ROUTES.HOME}
          onClick={() => {
            onLinkClick();
            handleClickNavHome();
          }}
          href={ROUTES.HOME}
          scrolled={scrolled}
        >
          BERANDA
        </MenuItem>
      </li>
      <li>
        <MenuItem
          isActive={pathname === ROUTES.CARPET_SERVICES}
          onClick={() => {
            onLinkClick();
            handleClickNavCarpetService();
          }}
          href={ROUTES.CARPET_SERVICES}
          scrolled={scrolled}
        >
          LAUNDRY KARPET
        </MenuItem>
      </li>
      <li className="hidden lg:block">
        <MenuItem
          isActive={pathname === ROUTES.SPRING_BED_SERVICES}
          onClick={() => { onLinkClick(); }}
          href={ROUTES.SPRING_BED_SERVICES}
          scrolled={scrolled}
        >
          LAUNDRY SPRING BED
        </MenuItem>
      </li>
      <li className="flex">
        <MenuItem
          isActive={(
            pathname !== ROUTES.HOME &&
            pathname !== ROUTES.CARPET_SERVICES &&
            pathname !== ROUTES.SPRING_BED_SERVICES
          )}
          onClick={() => {
            onMenuOpen();
          }}
          href="#"
          scrolled={scrolled}
        >
          LAUNDRY LAINNYA
        </MenuItem>
      </li>
    </ul>
  );
};

const MenuItem: React.FC<{
  href: string
  children: React.ReactNode
  onClick: () => void
  scrolled: boolean
  isActive: boolean
}> = ({ href, isActive, children, scrolled, onClick }) => {

  return (
    <Link
      href={href}
      onClick={() => { onClick(); }}
      className={clsx(
        "block py-2 transition-colors duration-500 ease-in-out border-b-2",
        // < md
        "text-lg text-secondary-foreground",
        isActive
          ? "border-primary/100"
          : "border-primary/0 hover:border-primary/100",
        // > md
        "md:text-base md:font-semibold",
        scrolled
          ? "md:text-secondary-foreground"
          : "md:text-secondary",
        (isActive && scrolled) && "md:border-primary/100",
        (isActive && !scrolled) && "md:border-secondary/100",
        (!isActive && scrolled) && "md:border-primary/0 hover:md:border-primary/100",
        (!isActive && !scrolled) && "md:border-secondary/0 hover:md:border-secondary/100",
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