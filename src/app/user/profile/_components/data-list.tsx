"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTrashAlt } from "react-icons/fa";

interface datas {
  id: number;
  animeId: string;
  mangaId: string;
  title: string;
  image: string;
}

interface DataListProps {
  datas: datas[];
  path: string;
}

const DataList = ({ datas, path }: DataListProps) => {
  const pathName = usePathname().split("/")[3];
  console.log(pathName);

  return (
    <main className="px-4">
      <div className="mx-auto my-4 max-w-[1000px] rounded-md">
        <div className="flex justify-between">
          <h3 className="p-4 font-bold">Title</h3>
          <h3 className="p-4 font-bold">Delete</h3>
        </div>
        {datas.map(({ id, animeId, mangaId, title, image }) => (
          <div
            className="flex justify-between bg-[#EBF0F4] py-2 dark:bg-primary-foreground hover:dark:bg-zinc-400"
            key={id}
          >
            <span className="flex space-x-2">
              <Image
                src={image as string}
                alt="data-list-image"
                width={50}
                height={50}
              />
              <Link href={`/${path}/${animeId ? animeId : mangaId}`}>
                <h4>{title}</h4>
              </Link>
            </span>
            <div className="flex cursor-pointer items-center px-4">
              <FaTrashAlt size={20} onClick={() => console.log(title)} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default DataList;
