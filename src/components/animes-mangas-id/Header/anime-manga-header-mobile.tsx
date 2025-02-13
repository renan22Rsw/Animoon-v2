import Image from "next/image";
import { Button } from "../../ui/button";

import { toast } from "@/hooks/use-toast";
import { useTransition } from "react";
import { usePathname } from "next/navigation";
import { addAnimesToList } from "@/actions/animoon/animes/add-animes-to-list";
import { addMangasToList } from "@/actions/animoon/mangas/add-mangas-to-list";

interface HeaderInfoMobileProps {
  id: string;
  title: string;
  description: string;
  headerImage: string;
}

const AnimeMangaHeaderMobile = ({
  id,
  title,
  description,
  headerImage,
}: HeaderInfoMobileProps) => {
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
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center space-y-2">
        <Image
          src={headerImage as string}
          alt="hearder-picture"
          width={130}
          height={130}
        />
        <h2 className="font-bold">{title}</h2>
        <Button
          variant={"outline"}
          onClick={
            pathName === "anime" ? handleAddAnimeToList : handleAddMangaToList
          }
          disabled={isPending}
        >
          Add List
        </Button>

        <div className="rounded-md p-1">
          <p className="w-[300px] text-center text-xs">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AnimeMangaHeaderMobile;
