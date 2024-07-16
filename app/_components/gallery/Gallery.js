import ScrollToTopButton from "@/app/_components/ui/ScrollToTopButton";
import GalleryItem from "@/app/_components/gallery/GalleryItem";
import FancyBox from "@/app/_components/ui/FancyBox";
import { PAGE_SIZE } from "@/app/_lib/data-service";
import Pagination from "@/app/_components/ui/Pagination";

function Gallery({ data, count }) {
  // Pagecount is the total number of pages that will be returned
  const pageCount = Math.ceil(count / PAGE_SIZE);

  return (
    <section className="mt-5">
      <FancyBox
        options={{
          Thumbs: false,
          Carousel: {
            infinite: false,
          },
        }}
      >
        <div className="grid gap-7 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-5 md:grid-cols-4 md:gap-x-4 md:gap-y-5">
          {data.map((curItem) => (
            <GalleryItem
              key={curItem._id}
              id={curItem._id}
              img={curItem.imageUrl}
              description={curItem.description}
            />
          ))}
        </div>
      </FancyBox>

      {pageCount <= 1 && <ScrollToTopButton />}
      <Pagination count={count} />
    </section>
  );
}

export default Gallery;
