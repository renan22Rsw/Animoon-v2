import Image from "next/image";

import { Button } from "../../ui/button";
import { addCharactersToList } from "@/actions/animoon/characters/add-characters-to-list";
import { toast } from "@/hooks/use-toast";
import { useTransition } from "react";
import { addStaffToList } from "@/actions/animoon/staffs/add-staff-to-list";
import { usePathname } from "next/navigation";
import { CharacterOrStaffHeaderProps } from "./character-staff-header";

export const CharacterOrStaffHeaderMobile = ({
  id,
  name,
  image,
  dateOfBirth,
  description,
  gender,
  age,
  bloodType,
  homeTown,
}: CharacterOrStaffHeaderProps) => {
  const [isPending, startTransition] = useTransition();
  const pathName = usePathname()?.split("/")[1];

  const handleAddCharacterToFavorites = () => {
    startTransition(() => {
      addCharactersToList(name.userPreferred, image, id)
        .then((res) => {
          toast({
            title: res.success,
            description: "Congrats! You have added this character to your list",
          });
          if (res.error) {
            toast({
              variant: "destructive",
              title: res.error,
              description: "Please try again",
            });
          }
        })

        .catch((res) => {
          toast({
            variant: "destructive",
            title: res.error,
            description: "Please try again",
          });
        });
    });
  };

  const handleAddStaffToFavorites = () => {
    startTransition(() => {
      addStaffToList(name.userPreferred, image, id)
        .then((res) => {
          toast({
            title: res.success,
            description: "Congrats! You have added this staff to your list",
          });
          if (res.error) {
            toast({
              variant: "destructive",
              title: res.error,
              description: "Please try again",
            });
          }
        })

        .catch((res) => {
          toast({
            variant: "destructive",
            title: res.error,
            description: "Please try again",
          });
        });
    });
  };

  return (
    <header className="sm: w-full bg-[#EBF0F4] dark:bg-primary-foreground sm:h-[250px]">
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-2xl font-bold">
          {name.userPreferred ? name.userPreferred : name.alternative}
        </h2>
        <p className="max-w-[500px] text-center">
          {name.alternative.length === 0 ? (
            <span>{name.native}</span>
          ) : (
            name.alternative.map((alternative, index) => (
              <span key={index}>{alternative}, </span>
            ))
          )}
        </p>
        <Image
          src={image}
          width={200}
          height={200}
          alt="character-or-staff-image"
          className="rounded-md"
        />

        <Button
          variant={"outline"}
          onClick={
            pathName === "character"
              ? handleAddCharacterToFavorites
              : handleAddStaffToFavorites
          }
          disabled={isPending}
        >
          Add To Favorites
        </Button>
      </div>
      <section className="px-4">
        {dateOfBirth.day && dateOfBirth.month && (
          <h4 className="font-semibold">
            Birthday: {dateOfBirth.month + "/" + dateOfBirth.day}
          </h4>
        )}
        {age && (
          <h4 className="font-semibold">
            Age: <span className="font-thin">{age}</span>
          </h4>
        )}
        {gender && (
          <h4 className="font-semibold">
            Gender: <span className="font-thin">{gender}</span>
          </h4>
        )}
        {bloodType && (
          <h4 className="font-semibold">
            Blood Type: <span className="font-thin">{bloodType}</span>
          </h4>
        )}

        {homeTown && (
          <h4 className="font-semibold">
            Home Town:<span className="font-thin"> {homeTown}</span>
          </h4>
        )}
      </section>

      <section className="p-4">
        <p className="text-xs sm:text-lg">{description}</p>
      </section>
    </header>
  );
};
