import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

function NotFound() {
  return (
    <main className="flex flex-col items-center pb-16 pt-10">
      <h1 className="mb-5 text-3xl font-semibold text-stone-700 dark:text-gray-300 md:text-5xl">
        404 - Not Found
      </h1>
      <p className="mb-2 text-sm text-stone-500 dark:text-gray-400 md:text-base">
        This page could not be found.
      </p>
      <Link
        href="/"
        className="flex items-center font-normal text-stone-600 dark:text-gray-400"
      >
        <IoIosArrowRoundBack className="h-6 w-6" />
        Go back
      </Link>
    </main>
  );
}

export default NotFound;
