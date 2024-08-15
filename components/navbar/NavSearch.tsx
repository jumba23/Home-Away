"use client";
import { Input } from "../ui/input";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect } from "react";

const NavSearch = () => {
  return (
    <Input
      placeholder="find a property..."
      type="text"
      className="max-w-xs dark:bg-muted"
    />
  );
};

export default NavSearch;
