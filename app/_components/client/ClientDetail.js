import Image from "next/image";
import Link from "next/link";
import FancyBox from "../ui/FancyBox";
import ScrollToTopButton from "@/app/_components/ui/ScrollToTopButton";

function ClientDetail({ name, projectName, img, description, images, slug }) {
  return (
    <section className="py-5 mt-5">
      <FancyBox
        options={{
          Thumbs: false,
          Carousel: {
            infinite: false,
          },
        }}
      >
        <div className="grid gap-12 md:grid-cols-2 md:gap-6">
          <Link href={img} data-fancybox="gallery" className="cursor-zoom-in">
            <Image
              src={img}
              style={{
                width: "100%",
                height: "auto",
              }}
              width={700}
              height={700}
              alt={projectName}
            />
          </Link>
          <div className="md:p-5">
            <h4 className="mb-4 text-base font-semibold text-primary">
              {name}
            </h4>
            <h2 className="mb-6 text-2xl font-semibold uppercase text-stone-700 dark:text-white md:text-3xl">
              {projectName}
            </h2>
            <div className="space-y-5 md:space-y-7">
              {/* {console.log(description.split('\\n'))} */}
              {description.split("\\n").map((text, i) => (
                <p
                  key={`text-${i}`}
                  className="text-base font-medium text-stone-600 dark:text-gray-400"
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* on the final setup, we loop through the img element and create images based on the amount of img from d server */}
        {images.length > 0 && (
          <div className="my-14 grid gap-12 md:grid-cols-2">
            {images.map((image, index) => (
              <Link
                href={image}
                data-fancybox="gallery"
                className="cursor-zoom-in"
                key={index}
              >
                <Image
                  src={image}
                  className="w-full"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  width={700}
                  height={700}
                  alt={`${slug}-${index}`}
                />
              </Link>
            ))}
          </div>
        )}
      </FancyBox>

      <ScrollToTopButton />
    </section>
  );
}

export default ClientDetail;
