import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const UserPicture = () => {
  return (
    <Avatar className="cursor-pointer">
      <AvatarImage src="https://github.com/shadcn.png" alt="user-picture" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default UserPicture;
