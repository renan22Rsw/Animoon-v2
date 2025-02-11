import Image from "next/image";
import { Button } from "../ui/button";
import { addAnimesToList } from "@/actions/animoon/add-datas-to-list";
import { toast } from "@/hooks/use-toast";
import { useTransition } from "react";

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

  const handleAddToList = () => {
    startTransition(() => {
      addAnimesToList(title, headerImage, id)
        .then((res) => {
          toast({
            title: res.sucess,
            description: "Congrats! You have added this anime to your list",
          });

          toast({
            title: res.error,
            variant: "destructive",
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
          onClick={handleAddToList}
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
