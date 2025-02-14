interface ProfileInfoProps {
  animesLenght: number;
  mangasLenght: number;
  favoritesLenght: number;
}

const ProfileInfo = ({
  animesLenght,
  mangasLenght,
  favoritesLenght,
}: ProfileInfoProps) => {
  return (
    <div className="flex justify-center">
      <div className="my-8 w-[500px] rounded-md bg-[#EBF0F4] p-4 dark:bg-primary-foreground">
        <div className="flex justify-center px-4">
          <div className="grid grid-cols-3 justify-between gap-x-8">
            <h5 className="text-center text-sm font-bold">{animesLenght}</h5>
            <h5 className="text-center text-sm font-bold">{mangasLenght}</h5>
            <h5 className="text-center text-sm font-bold">{favoritesLenght}</h5>
            <h5 className="text-center text-xs font-semibold">Total Animes</h5>
            <h5 className="text-center text-xs font-semibold">Total Mangas</h5>
            <h5 className="text-center text-xs font-semibold">Favorites</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
