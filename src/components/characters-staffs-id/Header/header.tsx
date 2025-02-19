"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { CharacterOrStaffHeader } from "./character-staff-header";
import { CharacterOrStaffHeaderMobile } from "./character-staff-header-mobile";

interface HeaderProps {
  id: string;
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

const Header = ({
  id,
  name,
  image,
  dateOfBirth,
  description,
  gender,
  age,
  bloodType,
  homeTown,
}: HeaderProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {isMobile ? (
        <CharacterOrStaffHeaderMobile
          id={id}
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
          id={id}
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

export default Header;
