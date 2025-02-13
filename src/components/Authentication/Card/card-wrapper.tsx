import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import CardCotaniner from "./card-container";
import CardLink from "./card-link";
import HeaderDescription from "./header-description";
import HeaderTitle from "./header-title";
import SocialMedia from "./social-media";

interface CardWrapperProps {
  children: React.ReactNode;
  title: string;
  description: string;
  socialMedia?: boolean;
  link?: string;
  linkTitle: string;
}

const CardWrapper = ({
  children,
  title,
  description,
  socialMedia,
  linkTitle,
  link,
}: CardWrapperProps) => {
  return (
    <CardCotaniner>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>
            <HeaderTitle title={title} />
          </CardTitle>
          <CardDescription>
            <HeaderDescription description={description} />
          </CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
        {socialMedia && (
          <>
            <CardFooter>
              <SocialMedia />
            </CardFooter>

            <CardFooter>
              <CardLink href={link as string} linkTitle={linkTitle} />
            </CardFooter>
          </>
        )}
      </Card>
    </CardCotaniner>
  );
};

export default CardWrapper;
