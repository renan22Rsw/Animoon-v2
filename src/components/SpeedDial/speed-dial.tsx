import {
  MenuIcon,
  PlayIcon,
  BookOpenIcon,
  UserRoundIcon,
  UsersRoundIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import AnimoonIcon from "@/../public/icon.png";
import Image from "next/image";

const SpeedDial = () => {
  return (
    <div className="relative">
      <DropdownMenu>
        <div className="absolute bottom-20 right-0 m-4 lg:hidden">
          <DropdownMenuTrigger asChild>
            <Button variant={"secondary"}>
              <MenuIcon width={36} height={36} />
            </Button>
          </DropdownMenuTrigger>
        </div>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel className="flex items-center">
            <Image
              src={AnimoonIcon}
              width={20}
              height={20}
              alt="Animoon-icon"
              className="mr-2"
            />
            Animoon
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <PlayIcon />
              <Button variant={"link"}>Animes</Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <BookOpenIcon />
              <Button variant={"link"}>Mangas</Button>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <UsersRoundIcon />
              <Button variant={"link"}>Characters</Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <UserRoundIcon />
              <Button variant={"link"}>Staffs</Button>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SpeedDial;
