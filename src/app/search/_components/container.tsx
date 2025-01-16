import Image from "next/image";

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
  ];

  return (
    <section className="grid grid-cols-3 bg-red-500 py-2 sm:grid-cols-5 lg:px-12">
      {animeList.map((anime) => (
        <div key={anime.id} className="px-2">
          <Image
            src={anime.img}
            alt="anime-image"
            width={150}
            height={150}
            className="cursor-pointer rounded-md"
          />
          <h3 className="max-w-[150px] text-sm font-semibold text-foreground">
            {anime.title}
          </h3>
        </div>
      ))}
    </section>
  );
};

export default SearchContents;
