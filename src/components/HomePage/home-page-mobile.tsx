import Image from "next/image";
import HomeImage from "@/../public/home-image.png";
import { Button } from "../ui/button";
import Link from "next/link";

const HomePageMobile = () => {
  return (
    <div className="relative flex h-screen items-center justify-between">
      <div className="h-[400px] w-full space-y-4 px-4">
        <h1 className="max-w-[400px] text-5xl font-bold sm:text-6xl md:max-w-[650px] md:text-8xl">
          Welcome to Animoon
        </h1>
        <Link href={"/search/anime"}>
          <Button className="mt-4 bg-yellow-500" variant={"outline"}>
            Get Started
          </Button>
        </Link>
      </div>
      <div>
        <Image
          src={HomeImage}
          alt="home-image"
          width={471}
          height={343}
          className="absolute bottom-0 right-0"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default HomePageMobile;
