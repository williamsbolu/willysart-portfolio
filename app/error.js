"use client";

export default function Error({ error, reset }) {
  return (
    <section className="flex justify-center items-center flex-col gap-6 mt-24 md:mt-10">
      <h1 className="text-2xl md:text-3xl font-semibold text-stone-700 dark:text-gray-300">
        Something went wrong!
      </h1>
      <p className="text-base text-stone-700 dark:text-gray-300">
        {error.message}
      </p>

      <button
        className="inline-block bg-primary font-medium rounded-lg capitalize text-white px-6 py-3 text-sm"
        onClick={reset}
      >
        Try again
      </button>
    </section>
  );
}
