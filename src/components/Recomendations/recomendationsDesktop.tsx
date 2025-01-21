import Image from "next/image";
import SubTitle from "../SubTitle/sub-title";

const RecomendationsDesktop = () => {
  return (
    <>
      <SubTitle title="Recomendations" />
      <section className="w-full bg-slate-300 py-2">
        <div className="grid grid-cols-5">
          <div className="flex flex-col items-center">
            <Image
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbPhZNAyOAgYcYvEAiXvEDZoDgc1fpAnd7Q&s"
              }
              alt="recomendations-image"
              width={150}
              height={150}
              className="rounded-md"
            />
            <h4 className="font-semibold">Death Note</h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecomendationsDesktop;
