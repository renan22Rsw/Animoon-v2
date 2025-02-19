import Image from "next/image";
import AniMoonIcon from "@/../../public/icon.png";
import { navItems } from "./nav-items";

import UserIcon from "./user-icon";
import Link from "next/link";

import LoginButton from "../Authentication/login-icon";
import { auth } from "@/services/auth";
const NavBar = async () => {
  const session = await auth();

  return (
    <nav className="my-6 flex w-full items-center justify-between px-6 lg:justify-end">
      <div className="flex items-center space-x-1">
        <Link href={"/"}>
          <Image src={AniMoonIcon} alt="Animoon-Icon" width={50} height={50} />
        </Link>
      </div>
      <ul className="hidden w-full items-center justify-center space-x-6 lg:flex">
        {navItems.map((item) => (
          <li className="cursor-pointer font-semibold" key={item.id}>
            <Link href={item.link}>{item.item}</Link>
          </li>
        ))}
      </ul>
      {session?.user ? <UserIcon /> : <LoginButton />}
    </nav>
  );
};

export default NavBar;
