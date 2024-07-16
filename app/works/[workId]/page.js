import ClientDetail from "@/app/_components/client/ClientDetail";
import { getClient } from "@/app/_lib/data-service";

export async function generateMetadata({ params }) {
  const client = await getClient(params.workId);

  const metaText = client.data.projectName
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  return {
    title: `${metaText}`,
  };
}

export default async function Page({ params }) {
  const client = await getClient(params.workId);

  return (
    <ClientDetail
      id={client.data._id}
      name={client.data.name}
      projectName={client.data.projectName}
      img={client.data.coverImageUrl}
      description={client.data.description}
      images={client.data.imagesUrl || []}
      slug={client.data.slug}
    />
  );
}
