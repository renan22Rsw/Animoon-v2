import Image from "next/image";
import ProfileNavbar from "./profile-navbar";
import userProfileImage from "@/../public/no-picture.png";

interface UserProfileHeaderProps {
  img: string;
  name: string;
}

const UserProfileHeader = ({ img, name }: UserProfileHeaderProps) => {
  return (
    <main className="w-full">
      <div className="h-[300px] bg-[#eaeaf0] dark:bg-[#0e0e14]">
        <div className="mx-auto flex h-full max-w-[1200px] items-center space-x-4 px-4">
          <Image
            src={img ? (img as string) : userProfileImage}
            height={150}
            width={150}
            alt="user-profile-image"
            className="rounded-md"
          />

          <h2 className="text-xl font-bold">{name}</h2>
        </div>
      </div>
      <ProfileNavbar />
    </main>
  );
};

export default UserProfileHeader;
