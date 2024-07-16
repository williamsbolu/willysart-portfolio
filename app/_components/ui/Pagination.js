"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { PAGE_SIZE } from "@/app/_lib/data-service";

function Pagination({ count }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  // Pagecount is the total number of pages that will be returned
  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    // if we are on the last page
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    const params = new URLSearchParams(searchParams);
    params.set("page", next);
    router.push(`${pathName}?${params.toString()}`, { scroll: false });
  }

  function prevPage() {
    // if we're on the first page
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    const params = new URLSearchParams(searchParams);
    params.set("page", prev);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }

  const prevPageIsDisabled = currentPage === 1;
  const nextPageIsDisabled = currentPage === pageCount;

  if (pageCount <= 1) return null;

  return (
    <div
      className={`mb-16 mt-12 flex justify-between text-stone-500 dark:dark:text-gray-400 `}
    >
      <button
        className={`group/previous flex items-center font-medium ${
          prevPageIsDisabled && "invisible"
        }`}
        onClick={prevPage}
      >
        <MdKeyboardArrowLeft className="h-5 w-5 transition-[all] duration-200 group-hover/previous:text-primary" />
        <span className="text-sm transition-[all] duration-200 group-hover/previous:text-primary">
          Prev
        </span>
      </button>

      <div className="flex gap-2 text-sm font-medium">
        {!prevPageIsDisabled && (
          <button className="h-6 w-6 rounded-lg" onClick={prevPage}>
            {currentPage - 1}
          </button>
        )}
        <button className="h-6 w-6 rounded-lg bg-primary text-white">
          {currentPage}
        </button>
        {!nextPageIsDisabled && (
          <button className="h-6 w-6 rounded-lg" onClick={nextPage}>
            {currentPage + 1}
          </button>
        )}
      </div>

      <button
        className={`group/next flex items-center font-medium ${
          nextPageIsDisabled && "invisible"
        }`}
        onClick={nextPage}
      >
        <span className="text-sm transition-[all] duration-200 group-hover/next:text-primary">
          Next
        </span>
        <MdKeyboardArrowRight className="h-5 w-5 transition-[all] duration-200 group-hover/next:text-primary" />
      </button>
    </div>
  );
}

export default Pagination;
