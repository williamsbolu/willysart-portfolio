export default function Loading() {
  return (
    <div className="mx-auto grid max-w-6xl gap-12 pb-10 pt-5 md:grid-cols-2 md:gap-6">
      <div className="h-[330px] animate-pulse bg-stone-200 dark:bg-gray-800 md:h-[400px]"></div>

      <div className="md:p-5">
        <div className="mb-5 h-5 w-1/4 animate-pulse bg-stone-200 dark:bg-gray-800"></div>
        <div className="mb-7 h-9 w-3/4 animate-pulse bg-stone-200 dark:bg-gray-800"></div>

        <div className="space-y-4">
          <div className="h-5 animate-pulse bg-stone-200 dark:bg-gray-800"></div>
          <div className="h-5 animate-pulse bg-stone-200 dark:bg-gray-800"></div>
          <div className="h-5 animate-pulse bg-stone-200 dark:bg-gray-800"></div>
        </div>
      </div>
    </div>
  );
}
