import Logo from "@/app/_components/ui/Logo";
import Navigation from "@/app/_components/ui/Navigation";
import { IoMenuSharp } from "react-icons/io5";
import MenuButton from "./MenuButton";

function Header() {
  return (
    <header>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-8">
        <Logo />
        <Navigation />
        <MenuButton />
      </div>
    </header>
  );
}

export default Header;
