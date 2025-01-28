import Image from "next/image";
import Link from "next/link";

interface StaffContentProps {
  id: number;
  name: string;
  image: string;
  occupation: string;
}

const StaffContent = ({ id, name, image, occupation }: StaffContentProps) => {
  return (
    <div className="my-1 flex justify-between rounded-md bg-[#EBF0F4] dark:bg-primary-foreground xl:w-[350px] 2xl:w-[400px]">
      <div className="flex">
        <Link href={`/staff/${id}`}>
          <Image
            src={image as string}
            alt="banner-image"
            width={60}
            height={60}
            style={{ width: "auto", height: "auto" }}
          />
        </Link>
        <div className="flex flex-col justify-between px-1 py-2">
          <h4 className="mx-1 text-xs font-semibold">{name}</h4>
          <p className="mx-1 text-xs">{occupation}</p>
        </div>
      </div>
    </div>
  );
};

export default StaffContent;
