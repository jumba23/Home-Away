/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Input } from "../ui/input";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect } from "react";

const NavSearch = () => {
  // hooks
  const searchParams = useSearchParams(); // get search params
  const pathname = usePathname(); // get current path
  const { replace } = useRouter(); // get router methods - to navigate back home

  const [search, setSearch] = useState(searchParams.get("search") || ""); // search state

  // update search params
  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  useEffect(() => {
    // check if there is anything in URK params
    if (!searchParams.get("search")) {
      setSearch("");
    }
  }, [searchParams.get("search")]);

  return (
    <Input
      placeholder="find a property..."
      type="text"
      className="max-w-xs dark:bg-muted"
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }}
      value={search}
    />
  );
};

export default NavSearch;
