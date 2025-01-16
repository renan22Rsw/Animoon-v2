import Image from "next/image";

const columsInfo = [
  {
    id: 1,
    title: "91%",
    info: "158178 users",
  },

  {
    id: 2,
    title: "TV Show%",
    info: "28 episodes",
  },

  {
    id: 3,
    title: "Fail 2023",
    info: "Finhished",
  },
];

const SearchColumns = () => {
  return (
    <section className="flex w-full text-black">
      <h3 className="mr-4 text-lg font-bold text-foreground">#1</h3>
      <div className="flex w-full space-y-4 rounded-sm bg-yellow-400 text-foreground">
        <Image
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbPhZNAyOAgYcYvEAiXvEDZoDgc1fpAnd7Q&s"
          }
          alt="search-columns-image"
          width={70}
          height={70}
          className="p-2"
        />
        <h4 className="font-semibold">Death Note</h4>
      </div>

      <div className="grid w-full grid-cols-3 rounded-sm bg-blue-600 px-4">
        {columsInfo.map((content) => (
          <>
            <div className="flex flex-col bg-green-400 py-4 font-bold text-foreground">
              <h5 key={content.id} className="text-md">
                {content.title}
              </h5>
              <p className="text-xs">{content.info}</p>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default SearchColumns;
