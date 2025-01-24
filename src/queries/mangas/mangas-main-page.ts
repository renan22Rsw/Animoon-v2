import { gql } from "@apollo/client";

export const GET_TRENDING_MANGAS = gql`
  query {
    Page(page: 1) {
      media(type: MANGA, sort: TRENDING_DESC) {
        id
        title {
          romaji
        }
        coverImage {
          large
        }
      }
    }
  }
`;

export const GET_POPULAR_MANGAS = gql`
  query {
    Page(page: 1) {
      media(type: MANGA, sort: POPULARITY_DESC) {
        id
        title {
          romaji
        }
        coverImage {
          large
        }
      }
    }
  }
`;

export const GET_TOP_10_MANGAS = gql`
  query {
    Page(page: 1) {
      media(type: MANGA, sort: SCORE_DESC) {
        id
        title {
          romaji
        }
        coverImage {
          large
        }
        rankings {
          id
        }
        chapters
        volumes
        status
        type
        favourites
        format
        meanScore
      }
    }
  }
`;

export const GET_LIGHT_NOVELS = gql`
  query {
    Page(page: 1) {
      media(type: MANGA, source: LIGHT_NOVEL, sort: POPULARITY_DESC) {
        id
        title {
          romaji
        }
        coverImage {
          large
        }
      }
    }
  }
`;

export const GET_MANGAS_BY_NAME = gql`
  query ($search: String) {
    Page(page: 1) {
      media(type: MANGA, isAdult: false, search: $search) {
        id
        title {
          romaji
        }
        coverImage {
          large
        }
      }
    }
  }
`;

export const GET_MANGAS_BY_GENRE = gql`
  query ($genre: String) {
    Page(page: 1) {
      media(type: MANGA, isAdult: false, genre: $genre, sort: POPULARITY_DESC) {
        id
        title {
          romaji
        }
        coverImage {
          large
        }
      }
    }
  }
`;

export const GET_MANGAS_BY_SEARCH_AND_GENRE = gql`
  query ($search: String, $genre: String) {
    Page(page: 1) {
      media(type: MANGA, isAdult: false, search: $search, genre: $genre) {
        id
        title {
          romaji
        }
        coverImage {
          large
        }
      }
    }
  }
`;
