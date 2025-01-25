export interface CharacterMainPage {
  id: number;
  name?: {
    full: string;
  };
  image?: {
    large: string;
  };
}

export interface CharacterMainPageResponse {
  Page: {
    characters: CharacterMainPage[];
  };
}
