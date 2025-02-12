import Image from "next/image";
import { Button } from "../ui/button";

export interface CharacterOrStaffHeaderProps {
  name: {
    userPreferred: string;
    native: string;
    alternative: string[];
  };
  image: string;

  dateOfBirth: {
    day: number;
    month: number;
  };
  description: string;
  gender: string;
  age?: string;
  bloodType?: string;
  homeTown?: string;
}

export const CharacterOrStaffHeader = ({
  name,
  image,
  dateOfBirth,
  description,
  gender,
  age,
  bloodType,
  homeTown,
}: CharacterOrStaffHeaderProps) => {
  return (
    <header className="h-[150px] w-full bg-[#EBF0F4] dark:bg-primary-foreground">
      <section className="mx-14 flex py-8">
        <div className="flex flex-col items-center space-y-4">
          <Image
            src={image}
            width={300}
            height={300}
            alt="character-or-staff-image"
            className="rounded-md"
          />
          <Button variant={"outline"}>Add To Favorites</Button>
        </div>

        <section className="my-4 ml-4 w-full space-y-2">
          <h2 className="pt-8 text-2xl font-semibold">
            {name.userPreferred ? name.userPreferred : name.native}
          </h2>
          <p className="font-thin">
            {name.alternative.length === 0 ? (
              <span>{name.native}</span>
            ) : (
              name.alternative.map((alternative, index) => (
                <span key={index}>{alternative}, </span>
              ))
            )}
          </p>

          <div className="h-[200px]">
            <div className="pt-10">
              {dateOfBirth && (
                <h5 className="font-bold">
                  Birthday:{" "}
                  <span className="font-thin">
                    {dateOfBirth.month + "/" + dateOfBirth.day}
                  </span>
                </h5>
              )}
              {age && (
                <h5 className="font-bold">
                  Age: <span className="font-thin">{age}</span>
                </h5>
              )}

              {gender && (
                <h5 className="font-bold">
                  Gender: <span className="font-thin">{gender}</span>
                </h5>
              )}

              {bloodType && (
                <h5 className="font-bold">
                  Blood Type: <span className="font-thin">{bloodType}</span>
                </h5>
              )}

              {homeTown && (
                <h4 className="font-semibold">
                  Home Town:<span className="font-thin"> {homeTown}</span>
                </h4>
              )}

              <p className="mt-4">{description}</p>
            </div>
          </div>
        </section>
      </section>
    </header>
  );
};
