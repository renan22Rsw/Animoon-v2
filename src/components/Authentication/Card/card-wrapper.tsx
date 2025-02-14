import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CardCotaniner from "./card-container";
import SocialMedia from "../social-media";
import CardLink from "./card-link";
import HeaderTitle from "../Header/header-title";
import HeaderDescription from "../Header/header-description";

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
