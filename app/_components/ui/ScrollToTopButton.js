"use client";

import { HiArrowLongUp } from "react-icons/hi2";

function ScrollToTopButton() {
  const scrollToTopHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="my-16 flex justify-center">
      <button
        className="flex items-center justify-center text-xl font-semibold text-stone-500 transition-all duration-200 hover:text-stone-600 dark:text-zinc-400 dark:hover:text-zinc-500"
        onClick={scrollToTopHandler}
      >
        <HiArrowLongUp className="mr-1" />
        Back to Top
      </button>
    </div>
  );
}

export default ScrollToTopButton;
