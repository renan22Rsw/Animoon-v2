export interface MangaMainPage {
  id: number;
  title: {
    romaji: string;
  };
  coverImage: {
    large: string;
  };

  chapters?: number | null;
  volumes?: number | null;
  status: string;
  type: string;
  favourites: number;
  format: string;
}

export interface MangaMainPageResponse {
  Page: {
    media: MangaMainPage[];
  };
}
