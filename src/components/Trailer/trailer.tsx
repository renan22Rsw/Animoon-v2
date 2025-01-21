import { Card, CardContent } from "../ui/card";

const Trailer = () => {
  return (
    <Card>
      <CardContent>
        <iframe
          className="h-[300px] w-full xl:w-[450px]"
          src="https://www.youtube.com/embed/NlJZ-YgAt-c?si=5xsZLCwAUQ9cpkdw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </CardContent>
    </Card>
  );
};

export default Trailer;
