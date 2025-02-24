"use client";

import { deleteCharactersFromList } from "@/actions/animoon/staffs/delete-staffs-from-list";
import { toast } from "@/hooks/use-toast";
import { XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { startTransition } from "react";

interface Staffs {
  id: string;
  title: string;
  image: string;
  staffId: string;
}

interface FavoritesStaffsContentProps {
  datas: Staffs[];
}

const handleDeleteStaffs = async (id: string) => {
  startTransition(() => {
    deleteCharactersFromList(id)
      .then(() => {
        toast({
          title: "Staff deleted from your list",
          description: "Congrats! You have deleted this staff from your list",
        });
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

const FavoritesStaffContent = ({ datas }: FavoritesStaffsContentProps) => {
  return (
    <main className="my-4 px-4">
      <h4 className="py-4 font-bold">Staffs</h4>
      {datas.length > 0 && (
        <section className="mx-auto max-w-[1200px] rounded-md p-4 dark:bg-primary-foreground">
          <div className="grid grid-cols-3 items-center sm:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10">
            {datas.map(({ id, title, image, staffId }) => (
              <div className="flex flex-col items-center" key={id}>
                <div className="relative">
                  <Link href={`/staff/${staffId}`}>
                    <Image
                      src={image as string}
                      width={80}
                      height={80}
                      alt="favorite-image"
                      className="cursor-pointer rounded-md"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </Link>

                  <XIcon
                    className="absolute right-0 top-0 cursor-pointer bg-[#E25A72]"
                    size={20}
                    onClick={() => handleDeleteStaffs(id)}
                  />
                </div>
                <h5 className="py-1 text-center text-sm">{title}</h5>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default FavoritesStaffContent;
