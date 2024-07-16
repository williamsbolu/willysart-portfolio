import ClientDetail from "@/app/_components/client/ClientDetail";
import { getClient, getClients } from "@/app/_lib/data-service";

export const revalidate = 0;

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

export async function generateStaticParams() {
  const clients = await getClients();

  const ids = clients.data.map((client) => ({
    workId: client.slug,
  }));

  return ids;
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
