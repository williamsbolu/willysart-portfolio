"use client";

import { useDisplay } from "@/app/_context/display-context";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const navLinks = [
  {
    name: "Works",
    href: "/works",
  },
  {
    name: "Illustrations",
    href: "/illustrations",
  },
  {
    name: "Cover Arts",
    href: "/cover-arts",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

function Navigation() {
  const { currentDisplay, changeDisplay } = useDisplay();
  const pathname = usePathname();

  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-x-8">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={`text-sm font-semibold uppercase hover:text-primary transition-all duration-200 ${
                pathname === link.href
                  ? "text-primary"
                  : "text-stone-600 dark:text-white"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}

        <li className="nav-item">
          <button
            onClick={changeDisplay}
            className="rounded-xl border border-neutral-200 bg-neutral-100 p-2 shadow-sm dark:border-neutral-700/75 dark:bg-gray-800/50"
          >
            {currentDisplay === "dark" ? (
              <IoSunnyOutline className="h-4 w-4 text-primary" />
            ) : (
              <IoMoonOutline className="h-4 w-4 text-primary" />
            )}
          </button>
        </li>
        {/* <li className="nav-item">
          <button className="">
            <HiHeart className="h-6 w-6 text-primary" />
          </button>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navigation;
