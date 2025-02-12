import Image from "next/image";
import Link from "next/link";

const staffs = [
  {
    id: 1,
    title: "Masashi Kishimoto",
    image:
      "https://s4.anilist.co/file/anilistcdn/staff/large/b129314-8uG3e9sOdX1q.png",
  },
  {
    id: 2,
    title: "Eiichiro Oda",
    image:
      "https://s4.anilist.co/file/anilistcdn/staff/large/b129314-8uG3e9sOdX1q.png",
  },
  {
    id: 3,
    title: "Takehiko Inoue",
    image:
      "https://s4.anilist.co/file/anilistcdn/staff/large/b129314-8uG3e9sOdX1q.png",
  },
  {
    id: 4,
    title: "Tite Kubo",
    image:
      "https://s4.anilist.co/file/anilistcdn/staff/large/b129314-8uG3e9sOdX1q.png",
  },
  {
    id: 5,
    title: "Hirohiko Araki",
    image:
      "https://s4.anilist.co/file/anilistcdn/staff/large/b129314-8uG3e9sOdX1q.png",
  },
];

const FavoritesStaffContent = () => {
  return (
    <main className="my-4 px-4">
      <h4 className="py-4 font-bold">Staffs</h4>
      <section className="mx-auto max-w-[1200px] rounded-md p-4 dark:bg-primary-foreground">
        <div className="grid grid-cols-3 items-center sm:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10">
          {staffs.map((staff) => (
            <div className="flex flex-col items-center" key={staff.id}>
              <Link href={`/character/${staff.id}`}>
                <Image
                  src={
                    "https://s4.anilist.co/file/anilistcdn/character/large/b321562-M0uFhrsiodTr.png"
                  }
                  width={80}
                  height={80}
                  alt="favorite-image"
                  className="cursor-pointer rounded-md"
                />
              </Link>
              <h5 className="py-1 text-center">Mari</h5>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default FavoritesStaffContent;
