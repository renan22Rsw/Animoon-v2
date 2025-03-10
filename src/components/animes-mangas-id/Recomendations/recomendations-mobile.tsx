import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import SubTitle from "../SubTitle/sub-title";
import Link from "next/link";
import { Recomendation } from "./recomendations";

interface RecomendationMobileProps {
  recomendation: Recomendation[];
}

const RecomendationsMobile = ({ recomendation }: RecomendationMobileProps) => {
  return (
    <>
      <SubTitle title="Recomendations" />
      <Carousel
        opts={{
          align: "start",
        }}
        className="bg-[#eaeaf0] p-2 dark:bg-[#0e0e14] sm:hidden"
      >
        <CarouselContent>
          {recomendation.slice(0, 5).map(({ id, title, image }) => (
            <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <div className="flex aspect-square items-center justify-center">
                  <span className="text flex flex-col items-center space-y-2 text-center text-lg font-semibold">
                    <Link href={`/anime/${id}`}>
                      <Image
                        src={image as string}
                        alt="recomendations-image"
                        width={300}
                        height={300}
                        className="h-[300px] w-auto rounded-md"
                      />
                    </Link>
                    <h6 className="text-center text-sm text-[#0f0f15] dark:text-[#e9e9ef]">
                      {title}
                    </h6>
                  </span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default RecomendationsMobile;
