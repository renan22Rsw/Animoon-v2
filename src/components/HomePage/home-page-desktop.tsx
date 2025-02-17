import Image from "next/image";
import HomeImage from "@/../public/home-image.png";
import { Button } from "../ui/button";
import Link from "next/link";

const HomePageDesktop = () => {
  return (
    <div className="flex h-screen items-center justify-between">
      <div className="bg-purple-8 ml-14 h-[500px] w-[850px]">
        <h1 className="max-w-[550px] font-bold lg:text-7xl 2xl:text-8xl">
          Welcome to Animoon
        </h1>
        <Link href={"/search/anime"}>
          <Button
            className="mt-4 bg-yellow-500 text-xl font-semibold text-black"
            variant={"outline"}
          >
            Get Started
          </Button>
        </Link>
      </div>

      <div className="flex h-full w-[800px] items-end justify-end">
        <Image
          src={HomeImage}
          alt="home-image"
          width={906}
          height={660}
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default HomePageDesktop;
