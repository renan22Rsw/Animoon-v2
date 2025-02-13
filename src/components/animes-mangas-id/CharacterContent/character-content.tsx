import Image from "next/image";
import Link from "next/link";

interface VoiceActor {
  id: number;
  name: {
    userPreferred: string;
  };
  image: {
    medium: string;
  };
  languageV2: string;
}

interface CharacterContentProps {
  id: number;
  name: string;
  image: string;
  role: string;
  voiceActors?: VoiceActor[];
}

const CharacterContent = ({
  id,
  name,
  image,
  role,
  voiceActors,
}: CharacterContentProps) => {
  const {
    name: voiceActorName,
    image: voiceActorImage,
    languageV2: voiceActorLanguage,
    id: voiceActorId,
  } = (voiceActors?.[0] as VoiceActor) || [];

  return (
    <div className="my-1 flex rounded-md bg-[#EBF0F4] dark:bg-primary-foreground xl:w-[400px] 2xl:w-[400px]">
      <div className="flex w-2/4">
        <Link href={`/character/${id}`}>
          <Image
            src={image as string}
            alt="banner-image"
            width={60}
            height={60}
            style={{ width: "auto", height: "auto" }}
          />
        </Link>
        <div className="mr-2 flex flex-col justify-between px-1 py-2">
          <h4 className="text-xs font-semibold">{name}</h4>
          <p className="mx-1 text-xs">{role}</p>
        </div>
      </div>

      <div className="flex w-2/4 justify-end">
        <div className="flex flex-col items-end justify-between px-1 py-2">
          <h4 className="text-xs font-semibold">
            {voiceActorName?.userPreferred}
          </h4>
          {voiceActorLanguage && (
            <p className="mx-1 text-xs">{voiceActorLanguage}</p>
          )}
        </div>
        {voiceActorId && (
          <Link href={`/staff/${voiceActorId}`}>
            <Image
              src={voiceActorImage?.medium}
              alt="banner-image"
              width={60}
              height={60}
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default CharacterContent;
