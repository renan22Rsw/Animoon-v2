import Image from "next/image";
import SubTitle from "../SubTitle/sub-title";
import { Recomendation } from "./recomendations";
import Link from "next/link";

interface RecomendationDesktopProps {
  recomendations: Recomendation[];
}

const RecomendationsDesktop = ({
  recomendations,
}: RecomendationDesktopProps) => {
  return (
    <>
      <SubTitle title="Recomendations" />
      <section className="w-full rounded-md bg-[#eaeaf0] p-2 dark:bg-[#0e0e14]">
        <div className="grid grid-cols-5">
          {recomendations.slice(0, 5).map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center space-y-2 sm:px-2"
            >
              <Link href={`/anime/${item.id}`}>
                <Image
                  src={item.image as string}
                  alt="recomendations-image"
                  width={150}
                  height={150}
                  className="h-[150px] rounded-md lg:h-[220px]"
                />
              </Link>
              <h4 className="text-center text-xs font-semibold text-[#0f0f15] dark:text-[#e9e9ef] md:text-sm">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default RecomendationsDesktop;
