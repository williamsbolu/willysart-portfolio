import Gallery from "@/app/_components/gallery/Gallery";
import { getGallery } from "../_lib/data-service";

export const revalidate = 0;

export const metadata = {
  title: "Illustrations",
};

export default async function Page({ searchParams }) {
  // Pagination
  const page = !searchParams?.page ? 1 : Number(searchParams.page);

  const illustrations = await getGallery("illustration", page);

  return <Gallery data={illustrations.data} count={illustrations.count} />;
}
