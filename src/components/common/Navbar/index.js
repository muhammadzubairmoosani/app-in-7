"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CustomButton } from "../buttons";
import { Logo } from "../logo";
import { ThemeSwitch } from "../theme-switch";
import NavLinks from "./nav-links";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isMarginZero = () => {
    const paths = [
      "/start-solutions",
      "/market-solutions",
      "/manage-solutions",
    ];
    return paths.includes(pathname);
  };

  return (
    <nav className={`bg-white mb-${isMarginZero() ? "0" : "14"}`}>
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 px-5 py-3 md:w-auto w-full flex justify-between items-center">
          <Link href="/">
            <Logo width={50} />
          </Link>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <Image
              src={open ? "/close.svg" : "/menu.svg"}
              alt="menu"
              width={30}
              height={30}
            />
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          <div className="flex gap-6">
            <CustomButton
              bgColor="bg-transparent hover:bg-light-gray"
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

            <Image src="/map.svg" alt="map" width={20} height={20} />
            <ThemeSwitch />
          </div>
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <NavLinks />
          <div>
            <CustomButton bgColor="bg-transparent" textColor="text-black">
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
            <Image src="/map.svg" alt="map" width={25} height={25} />
            <Image src="/moon.svg" alt="moon" width={25} height={25} />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
