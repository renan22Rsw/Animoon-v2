import SearchTitle from "@/app/search/_components/title";
import SearchContents from "../_components/container";

const SearchAnimePage = () => {
  return (
    <>
      <SearchTitle title="Trending Animes" />
      <SearchContents />

      <SearchTitle title="Popular this season" />
      <SearchContents />

      <SearchTitle title="Upcoming next season" />
      <SearchContents />

      <SearchTitle title="All time popular" />
      <SearchContents />

      <SearchTitle title="Top 100 anime" />
      <SearchContents />
    </>
  );
};

export default SearchAnimePage;
