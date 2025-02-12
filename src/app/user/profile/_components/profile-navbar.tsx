import Link from "next/link";

const ProfileNavbar = () => {
  const navItems = [
    {
      id: 1,
      item: "Overview",
      link: "/user/profile",
    },

    {
      id: 2,
      item: "AnimeList",
      link: "/user/profile/anime-list",
    },

    {
      id: 3,
      item: "MangaList",
      link: "/user/profile/manga-list",
    },

    {
      id: 4,
      item: "Favorites",
      link: "/user/profile/favorites",
    },
  ];

  return (
    <div>
      <ul className="flex h-[70px] items-center justify-center space-x-2 bg-[#EBF0F4] dark:bg-primary-foreground sm:space-x-4 md:space-x-8">
        {navItems.map((item) => (
          <Link key={item.id} href={item.link}>
            <li className="text-xs font-bold sm:text-base">{item.item}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ProfileNavbar;
