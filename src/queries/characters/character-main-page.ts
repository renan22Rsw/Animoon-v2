import { gql } from "@apollo/client";

export const GET_CHARACTERS_BIRTHDAYS = gql`
  query {
    Page {
      characters(isBirthday: true) {
        id
        name {
          full
        }
        image {
          large
        }
      }
    }
  }
`;

export const GET_MOST_FAVORITES_CHARACTERS = gql`
  query {
    Page {
      characters(sort: FAVOURITES_DESC) {
        id
        name {
          full
        }
        image {
          large
        }
      }
    }
  }
`;

export const GET_CHARACTERS_BY_NAME = gql`
  query ($search: String) {
    Page {
      characters(search: $search) {
        id
        name {
          full
        }
        image {
          large
        }
      }
    }
  }
`;
