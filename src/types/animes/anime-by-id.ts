export interface getAnimeByIdResponse {
  Page: {
    media: getAnimeById[];
  };
}

export interface getAnimeById {
  title: {
    romaji: string;
  };
  bannerImage: string;
  description: string;
  format: string;
  duration: number;
  episodes: number;
  status: string;
  season: string;
  seasonYear: number;
  averageScore: number;
  meanScore: number;
  popularity: number;
  favourites: number;

  source: string;
  genres: string[];

  coverImage: {
    extraLarge: string;
  };

  characters: {
    edges: AnimeCharacter[];
  };

  staff: {
    nodes: AnimeStaff[];
  };

  trailer: {
    id: string;
  };

  recommendations: {
    nodes: AnimeRecommendations[];
  };
}

interface AnimeCharacter {
  role: string;
  voiceActors: AnimeVoices[];

  node: {
    id: number;
    name: {
      userPreferred: string;
    };
    image: {
      medium: string;
    };
  };
}

interface AnimeStaff {
  id: number;
  name: {
    userPreferred: string;
  };
  image: {
    medium: string;
  };
  primaryOccupations: string;
}

interface AnimeVoices {
  id: number;
  name: {
    userPreferred: string;
  };
  image: {
    medium: string;
  };
  languageV2: string;
}

interface AnimeRecommendations {
  mediaRecommendation: {
    id: number;
    title: {
      romaji: string;
    };
    coverImage: {
      large: string;
    };
  };
}
