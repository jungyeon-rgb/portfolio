"use client";
import { useState, useEffect } from "react";
import MenuList from "./MenuList";

const MenuButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section>
      <div className="shadow-md bg-[#C0A8BF] z-90 text-3xl absolute flex justify-center items-center text-white w-12 h-12 rounded-full bottom-[50px] left-1/2 transform -translate-x-1/2 cursor-pointer font-stardom">
        <button onClick={toggleMenu} className="flex items-center">
          <span>MENU</span>
        </button>
      </div>
      <MenuList isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </section>
  );
};

export default MenuButton;
