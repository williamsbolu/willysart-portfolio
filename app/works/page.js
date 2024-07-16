import Clients from "@/app/_components/client/Clients";
import { getClients } from "../_lib/data-service";

export default async function Page({ searchParams }) {
  // Pagination
  const page = !searchParams?.page ? 1 : Number(searchParams.page);

  const works = await getClients(page);

  return <Clients data={works.data} count={works.count} />;
}
