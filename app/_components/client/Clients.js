import Pagination from "@/app/_components/ui/Pagination";
import ClientItem from "@/app/_components/client/ClientItem";

function Clients({ data, count }) {
  return (
    <section>
      <div className="mb-5 mt-5 grid gap-7 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-5 md:grid-cols-4 md:gap-x-4 md:gap-y-8">
        {data.map((item) => (
          <ClientItem
            key={item._id}
            name={item.name}
            projectName={item.projectName}
            img={item.coverImageUrl}
            description={item.description}
            slug={item.slug}
          />
        ))}
      </div>

      <Pagination count={count} />
    </section>
  );
}

export default Clients;
