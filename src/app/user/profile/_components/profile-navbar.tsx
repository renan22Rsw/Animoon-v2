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
      item: "CharacterList",
      link: "/user/profile/character-list",
    },

    {
      id: 5,
      item: "StaffList",
      link: "/user/profile/staff-list",
    },
  ];

  return (
    <div>
      <ul className="flex h-[70px] items-center justify-center space-x-8 bg-[#EBF0F4] dark:bg-primary-foreground">
        {navItems.map((item) => (
          <Link key={item.id} href={item.link}>
            <li className="font-bold">{item.item}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ProfileNavbar;
