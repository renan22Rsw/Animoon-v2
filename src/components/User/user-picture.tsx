import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import userProfileImage from "@/../public/no-picture.png";
import Image from "next/image";

export const UserPicture = ({ icon }: { icon?: string }) => {
  return (
    <Avatar className="cursor-pointer">
      <AvatarImage
        src={icon ? icon : (userProfileImage as unknown as string)}
        alt="user-picture"
      />
      <AvatarFallback>
        <Image
          src={icon ? icon : (userProfileImage as unknown as string)}
          alt="user-picture"
          width={50}
          height={50}
        />
      </AvatarFallback>
    </Avatar>
  );
};

export default UserPicture;
