"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import {
  CharacterOrStaffHeader,
  CharacterOrStaffHeaderMobile,
} from "./character-staff-headers";

interface SecondHeaderProps {
  name: {
    userPreferred: string;
    native: string;
    alternative: string[];
  };
  image: string;

  dateOfBirth?: {
    day: number;
    month: number;
  };
  description: string;
  gender: string;
  age?: string;
  bloodType?: string;
  homeTown?: string;
  yearsActive?: number[];
}

const SecondHeader = ({
  name,
  image,
  dateOfBirth,
  description,
  gender,
  age,
  bloodType,
  homeTown,
}: SecondHeaderProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {isMobile ? (
        <CharacterOrStaffHeaderMobile
          name={name}
          image={image}
          description={
            description.length > 1000 ? description.slice(0, 1000) : description
          }
          gender={gender}
          age={age}
          bloodType={bloodType}
          dateOfBirth={dateOfBirth as { day: number; month: number }}
          homeTown={homeTown}
        />
      ) : (
        <CharacterOrStaffHeader
          name={name}
          image={image}
          description={
            description.length > 1000 ? description.slice(0, 1000) : description
          }
          gender={gender}
          age={age}
          bloodType={bloodType}
          dateOfBirth={dateOfBirth as { day: number; month: number }}
          homeTown={homeTown}
        />
      )}
    </>
  );
};

export default SecondHeader;
