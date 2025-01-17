interface NavItems {
  id: number;
  item: string;
  link: string;
}

export const navItems: NavItems[] = [
  {
    id: 1,
    item: "Animes",
    link: "/search/anime",
  },

  {
    id: 2,
    item: "Mangas",
    link: "/search/manga",
  },

  {
    id: 3,
    item: "Characters",
    link: "/search/character",
  },

  {
    id: 4,
    item: "Staffs",
    link: "/search/staff",
  },
];
