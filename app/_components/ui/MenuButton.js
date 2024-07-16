"use client";

import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import SideMenu from "./SideMenu";

function MenuButton() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenuHandler = () => {
    setToggleMenu((value) => !value);
  };

  return (
    <>
      <SideMenu onToggleMenu={toggleMenuHandler} menuIsEnabled={toggleMenu} />
      <button className="p-1 md:hidden" onClick={toggleMenuHandler}>
        <IoMenuSharp className="h-8 w-8 text-stone-800 dark:text-white" />
      </button>
    </>
  );
}

export default MenuButton;
