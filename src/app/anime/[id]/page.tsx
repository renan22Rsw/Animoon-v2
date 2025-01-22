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

interface AnimePageIdProps {
  params: {
    id: string;
  };
}

const AnimePageId = ({ params }: AnimePageIdProps) => {
  return (
    <>
      <Header />

      <Container>
        <InfoColumns />

        <SubContainer>
          <SubTitle title="Characters" />
          <GridContainer>
            <CharacterContent />
            <CharacterContent />
            <CharacterContent />
            <CharacterContent />
            <CharacterContent />
            <CharacterContent />
          </GridContainer>
          <SubTitle title="Staffs" />
          <GridContainer>
            <StaffContent />
            <StaffContent />
            <StaffContent />
            <StaffContent />
          </GridContainer>
          <SubTitle title="Trailer" />
          <Trailer />
          <Recomendations />
        </SubContainer>
      </Container>
    </>
  );
};

export default AnimePageId;
