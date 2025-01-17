import SearchContents from "../../_components/search-contents";
import SearchTitle from "../../_components/title";

const CharacterContent = () => {
  return (
    <>
      <SearchTitle title="Birthdays" />
      <SearchContents />

      <SearchTitle title="Most favorite characters" />
      <SearchContents />
    </>
  );
};

export default CharacterContent;
