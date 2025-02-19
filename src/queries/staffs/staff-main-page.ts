import { gql } from "@apollo/client";

export const GET_STAFFS_BIRTHDAYS = gql`
  query {
    Page {
      staff(isBirthday: true) {
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

export const GET_MOST_FAVORITES_STAFFS = gql`
  query {
    Page {
      staff(sort: FAVOURITES_DESC) {
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

export const GET_STAFFS_BY_NAME = gql`
  query ($search: String) {
    Page {
      staff(search: $search) {
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
