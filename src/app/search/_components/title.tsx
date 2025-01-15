interface SearchTitleProps {
  title: string;
}

const SearchTitle = ({ title }: SearchTitleProps) => {
  return (
    <span className="flex items-center justify-between">
      <h2 className="mx-4 text-lg font-bold uppercase text-foreground">
        {title}
      </h2>
      <h4 className="mr-4 cursor-pointer text-sm font-semibold text-foreground">
        View All
      </h4>
    </span>
  );
};

export default SearchTitle;
