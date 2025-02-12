import Image from "next/image";
import Link from "next/link";

const characters = [
  {
    id: 1,
    title: "Naruto Uzumaki",
    image:
      "https://s4.anilist.co/file/anilistcdn/character/large/b321562-M0uFhrsiodTr.png",
  },
  {
    id: 2,
    title: "Sasuke Uchiha",
    image:
      "https://s4.anilist.co/file/anilistcdn/character/large/b321562-M0uFhrsiodTr.png",
  },
  {
    id: 3,
    title: "Sakura Haruno",
    image:
      "https://s4.anilist.co/file/anilistcdn/character/large/b321562-M0uFhrsiodTr.png",
  },
  {
    id: 4,
    title: "Kakashi Hatake",
    image:
      "https://s4.anilist.co/file/anilistcdn/character/large/b321562-M0uFhrsiodTr.png",
  },
  {
    id: 5,
    title: "Tsunade",
    image:
      "https://s4.anilist.co/file/anilistcdn/character/large/b321562-M0uFhrsiodTr.png",
  },
];

const FavoritesCharacterContent = () => {
  return (
    <main className="my-4 px-4">
      <h4 className="py-4 font-bold">Characters</h4>
      <section className="mx-auto max-w-[1200px] rounded-md p-4 dark:bg-primary-foreground">
        <div className="grid grid-cols-3 items-center sm:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10">
          {characters.map((characters) => (
            <div className="flex flex-col items-center" key={characters.id}>
              <Link href={`/character/${characters.id}`}>
                <Image
                  src={
                    "https://s4.anilist.co/file/anilistcdn/character/large/b321562-M0uFhrsiodTr.png"
                  }
                  width={80}
                  height={80}
                  alt="favorite-image"
                  className="cursor-pointer rounded-md"
                />
              </Link>
              <h5 className="py-1 text-center">Mari</h5>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default FavoritesCharacterContent;
