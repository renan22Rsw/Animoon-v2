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
import Link from "next/link";

const SpeedDial = () => {
  return (
    <div className="relative">
      <DropdownMenu>
        <div className="fixed bottom-5 right-0 m-4 lg:hidden">
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
            <Link href={"/"}>Animoon</Link>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <PlayIcon />
              <Button variant={"link"}>
                <Link href={"/search/anime"}>Animes</Link>
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <BookOpenIcon />
              <Button variant={"link"}>
                <Link href={"/search/manga"}>Mangas</Link>
              </Button>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <UsersRoundIcon />
              <Button variant={"link"}>
                <Link href={"/search/character"}>Characters</Link>
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <UserRoundIcon />
              <Button variant={"link"}>
                <Link href={"/search/staff"}>Staffs</Link>
              </Button>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SpeedDial;
