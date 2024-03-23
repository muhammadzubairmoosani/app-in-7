"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CustomButton } from "../buttons";
import { Logo } from "../logo";
import { ThemeSwitch } from "../theme-switch";
import NavLinks from "./nav-links";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";

  const isMarginZero = () => {
    const paths = [
      "/start-solutions",
      "/market-solutions",
      "/manage-solutions",
      "/pre-launch",
      "/post-launch",
      "/development",
      "/about",
      "/",
    ];
    return paths.includes(pathname);
  };

  const [navbarCloseToggleIcon, setNavbarCloseToggleIcon] =
    useState("/menu.svg");
  const [mapIcon, setMapIcon] = useState("/map.svg");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getNavBarHandleCloseIcon = () => {
    setMapIcon(isDarkMode ? "/map-white.svg" : "/map.svg");

    if (open) {
      setNavbarCloseToggleIcon(isDarkMode ? "/close-white.png" : "/close.svg");
    } else {
      setNavbarCloseToggleIcon(isDarkMode ? "/menu-white.png" : "/menu.svg");
    }
  };

  useEffect(() => {
    getNavBarHandleCloseIcon();
  }, [getNavBarHandleCloseIcon, open, resolvedTheme]);

  return (
    <nav
      className={`bg-white dark:bg-black shadow-md mb-${
        isMarginZero() ? "0" : "14"
      }`}
    >
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 px-5 py-3 md:w-auto w-full flex justify-between items-center">
          <Link href="/">
            <Logo width={60} />
          </Link>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <Image
              src={navbarCloseToggleIcon}
              alt="menu"
              width={isDarkMode ? 25 : 30}
              height={isDarkMode ? 25 : 30}
            />
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          <div className="flex gap-6">
            <CustomButton
              bgColor="bg-transparent dark:bg-white hover:bg-light-gray"
              textColor="text-black"
            >
              <Image
                className="mr-2"
                src="/eco.svg"
                alt="eco"
                width={15}
                height={10}
              />
              Talk to Sales
            </CustomButton>
            <CustomButton className="bg-gradient-to-r from-customRed to-customIndigo ">
              Get Started
            </CustomButton>

            <Image
              src={mapIcon}
              alt="map"
              width={isDarkMode ? 30 : 25}
              height={isDarkMode ? 30 : 25}
            />
            <ThemeSwitch />
          </div>
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white dark:bg-black fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <NavLinks />
          <div>
            <CustomButton
              bgColor="bg-transparent dark:bg-white"
              textColor="text-black"
            >
              <Image
                className="mr-2"
                src="/eco.svg"
                alt="eco"
                width={15}
                height={10}
              />
              Talk to Sales
            </CustomButton>
          </div>
          <div className="py-5">
            <CustomButton className="bg-gradient-to-r from-customRed to-customIndigo ">
              Get Started
            </CustomButton>
          </div>
          <div className="py-5 flex justify-evenly">
            <Image
              src={mapIcon}
              alt="map"
              width={isDarkMode ? 30 : 25}
              height={isDarkMode ? 30 : 25}
            />

            <ThemeSwitch />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
