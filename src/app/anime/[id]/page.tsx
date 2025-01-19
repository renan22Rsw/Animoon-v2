import Header from "@/components/Header/header";

interface AnimePageIdProps {
  params: {
    id: string;
  };
}

const AnimePageId = ({ params }: AnimePageIdProps) => {
  return (
    <>
      <Header />
    </>
  );
};

export default AnimePageId;
