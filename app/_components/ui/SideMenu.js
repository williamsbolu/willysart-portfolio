import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import MenuModal from "./MenuModal";
import logo from "@/public/logo.png";
import { AiFillPicture, AiOutlineClose } from "react-icons/ai";
import { IoMoonOutline, IoPeople, IoSunnyOutline } from "react-icons/io5";
import { FaRecordVinyl } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { useDisplay } from "@/app/_context/display-context";

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

function SideMenu({ onToggleMenu, menuIsEnabled }) {
  const { currentDisplay, changeDisplay } = useDisplay();
  const pathname = usePathname();

  function selectLinkIcon(path) {
    if (path === "/works") {
      return <IoPeople className="h-6 w-6 text-primary" />;
    } else if (path === "/illustrations") {
      return <AiFillPicture className="h-6 w-6 text-primary" />;
    } else if (path === "/cover-arts") {
      return <FaRecordVinyl className="h-6 w-6 text-primary" />;
    } else if (path === "/contact") {
      return <IoMailSharp className="h-6 w-6 text-primary" />;
    }
  }

  return (
    <MenuModal menuIsEnabled={menuIsEnabled} onClose={onToggleMenu}>
      <div className="mb-4 flex items-center justify-between px-8 py-6">
        <figure>
          <Image src={logo} width={64} alt="willysart-logo" />
        </figure>

        <button className="" onClick={onToggleMenu}>
          <AiOutlineClose className="h-6 w-6 text-stone-600 dark:text-white" />
        </button>
      </div>

      <ul className="space-y-3 px-4 py-2">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              //   onClick={onToggleMenu}
              className={`flex gap-x-3 items-center rounded-2xl p-4 text-base font-semibold text-stone-600 dark:text-white ${
                pathname === link.href ? " bg-gray-200 dark:bg-gray-950" : ""
              }`}
            >
              {selectLinkIcon(link.href)} {link.name}
            </Link>
          </li>
        ))}

        <li className="border-t border-t-gray-600 py-3">
          <button
            onClick={changeDisplay}
            className="flex w-full items-center rounded-2xl p-2 text-base font-semibold text-stone-600 dark:text-white"
          >
            <span className="mr-4 rounded-xl border border-neutral-200 bg-neutral-100 p-2 shadow-sm dark:border-neutral-700/75 dark:bg-gray-800/50">
              {currentDisplay === "dark" ? (
                <IoSunnyOutline className="h-6 w-6 text-primary" />
              ) : (
                <IoMoonOutline className="h-6 w-6 text-primary" />
              )}
            </span>
            Change Theme
          </button>
        </li>
      </ul>
    </MenuModal>
  );
}

export default SideMenu;
