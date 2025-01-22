import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import SubTitle from "../SubTitle/sub-title";

const RecomendationsMobile = () => {
  return (
    <>
      <SubTitle title="Recomendations" />
      <Carousel
        opts={{
          align: "start",
        }}
        className="bg-[#EBF0F4] p-2 dark:bg-primary-foreground sm:hidden"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <div className="flex aspect-square items-center justify-center">
                  <span className="text text-center text-lg font-semibold">
                    <Image
                      src={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbPhZNAyOAgYcYvEAiXvEDZoDgc1fpAnd7Q&s"
                      }
                      alt="recomendations-image"
                      width={200}
                      height={200}
                      className="rounded-md"
                    />
                    <h6>Death Note</h6>
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
