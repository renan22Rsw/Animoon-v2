"use client";

import Image from "next/image";
import Link from "next/link";
import { FaTrashAlt } from "react-icons/fa";

interface DataListProps {
  title?: string;
  image?: string;
  id?: number;
  path: string;
}

const animes = [
  {
    id: 1,
    title: "Naruto",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx20-LxrhhIQyiE60.jpg",
  },
  {
    id: 2,
    title: "One Piece",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx101814-l7z4xO9z3L9U.jpg",
  },
  {
    id: 3,
    title: "Attack on Titan",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/101922-wJhYb3sR4Q0b.jpg",
  },
  {
    id: 4,
    title: "Death Note",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx1648-7U4YV4qLwXhY.jpg",
  },
  {
    id: 5,
    title: "Bleach",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx1211-2J9X6FjGz3Hx.jpg",
  },
];

const DataList = ({ path }: DataListProps) => {
  return (
    <main className="px-4">
      <div className="mx-auto my-4 w-full max-w-[1000px] rounded-md">
        <div className="flex justify-between">
          <h3 className="p-4 font-bold">Title</h3>
          <h3 className="p-4 font-bold">Delete</h3>
        </div>
        {animes.map((anime) => (
          <div
            className="flex justify-between bg-[#EBF0F4] py-2 dark:bg-primary-foreground hover:dark:bg-zinc-400"
            key={anime.id}
          >
            <span className="flex space-x-2">
              <Image
                src={
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx20-LxrhhIQyiE60.jpg"
                }
                alt="data-list-image"
                width={50}
                height={50}
              />
              <Link href={`/${path}/${anime.id}`}>
                <h4>{anime.title}</h4>
              </Link>
            </span>
            <div className="flex cursor-pointer items-center px-4">
              <FaTrashAlt size={20} onClick={() => console.log(anime.title)} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default DataList;
