import SearchContents from "../../_components/search-contents";
import SearchTitle from "../../_components/title";

const StaffContent = () => {
  return (
    <>
      <SearchTitle title="Birthdays" />
      <SearchContents />

      <SearchTitle title="Most favorite staff" />
      <SearchContents />
    </>
  );
};

export default StaffContent;
