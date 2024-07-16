import Image from "next/image";
import Link from "next/link";

function ClientItem({ name, projectName, img, description, slug }) {
  return (
    <Link
      href={`/works/${slug}`}
      className="self-start transition-all duration-300 hover:-translate-y-2 active:-translate-y-0"
    >
      <div className="overflow-hidden relative rounded-lg aspect-square">
        <Image
          src={img}
          fill
          className="object-cover object-top"
          alt={projectName}
        />
      </div>

      <div className="text-center">
        <span className="mt-4 block text-sm font-medium uppercase text-stone-800 dark:text-white">
          {projectName}
        </span>
        <span className="mt-2 block text-[13px] font-semibold capitalize text-primary">
          {name}
        </span>
      </div>
    </Link>
  );
}

export default ClientItem;
