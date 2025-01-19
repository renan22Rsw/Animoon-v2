import Image from "next/image";

const Picture = () => {
  return (
    <Image
      src={
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbPhZNAyOAgYcYvEAiXvEDZoDgc1fpAnd7Q&s"
      }
      width={250}
      height={250}
      alt="picture"
      className="absolute -bottom-[14rem] left-20"
      style={{ contain: "content" }}
    />
  );
};

export default Picture;
