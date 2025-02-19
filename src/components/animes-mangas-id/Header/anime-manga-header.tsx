"use client";

import Image from "next/image";
import { Button } from "../../ui/button";
import { useTransition } from "react";
import { toast } from "@/hooks/use-toast";
import { usePathname } from "next/navigation";
import { addAnimesToList } from "@/actions/animoon/animes/add-animes-to-list";
import { addMangasToList } from "@/actions/animoon/mangas/add-mangas-to-list";

interface HeaderInfoProps {
  headerImage: string;
  title: string;
  description: string;
  id: string;
}

export const AnimeMangaHeader = ({
  title,
  description,
  headerImage,
  id,
}: HeaderInfoProps) => {
  const [isPending, startTransition] = useTransition();
  const pathName = usePathname()?.split("/")[1];

  const handleAddAnimeToList = () => {
    startTransition(() => {
      addAnimesToList(title, headerImage, id)
        .then((res) => {
          toast({
            title: res.success,
            description: "Congrats! You have added this anime to your list",
          });
          if (res.error) {
            toast({
              variant: "destructive",
              title: res.error,
              description: "Please try again",
            });
          }
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

  const handleAddMangaToList = () => {
    startTransition(() => {
      addMangasToList(title, headerImage, id)
        .then((res) => {
          toast({
            title: res.success,
            description: "Congrats! You have added this manga to your list",
          });
          if (res.error) {
            toast({
              variant: "destructive",
              title: res.error,
              description: "Please try again",
            });
          }
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
    <div className="absolute bottom-0 mx-auto flex justify-center xl:w-[88%] 2xl:w-3/5">
      <div className="mx-6 space-y-4 p-2">
        <Image
          src={headerImage as string}
          alt="hearder-picture"
          width={300}
          height={300}
          className="rounded-sm"
        />
        <Button
          variant={"outline"}
          disabled={isPending}
          onClick={
            pathName === "anime" ? handleAddAnimeToList : handleAddMangaToList
          }
          className="w-full bg-[#9494bc] dark:bg-[#42426a]"
        >
          Add To List
        </Button>
      </div>
      <div className="mx-3 flex w-full flex-col justify-center space-y-4">
        <h2 className="pt-4 text-start text-2xl">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AnimeMangaHeader;
