import Image from "next/image";
import SubTitle from "../SubTitle/sub-title";

const recomendationsAnimes = [
  {
    id: 1,
    title: "Death Note",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbPhZNAyOAgYcYvEAiXvEDZoDgc1fpAnd7Q&s",
  },

  {
    id: 2,
    title: "Death Note",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbPhZNAyOAgYcYvEAiXvEDZoDgc1fpAnd7Q&s",
  },

  {
    id: 3,
    title: "Death Note",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbPhZNAyOAgYcYvEAiXvEDZoDgc1fpAnd7Q&s",
  },

  {
    id: 4,
    title: "Death Note",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbPhZNAyOAgYcYvEAiXvEDZoDgc1fpAnd7Q&s",
  },

  {
    id: 5,
    title: "Death Note",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbPhZNAyOAgYcYvEAiXvEDZoDgc1fpAnd7Q&s",
  },
];

const RecomendationsDesktop = () => {
  return (
    <>
      <SubTitle title="Recomendations" />
      <section className="w-full bg-[#EBF0F4] p-2 py-2 dark:bg-primary-foreground">
        <div className="grid grid-cols-5">
          {recomendationsAnimes.map((item) => (
            <div key={item.id} className="flex flex-col items-center sm:px-1">
              <Image
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbPhZNAyOAgYcYvEAiXvEDZoDgc1fpAnd7Q&s"
                }
                alt="recomendations-image"
                width={150}
                height={150}
                className="rounded-md"
              />
              <h4 className="font-semibold">{item.title}</h4>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default RecomendationsDesktop;
