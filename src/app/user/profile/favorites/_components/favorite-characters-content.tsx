"use client";

import Image from "next/image";
import Link from "next/link";
import { XIcon } from "lucide-react";
import { startTransition } from "react";
import { deleteCharactersFromList } from "@/actions/animoon/characters/delete-characters-from-list";
import { toast } from "@/hooks/use-toast";

interface Characters {
  id: string;
  title: string;
  image: string;
  characterId: string;
}

interface FavoritesCharactersContentProps {
  datas: Characters[];
}

const FavoritesCharacterContent = ({
  datas,
}: FavoritesCharactersContentProps) => {
  const handleDeleteCharacters = async (id: string) => {
    startTransition(() => {
      deleteCharactersFromList(id)
        .then(() => {
          toast({
            title: "Character deleted from your list",
            description:
              "Congrats! You have deleted this Character from your list",
          });
        })
        .catch((res) => {
          toast({
            variant: "destructive",
            title: res.error,
            description: "Please try again",
          });
        });
    });
  };

  return (
    <main className="my-4 px-4">
      <h4 className="py-4 font-bold">Characters</h4>
      <section className="mx-auto max-w-[1200px] rounded-md p-4 dark:bg-primary-foreground">
        <div className="grid grid-cols-3 items-center sm:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10">
          {datas.map(({ id, title, image, characterId }) => (
            <div className="flex flex-col items-center" key={id}>
              <div className="relative">
                <Link href={`/character/${characterId}`}>
                  <Image
                    src={image as string}
                    width={80}
                    height={80}
                    alt="favorite-image"
                    className="cursor-pointer rounded-md"
                    style={{ width: "auto", height: "auto" }}
                  />
                </Link>

                <XIcon
                  className="absolute right-0 top-0 cursor-pointer bg-[#E25A72]"
                  size={20}
                  onClick={() => handleDeleteCharacters(id)}
                />
              </div>
              <h5 className="py-1 text-center text-sm">
                {title.length > 20 ? title.substring(0, 15) + "..." : title}
              </h5>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default FavoritesCharacterContent;
