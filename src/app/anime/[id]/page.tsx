import CharacterContent from "@/components/CharacterContent/character-content";
import GridContainer from "@/components/GridContainer/grid-container";
import Header from "@/components/Header/header";
import InfoColumns from "@/components/InfoColumns/info-columns";
import Recomendations from "@/components/Recomendations/recomendations";
import StaffContent from "@/components/StaffContent/staff-content";
import SubTitle from "@/components/SubTitle/sub-title";
import Trailer from "@/components/Trailer/trailer";
import SubContainer from "@/components/SubContainer/sub-container";
import Container from "@/components/Container/container";

import { getClient } from "@/lib/ApolloClient";
import { getAnimeByIdResponse } from "@/types/animes/anime-by-id";
import { GET_ANIME_BY_ID } from "@/queries/animes/anime-by-id";

interface AnimePageIdProps {
  params: {
    id: number;
  };
}

const AnimePageId = async ({ params }: AnimePageIdProps) => {
  const { id } = await params;

  try {
    const response = await getClient().query<getAnimeByIdResponse>({
      query: GET_ANIME_BY_ID,
      variables: { id },
    });

    const data = response.data?.Page.media;

    if (!data || data.length === 0) {
      return <div>Anime not found</div>;
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
      staff,
      trailer,
      recommendations,
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
            <SubTitle title="Characters" />
            <GridContainer>
              {characters?.edges.slice(0, 6).map((character) => (
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
            <SubTitle title="Staffs" />
            <GridContainer>
              {staff?.nodes
                .slice(0, 4)
                .map((staff, index) => (
                  <StaffContent
                    key={index}
                    id={staff.id}
                    name={staff.name.userPreferred}
                    image={staff.image.medium}
                    occupation={staff.primaryOccupations[0]}
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
              <Recomendations
                recomendation={[
                  ...recommendations?.nodes.map((recomendation) => ({
                    id: recomendation.mediaRecommendation.id,
                    title: recomendation.mediaRecommendation.title.romaji,
                    image: recomendation.mediaRecommendation.coverImage.large,
                  })),
                ]}
              />
            )}
          </SubContainer>
        </Container>
      </>
    );
  } catch (error) {
    console.error("Failed to fetch anime data:", error);
    return <div>Error loading anime details</div>;
  }
};

export default AnimePageId;
