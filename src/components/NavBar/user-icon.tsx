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
import { PersonIcon } from "@radix-ui/react-icons";

import { SunIcon, MoonIcon, ShadowIcon } from "@radix-ui/react-icons";

const UserIcon = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <PersonIcon width={32} height={32} cursor={"pointer"} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User />
            <Button variant={"link"}>Profile</Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings />
            <Button variant={"link"}>Settings</Button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <ShadowIcon />
              <Button variant={"secondary"}>Theme</Button>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <SunIcon />
                  <Button variant={"secondary"}>Light</Button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MoonIcon />
                  <Button variant={"secondary"}>Dark</Button>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <LogOut />
          <Button variant={"link"}>Log out</Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserIcon;
