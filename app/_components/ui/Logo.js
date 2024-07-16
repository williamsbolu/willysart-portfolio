import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="w-24 md:w-28">
      <Image src={logo} alt="willysart logo" quality={80} />
    </Link>
  );
}

export default Logo;
