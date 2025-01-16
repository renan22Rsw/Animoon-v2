"use client";

import Image from "next/image";
import { useMediaQuery } from "../../../../hooks/useMediaQuery";

const SearchContents = () => {
  const animeList = [
    {
      id: 1,
      title: "Death Note",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbPhZNAyOAgYcYvEAiXvEDZoDgc1fpAnd7Q&s",
    },

    {
      id: 2,
      title: "Magic Maker: Isekai Mahou no Tsukurikata",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbPhZNAyOAgYcYvEAiXvEDZoDgc1fpAnd7Q&s",
    },

    {
      id: 3,
      title: "Inazuma Eleven",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbPhZNAyOAgYcYvEAiXvEDZoDgc1fpAnd7Q&s",
    },

    {
      id: 4,
      title: "Naruto",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbPhZNAyOAgYcYvEAiXvEDZoDgc1fpAnd7Q&s",
    },

    {
      id: 5,
      title: "Re:Zero",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbPhZNAyOAgYcYvEAiXvEDZoDgc1fpAnd7Q&s",
    },

    {
      id: 6,
      title: "Re:Zero",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbPhZNAyOAgYcYvEAiXvEDZoDgc1fpAnd7Q&s",
    },
  ];

  const isMobile = useMediaQuery("(max-width: 640px)") ? null : animeList.pop();

  return (
    <section
      className={`lg:px-12" grid ${isMobile ? "grid-cols-5" : "grid-cols-3"} bg-red-500 py-2`}
    >
      {animeList.map((anime) => (
        <div key={anime.id} className="px-2">
          <Image
            src={anime.img}
            alt="anime-image"
            width={150}
            height={150}
            className="cursor-pointer rounded-md"
          />
          <h3 className="mr-2 max-w-[150px] space-x-4 px-2 py-2 text-sm font-semibold">
            {anime.title}
          </h3>
        </div>
      ))}
    </section>
  );
};

export default SearchContents;
