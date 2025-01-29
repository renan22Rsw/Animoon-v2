import { gql } from "@apollo/client";

export const GET_CHARACTER_BY_ID = gql`
  query ($id: Int!) {
    Page {
      characters(id: $id) {
        id
        name {
          userPreferred
          native
          alternative
        }

        dateOfBirth {
          month
          day
        }
        age
        gender
        bloodType
        description

        image {
          large
        }
      }
    }
  }
`;
