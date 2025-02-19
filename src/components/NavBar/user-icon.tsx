import { LogOut, Settings, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { SunIcon, MoonIcon, ShadowIcon } from "@radix-ui/react-icons";
import UserPicture from "../User/user-picture";
import { auth, signOut } from "@/services/auth";
import Link from "next/link";
import ButttonTheme from "../theme/button-theme";

const UserIcon = async () => {
  const session = await auth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <UserPicture icon={session?.user?.image as string} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User />
            <Link href={"/user/profile"}>
              {" "}
              <Button variant={"link"}>Profile</Button>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings />
            <Link href={"/user/settings"}>
              {" "}
              <Button variant={"link"}>Settings</Button>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <ShadowIcon />
              <Button variant={"ghost"}>Theme</Button>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <SunIcon />
                  <ButttonTheme theme="light">Light</ButttonTheme>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MoonIcon />
                  <ButttonTheme theme="dark">Dark</ButttonTheme>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <LogOut />
          <Button
            variant={"link"}
            onClick={async () => {
              "use server";
              await signOut();
            }}
          >
            Log out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserIcon;
