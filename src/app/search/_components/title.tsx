interface SearchTitleProps {
  title: string;
  href?: string;
}

const SearchTitle = ({ title, href }: SearchTitleProps) => {
  return (
    <span className="flex items-center justify-between">
      <h2 className="mx-4 text-lg font-bold uppercase text-foreground">
        {title}
      </h2>
      <a
        href={href}
        className="mr-4 cursor-pointer text-sm font-semibold text-foreground"
      >
        {href === undefined ? "" : "View all"}
      </a>
    </span>
  );
};

export default SearchTitle;
