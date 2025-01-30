import Container from "@/components/Container/container";
import GridContainer from "@/components/GridContainer/grid-container";
import Header from "@/components/Header/header";
import InfoColumns from "@/components/InfoColumns/info-columns";
import StaffContent from "@/components/StaffContent/staff-content";
import SubContainer from "@/components/SubContainer/sub-container";
import { getClient } from "@/lib/ApolloClient";
import { GET_ANIME_BY_ID } from "@/queries/animes/anime-by-id";
import { getAnimeByIdResponse } from "@/types/animes/anime-by-id";

interface CharactersFromAnimeByidPageProps {
  params: {
    id: number;
  };
}

const StaffsFromAnimeByidPage = async ({
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
      return <div>Staffs not found</div>;
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
      staff,
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
          </SubContainer>
        </Container>
      </>
    );
  } catch (error) {
    console.error("Failed to fetch staffs data:", error);
    return <div>Error loading staffs details</div>;
  }
};

export default StaffsFromAnimeByidPage;
