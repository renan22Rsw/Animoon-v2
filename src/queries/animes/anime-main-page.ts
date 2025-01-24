import { gql } from "@apollo/client";

export const GET_TRENDING_ANIMES = gql`
  query {
    Page(page: 1) {
      media(type: ANIME, sort: TRENDING_DESC) {
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

export const GET_POPULAR_ANIMES = gql`
  query {
    Page(page: 1) {
      media(type: ANIME, sort: POPULARITY_DESC) {
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

export const GET_POPULAR_THIS_SEASON_ANIMES = gql`
  query ($seasonYear: Int) {
    Page(page: 1) {
      media(
        type: ANIME
        status: RELEASING
        seasonYear: $seasonYear
        sort: POPULARITY_DESC
      ) {
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

export const GET_UPCOMING_ANIMES = gql`
  query {
    Page(page: 1) {
      media(type: ANIME, status: NOT_YET_RELEASED, sort: POPULARITY_DESC) {
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

export const GET_TOP_10_ANIMES = gql`
  query {
    Page(page: 1) {
      media(type: ANIME, sort: SCORE_DESC) {
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
        episodes
        season
        status
        seasonYear
        type
        favourites
        format
      }
    }
  }
`;

export const GET_ANIMES_BY_NAME = gql`
  query ($search: String) {
    Page(page: 1) {
      media(type: ANIME, search: $search) {
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

export const GET_ANIMES_BY_GENRE = gql`
  query ($genre: String) {
    Page(page: 1) {
      media(type: ANIME, isAdult: false, genre: $genre, sort: POPULARITY_DESC) {
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

export const GET_ANIMES_BY_SEARCH_AND_GENRE = gql`
  query ($search: String, $genre: String) {
    Page(page: 1) {
      media(type: ANIME, isAdult: false, search: $search, genre: $genre) {
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
