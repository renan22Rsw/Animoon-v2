import SecondHeader from "@/components/Header/second-header";
import { getClient } from "@/lib/ApolloClient";
import { GET_CHARACTER_BY_ID } from "@/queries/characters/character-by-id";
import { CharacterByIdResponse } from "@/types/characters/character-by-id";

interface CharacterProps {
  params: {
    id: number;
  };
}

const Character = async ({ params }: CharacterProps) => {
  const { id } = await params;

  try {
    const response = await getClient().query<CharacterByIdResponse>({
      query: GET_CHARACTER_BY_ID,
      variables: { id },
    });

    if (
      response.data.Page.characters === null ||
      response.data.Page.characters.length === 0
    ) {
      return <div>Character not found</div>;
    }

    const { name, image, dateOfBirth, description, gender, age, bloodType } =
      response.data.Page.characters[0];

    return (
      <>
        <SecondHeader
          name={name}
          image={image.large}
          description={description.replace(/[^a-zA-Z ]/g, "")}
          gender={gender}
          age={age}
          bloodType={bloodType}
          dateOfBirth={dateOfBirth}
        />
      </>
    );
  } catch (error) {
    console.log("Failed to fetch character data", error);
    return <div>Error loading character details</div>;
  }
};

export default Character;
