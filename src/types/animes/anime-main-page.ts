export interface AnimeMainPage {
  id: number;
  title: {
    romaji: string;
  };
  coverImage: {
    large: string;
  };

  episodes: number;
  season: string;
  status: string;
  seasonYear: number;
  type: string;
  favourites: number;
  format: string;
}

export interface AnimeMainPageResponse {
  Page: {
    media: AnimeMainPage[];
  };
}
