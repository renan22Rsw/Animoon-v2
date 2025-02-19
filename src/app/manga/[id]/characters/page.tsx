import CharacterContent from "@/components/animes-mangas-id/CharacterContent/character-content";
import Container from "@/components/animes-mangas-id/Container/container";
import GridContainer from "@/components/animes-mangas-id/GridContainer/grid-container";
import Header from "@/components/animes-mangas-id/Header/header";
import InfoColumns from "@/components/animes-mangas-id/InfoColumns/info-columns";
import SubContainer from "@/components/animes-mangas-id/SubContainer/sub-container";
import { getClient } from "@/lib/ApolloClient";
import { GET_MANGA_BY_ID } from "@/queries/mangas/manga-by-id";
import { getMangaByIdResponse } from "@/types/mangas/manga-by-id";

interface CharactersFromMangaByIdPageProps {
  params: {
    id: string;
  };
}

const CharactersFromMangaByIdPage = async ({
  params,
}: CharactersFromMangaByIdPageProps) => {
  const { id } = await params;

  try {
    const response = await getClient().query<getMangaByIdResponse>({
      query: GET_MANGA_BY_ID,
      variables: { id },
    });

    const data = response.data?.Page.media;

    if (!data || data.length === 0) {
      return <div>Characters not found</div>;
    }

    const {
      title,
      coverImage,
      description,
      bannerImage,
      format,
      status,
      averageScore,
      meanScore,
      source,
      favourites,
      genres,
      characters,
    } = data[0];

    return (
      <>
        <Header
          id={id}
          title={title.romaji}
          headerImage={coverImage.extraLarge}
          bannerImage={bannerImage}
          description={
            description.length > 600
              ? description.replace(/<[^>]+>/g, "").slice(0, 600) + "..."
              : description.replace(/<[^>]+>/g, "")
          }
        />
        <Container>
          <InfoColumns
            format={format}
            favourites={favourites}
            status={status}
            averageScore={averageScore}
            meanScore={meanScore}
            genres={genres}
            source={source}
          />
          <SubContainer>
            <GridContainer>
              {characters.edges.map((character) => (
                <CharacterContent
                  key={character.node.id}
                  id={character.node.id}
                  name={character.node.name.userPreferred}
                  image={character.node.image.medium}
                  role={character.role}
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

export default CharactersFromMangaByIdPage;
