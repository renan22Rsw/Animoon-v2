import CharacterContent from "@/components/animes-mangas-id/CharacterContent/character-content";
import Container from "@/components/animes-mangas-id/Container/container";
import GridContainer from "@/components/animes-mangas-id/GridContainer/grid-container";
import Header from "@/components/animes-mangas-id/Header/header";
import InfoColumns from "@/components/animes-mangas-id/InfoColumns/info-columns";
import SubContainer from "@/components/animes-mangas-id/SubContainer/sub-container";
import { getClient } from "@/lib/ApolloClient";
import { GET_ANIME_BY_ID } from "@/queries/animes/anime-by-id";
import { getAnimeByIdResponse } from "@/types/animes/anime-by-id";

interface CharactersFromAnimeByidPageProps {
  params: {
    id: number;
  };
}

const CharactersFromAnimeByidPage = async ({
  params,
}: CharactersFromAnimeByidPageProps) => {
  const { id } = await params;

  try {
    const response = await getClient().query<getAnimeByIdResponse>({
      query: GET_ANIME_BY_ID,
      variables: { id },
    });

    const data = response.data?.Page.media;

    if (!data || data.length === 0) {
      return <div>Characters not found</div>;
    }

    const {
      title,
      bannerImage,
      coverImage,
      description,
      status,
      source,
      format,
      genres,
      favourites,
      averageScore,
      meanScore,
      season,
      seasonYear,
      episodes,
      duration,
      characters,
    } = data[0];

    return (
      <>
        <Header
          title={title.romaji}
          bannerImage={bannerImage}
          headerImage={coverImage.extraLarge}
          description={
            description.length > 600
              ? description.replace(/<[^>]+>/g, "").slice(0, 600) + "..."
              : description.replace(/<[^>]+>/g, "")
          }
        />
        <Container>
          <InfoColumns
            format={format}
            episodes={episodes}
            favourites={favourites}
            duration={duration}
            status={status}
            averageScore={averageScore}
            meanScore={meanScore}
            genres={genres}
            season={season}
            seasonYear={seasonYear}
            source={source}
          />
          <SubContainer>
            <GridContainer>
              {characters?.edges.map((character) => (
                <CharacterContent
                  key={character.node.id}
                  id={character.node.id}
                  name={character.node.name.userPreferred}
                  image={character.node.image.medium}
                  role={character.role}
                  voiceActors={character.voiceActors.map((voice) => ({
                    id: voice.id,
                    name: {
                      userPreferred: voice.name.userPreferred,
                    },
                    image: {
                      medium: voice.image.medium,
                    },
                    languageV2: voice.languageV2,
                  }))}
                />
              ))}
            </GridContainer>
          </SubContainer>
        </Container>
      </>
    );
  } catch (error) {
    console.error("Failed to fetch characters data:", error);
    return <div>Error loading characters details</div>;
  }
};

export default CharactersFromAnimeByidPage;
