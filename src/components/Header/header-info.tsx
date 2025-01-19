import Image from "next/image";
import { Button } from "../ui/button";

export const HeaderInfo = () => {
  return (
    <div className="absolute bottom-10 mx-auto flex max-w-[1200px] justify-center">
      <div className="mx-6 space-y-4">
        <Image
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbPhZNAyOAgYcYvEAiXvEDZoDgc1fpAnd7Q&s"
          }
          alt="hearder-picture"
          width={200}
          height={200}
        />
        <Button variant={"outline"} className="w-full">
          Add List
        </Button>
      </div>
      <div className="mx-3 flex w-full flex-col justify-center space-y-4">
        <h2 className="pt-4 text-start">Death Note</h2>
        <p>
          Light Yagami is a genius high school student who is about to learn
          about life through a book of death. When a bored shinigami, a God of
          Death, named Ryuk drops a black notepad called a Death Note, Light
          receives power over life and death with the stroke of a pen.
          Determined to use this dark gift for the best, Light sets out to rid
          the world of evil… namely, the people he believes to be evil. Should
          anyone hold such power?
        </p>
      </div>
    </div>
  );
};

export const HeaderInfoMobile = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="absolute top-28 flex flex-col items-center space-y-2">
        <Image
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbPhZNAyOAgYcYvEAiXvEDZoDgc1fpAnd7Q&s"
          }
          alt="hearder-picture"
          width={100}
          height={100}
        />
        <h2 className="font-bold">Death Note</h2>
        <Button variant={"outline"}>Add List</Button>
        <div className="mx-4 rounded-md bg-[#EBF0F4] p-1 dark:bg-primary-foreground">
          <p className="text-center text-sm">
            Light Yagami is a genius high school student who is about to learn
            about life through a book of death. When a bored shinigami, a God of
            Death, named Ryuk drops a black notepad called a Death Note, Light
            receives power over life and death with the stroke of a pen.
            Determined to use this dark gift for the best, Light sets out to rid
            the world of evil… namely, the people he believes to be evil. Should
            anyone hold such power?
          </p>
        </div>
      </div>
    </div>
  );
};
