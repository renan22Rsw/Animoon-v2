import { Card, CardContent } from "../../ui/card";

interface TrailerProps {
  id: string;
}

const Trailer = ({ id }: TrailerProps) => {
  return (
    <Card className="border-none">
      <CardContent>
        <iframe
          className="h-[300px] w-full xl:w-[450px]"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </CardContent>
    </Card>
  );
};

export default Trailer;
