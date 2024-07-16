import Gallery from "@/app/_components/gallery/Gallery";
import { getGallery } from "../_lib/data-service";

export const revalidate = 0;

export const metadata = {
  title: "Cover Artworks",
};

export default async function Page({ searchParams }) {
  // Pagination
  const page = !searchParams?.page ? 1 : Number(searchParams.page);

  const coverArtworks = await getGallery("cover-art", page);

  return <Gallery data={coverArtworks.data} count={coverArtworks.count} />;
}
