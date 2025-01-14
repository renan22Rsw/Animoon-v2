import AnimoonIcon from "@/../public/icon.png";
import Image from "next/image";
import { social } from "./social";
import Link from "next/link";
import { ReactNode } from "react";

const Footer = () => {
  return (
    <footer className="bg-[#040506] p-4 text-primary-foreground">
      <div className="flex items-center space-x-2">
        <Image src={AnimoonIcon} alt="Animoon-Icon" width={32} height={32} />
        <h3 className="text-xl font-semibold">Animoon</h3>
      </div>

      <span className="flex items-center space-x-4 py-4">
        {social.map((item) => (
          <Link key={item.id} href={item.link}>
            {item.icon as ReactNode}
          </Link>
        ))}
      </span>
    </footer>
  );
};

export default Footer;
