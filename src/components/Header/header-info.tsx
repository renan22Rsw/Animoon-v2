import Image from "next/image";
import { Button } from "../ui/button";

interface HeaderInfoProps {
  headerImage: string;
  title: string;
  description: string;
}

export const HeaderInfo = ({
  title,
  description,
  headerImage,
}: HeaderInfoProps) => {
  return (
    <div className="absolute bottom-10 mx-auto flex justify-center xl:w-[88%] 2xl:w-3/5">
      <div className="mx-6 space-y-4">
        <Image
          src={headerImage as string}
          alt="hearder-picture"
          width={200}
          height={200}
        />
        <Button variant={"outline"} className="w-full">
          Add List
        </Button>
      </div>
      <div className="mx-3 flex w-full flex-col justify-center space-y-4">
        <h2 className="pt-4 text-start font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

interface HeaderInfoMobileProps {
  title: string;
  description: string;
  headerImage: string;
}

export const HeaderInfoMobile = ({
  title,
  description,
  headerImage,
}: HeaderInfoMobileProps) => {
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
        <Button variant={"outline"}>Add List</Button>

        <div className="rounded-md p-1">
          <p className="w-[300px] text-center text-xs">{description}</p>
        </div>
      </div>
    </div>
  );
};
