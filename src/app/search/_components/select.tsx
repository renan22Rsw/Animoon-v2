import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface Geners {
  id: number;
  genre: string;
}

export const geners: Geners[] = [
  {
    id: 1,
    genre: "Action",
  },

  {
    id: 2,
    genre: "Adventure",
  },

  {
    id: 3,
    genre: "Comedy",
  },

  {
    id: 4,
    genre: "Drama",
  },

  {
    id: 5,
    genre: "Ecchi",
  },

  {
    id: 6,
    genre: "Fantasy",
  },

  {
    id: 7,
    genre: "Horror",
  },

  {
    id: 8,
    genre: "Mahou Shoujo",
  },

  {
    id: 9,
    genre: "Mecha",
  },

  {
    id: 10,
    genre: "Music",
  },

  {
    id: 11,
    genre: "Mystery",
  },

  {
    id: 12,
    genre: "Psychological",
  },

  {
    id: 13,
    genre: "Romance",
  },

  {
    id: 14,
    genre: "Sci Fi",
  },

  {
    id: 15,
    genre: "Slice of Life",
  },

  {
    id: 16,
    genre: "Sports",
  },

  {
    id: 17,
    genre: "Supernatural",
  },

  {
    id: 18,
    genre: "Thriller",
  },
];

interface selectProps {
  setSelectValue: React.Dispatch<React.SetStateAction<string>>;
}

const SelectGenres = ({ setSelectValue }: selectProps) => {
  return (
    <Select onValueChange={setSelectValue}>
      <SelectTrigger className="mx-2 w-[100px] lg:w-[120px]">
        <SelectValue placeholder="Any" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Genres</SelectLabel>
          {geners.map(({ id, genre }) => (
            <SelectItem key={id} value={genre}>
              {genre}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectGenres;
