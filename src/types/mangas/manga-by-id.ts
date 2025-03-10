export interface getMangaByIdResponse {
  Page: {
    media: getMangaById[];
  };
}

export interface getMangaById {
  title: {
    romaji: string;
  };
  coverImage: {
    extraLarge: string;
  };
  description: string;
  bannerImage: string;

  format: string;
  status: string;
  averageScore: number;
  meanScore: number;
  popularity: number;
  favourites: number;
  source: string;
  genres: string[];

  characters: {
    edges: MangaCharacters[];
  };

  staff: {
    nodes: MangaStaff[];
  };

  trailer: {
    id: string;
  };
  recommendations: {
    nodes: MangaRecommendations[];
  };
}

interface MangaCharacters {
  role: string;

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

interface MangaStaff {
  id: number;
  name: {
    userPreferred: string;
  };
  image: {
    medium: string;
  };
  primaryOccupations: string;
}

interface MangaRecommendations {
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
