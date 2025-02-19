interface CardLinkProps {
  href: string;
  linkTitle: string;
}

const CardLink = ({ href, linkTitle }: CardLinkProps) => {
  return (
    <a
      className="w-full text-center text-sm italic hover:underline"
      href={href}
    >
      {linkTitle}
    </a>
  );
};

export default CardLink;
