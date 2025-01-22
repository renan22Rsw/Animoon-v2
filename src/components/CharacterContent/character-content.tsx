import Image from "next/image";

const CharacterContent = () => {
  return (
    <div className="my-1 flex justify-between rounded-md bg-[#EBF0F4] dark:bg-primary-foreground xl:w-[350px] 2xl:w-[400px]">
      <div className="flex">
        <Image
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbPhZNAyOAgYcYvEAiXvEDZoDgc1fpAnd7Q&s"
          }
          alt="banner-image"
          width={60}
          height={60}
        />
        <div className="mr-2 flex flex-col justify-between px-1 py-2">
          <h4 className="mx-1 text-xs font-semibold">Light</h4>
          <p className="mx-1 text-xs">Main</p>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col justify-between px-1 py-2">
          <h4 className="mx-1 text-xs font-semibold">Light</h4>
          <p className="mx-1 text-xs">Main</p>
        </div>
        <Image
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbPhZNAyOAgYcYvEAiXvEDZoDgc1fpAnd7Q&s"
          }
          alt="banner-image"
          width={60}
          height={60}
        />
      </div>
    </div>
  );
};

export default CharacterContent;
