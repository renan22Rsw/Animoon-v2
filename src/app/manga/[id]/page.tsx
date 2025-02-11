import CharacterContent from "@/components/CharacterContent/character-content";
import Container from "@/components/Container/container";
import GridContainer from "@/components/GridContainer/grid-container";
import Header from "@/components/Header/header";
import InfoColumns from "@/components/InfoColumns/info-columns";
import Recomendations from "@/components/Recomendations/recomendations";
import StaffContent from "@/components/StaffContent/staff-content";
import SubContainer from "@/components/SubContainer/sub-container";
import SubTitle from "@/components/SubTitle/sub-title";
import Trailer from "@/components/Trailer/trailer";
import { getClient } from "@/lib/ApolloClient";
import { GET_MANGA_BY_ID } from "@/queries/mangas/manga-by-id";
import { getMangaByIdResponse } from "@/types/mangas/manga-by-id";
import Link from "next/link";

interface MangasProps {
  params: {
    id: string;
  };
}

const Manga = async ({ params }: MangasProps) => {
  const { id } = await params;

  try {
    const response = await getClient().query<getMangaByIdResponse>({
      query: GET_MANGA_BY_ID,
      variables: { id },
    });

    const data = response.data?.Page.media;

    if (!data || data.length === 0) {
      return <div>Manga not found</div>;
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
      staff,
      trailer,
      recommendations,
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
            <Link href={`/manga/${id}/characters`}>
              {" "}
              <SubTitle title="Characters" />
            </Link>
            <GridContainer>
              {characters.edges.slice(0, 6).map((character) => (
                <CharacterContent
                  key={character.node.id}
                  id={character.node.id}
                  name={character.node.name.userPreferred}
                  image={character.node.image.medium}
                  role={character.role}
                />
              ))}
            </GridContainer>

            <Link href={`/manga/${id}/staffs`}>
              {" "}
              <SubTitle title="Staffs" />
            </Link>
            <GridContainer>
              {staff.nodes.slice(0, 4).map((staff) => (
                <StaffContent
                  key={staff.id}
                  id={staff.id}
                  name={staff.name.userPreferred}
                  image={staff.image.medium}
                  occupation={staff.primaryOccupations}
                />
              ))}
            </GridContainer>

            {trailer && (
              <>
                <SubTitle title="Trailer" />
                <Trailer id={trailer?.id} />
              </>
            )}

            {recommendations && (
              <>
                {recommendations && (
                  <Recomendations
                    recomendation={[
                      ...recommendations?.nodes.map((recomendation) => ({
                        id: recomendation.mediaRecommendation.id,
                        title: recomendation.mediaRecommendation.title.romaji,
                        image:
                          recomendation.mediaRecommendation.coverImage.large,
                      })),
                    ]}
                  />
                )}
              </>
            )}
          </SubContainer>
        </Container>
      </>
    );
  } catch (error) {
    console.log("Failed to fetch manga data", error);
    return <div>Error loading manga details</div>;
  }
};
export default Manga;
