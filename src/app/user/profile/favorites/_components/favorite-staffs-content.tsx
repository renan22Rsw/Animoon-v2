"use client";

import { XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Staffs {
  id: string;
  title: string;
  image: string;
  staffId: string;
}

interface FavoritesStaffsContentProps {
  datas: Staffs[];
}

const FavoritesStaffContent = ({ datas }: FavoritesStaffsContentProps) => {
  return (
    <main className="my-4 px-4">
      <h4 className="py-4 font-bold">Staffs</h4>
      <section className="mx-auto max-w-[1200px] rounded-md p-4 dark:bg-primary-foreground">
        <div className="grid grid-cols-3 items-center sm:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10">
          {datas.map((staff) => (
            <div className="flex flex-col items-center" key={staff.id}>
              <div className="relative">
                <Link href={`/staff/${staff.staffId}`}>
                  <Image
                    src={staff.image as string}
                    width={80}
                    height={80}
                    alt="favorite-image"
                    className="cursor-pointer rounded-md"
                  />
                </Link>

                <XIcon
                  className="absolute right-0 top-0 cursor-pointer bg-[#E25A72]"
                  size={20}
                />
              </div>
              <h5 className="py-1 text-center text-sm">{staff.title}</h5>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default FavoritesStaffContent;
