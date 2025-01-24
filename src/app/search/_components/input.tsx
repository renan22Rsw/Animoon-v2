"use client";

import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import SelectGenre from "./select";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const InputSearch = () => {
  const [search, setSearch] = useState<string>("");
  const [genre, setGenre] = useState<string>("");

  const router = useRouter();
  const pathName = usePathname();
  const pagePathName = pathName.split("/")[2];

  useEffect(() => {
    const searchAction = setTimeout(() => {
      if (search && genre) {
        router.push(`?search=${search}&genre=${genre}`);
      } else if (search) {
        router.push(`?search=${search}`);
      } else if (genre) {
        router.push(`?genre=${genre}`);
      } else {
        router.push(`/search/${pagePathName}`);
      }
    }, 500);

    return () => clearTimeout(searchAction);
  }, [search, genre, router, pagePathName]);

  useEffect(() => {
    setSearch("");
    setGenre("");
  }, [pathName]);

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
          className="w-[150px] px-6 placeholder:italic sm:w-[250px] md:w-[300px]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <SelectGenre setSelectValue={setGenre} />
    </div>
  );
};

export default InputSearch;
