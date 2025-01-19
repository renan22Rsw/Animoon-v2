import Image from "next/image";

interface ColumsInfoTyped {
  id: number;
  title: string;
  info: string;
}
const columsInfo: ColumsInfoTyped[] = [
  {
    id: 1,
    title: "91%",
    info: "158178 users",
  },

  {
    id: 2,
    title: "TV Show",
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
    <section className="flex justify-center">
      <h3 className="mr-4 text-lg font-bold text-foreground">#1</h3>
      <div className="w- flex w-4/5 cursor-pointer items-center rounded-sm bg-[#EBF0F4] dark:bg-primary-foreground">
        <div className="flex w-full space-y-4 rounded-sm text-foreground">
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

        <div className="grid w-full grid-cols-3 rounded-sm px-4">
          {columsInfo.map((content) => (
            <div
              key={content.id}
              className="flex flex-col py-4 font-bold text-foreground"
            >
              <h5 className="text-md">{content.title}</h5>
              <p className="text-xs">{content.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchColumns;
