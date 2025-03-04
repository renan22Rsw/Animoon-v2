interface InfoColumnsProps {
  status: string;
  format: string;
  favourites: number;
  genres: string[];
  averageScore: number;
  meanScore: number;
  season?: string;
  seasonYear?: number;
  episodes?: number;
  duration?: number;
  source: string;
}

const InfoColumns = ({
  averageScore,
  meanScore,
  status,
  format,
  favourites,
  genres,
  season,
  seasonYear,
  episodes,
  duration,
  source,
}: InfoColumnsProps) => {
  return (
    <div className="hidden h-[600px] justify-end sm:flex xl:w-1/4 2xl:w-[25%]">
      <div className="m-2 w-[200px] rounded-md bg-[#eaeaf0] p-4 dark:bg-[#0e0e14]">
        <div className="space-y-1 text-xs">
          <h5 className="font-bold">Format</h5>
          <p className="font-thin">{format}</p>

          {episodes && (
            <>
              <h5 className="font-bold">Episodes</h5>
              <p className="font-thin">{episodes}</p>
            </>
          )}

          {duration && (
            <>
              <h5 className="font-bold">Episode Duration</h5>
              <p className="font-thin">{duration} mins</p>
            </>
          )}

          <h5 className="font-bold">Favourites</h5>
          <p className="font-thin">{favourites}</p>

          <h5 className="font-bold">Status</h5>
          <p className="font-thin">{status}</p>

          {season && seasonYear && (
            <>
              <h5 className="font-bold">Season</h5>
              <p className="font-thin">
                {season} {seasonYear}
              </p>
            </>
          )}

          {averageScore ? (
            <>
              <h5 className="font-bold">Avarage Score</h5>
              <p className="font-thin">{averageScore}%</p>
            </>
          ) : (
            <>
              <h5 className="font-bold">Avarage Score</h5>
              <p className="font-thin">Unavailable</p>
            </>
          )}

          {meanScore ? (
            <>
              <h5 className="font-bold">Mean Score</h5>
              <p className="font-thin">{meanScore}%</p>
            </>
          ) : (
            <>
              <h5 className="font-bold">Mean Score</h5>
              <p className="font-thin">Unavailable</p>
            </>
          )}

          <h5 className="font-bold">Genres</h5>
          <ul>
            {genres.map((genre) => (
              <li className="font-thin" key={genre}>
                {genre}
              </li>
            ))}
          </ul>
          <h5 className="font-bold">Source</h5>
          <p className="font-thin">{source}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoColumns;
