import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import NavbarTabElements from "../features/NavbarTabElements";
import { SiLinuxserver } from "react-icons/si";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(false);
  const handleMenu = () => {
    setActiveMenu(!activeMenu);
  };
  return (
    <div className="fixed w-full top-2 flex items-center justify-center">
      <div className="bg-slate-700 rounded-2xl w-full mx-4 px-4">
        <div className="px-4 flex h-16 items-center justify-between">
          <div>
            <a href="#">
              <SiLinuxserver data-testid="logo-icon" size={30} />
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <NavbarTabElements className="hidden sm:flex gap-2" />
            <IoSearchOutline
              data-testid="search-icon"
              className="hover:bg-slate-800 p-2 rounded-2xl cursor-pointer"
              size={40}
            />
            <div className="relative">
              <RxHamburgerMenu
                onClick={handleMenu}
                className="sm:hidden"
                size={20}
              />
              {activeMenu && (
                <NavbarTabElements className="sm:flex sm:hidden absolute top-full mt-2 right-0 bg-gray-700 rounded-2xl w-40 shadow-lg z-50" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
