import CharacterContent from "@/components/CharacterContent/character-content";
import Container from "@/components/Container/Container";
import GridContainer from "@/components/GridContainer/grid-container";
import Header from "@/components/Header/header";
import InfoColumns from "@/components/InfoColumns/info-columns";
import SubTitle from "@/components/SubTitle/sub-title";

interface AnimePageIdProps {
  params: {
    id: string;
  };
}

const AnimePageId = ({ params }: AnimePageIdProps) => {
  return (
    <>
      <Header />
      <div className="flex">
        <InfoColumns />
        <Container>
          <SubTitle title="Characters" />
          <GridContainer>
            <CharacterContent />
            <CharacterContent />
            <CharacterContent />
            <CharacterContent />
            <CharacterContent />
            <CharacterContent />
          </GridContainer>
        </Container>
      </div>
    </>
  );
};

export default AnimePageId;
