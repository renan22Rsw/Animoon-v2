import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const InputSearch = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="relative">
        <MagnifyingGlassIcon
          className="absolute bottom-3 left-2"
          width={15}
          height={15}
        />
        <Input
          placeholder="Search..."
          className="w-[400px] px-6 placeholder:italic"
        />
      </div>
    </div>
  );
};

export default InputSearch;
