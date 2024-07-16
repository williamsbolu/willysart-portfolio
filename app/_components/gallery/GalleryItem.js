import Image from "next/image";
import Link from "next/link";

function GalleryItem({ id, img, description }) {
  return (
    <Link
      data-fancybox="gallery"
      data-caption={description}
      href={img}
      className="group relative inline-block overflow-hidden rounded-lg shadow-xl"
    >
      <figure className="h-full relative aspect-square">
        <Image src={img} fill className="object-cover" alt={description} />
        <div className="invisible absolute left-0 top-0 h-full w-full bg-primary/70 opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100"></div>
        <figcaption className="invisible absolute left-[50%] top-[50%] w-[60%] translate-x-[-50%] translate-y-[-50%] text-center text-lg font-semibold uppercase leading-8 text-white opacity-0 transition-opacity duration-300 group-hover:visible group-hover:opacity-100">
          {description}
        </figcaption>
      </figure>
    </Link>
  );
}

export default GalleryItem;
