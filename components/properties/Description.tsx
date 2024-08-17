"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Title from "./Title";
const Description = ({ description }: { description: string }) => {
  const [isFullDescriptionShown, setIsFullDescriptionShown] = useState(false);

  const words = description.split(" ");
  const isLongDescription = words.length > 100;

  const toggleDescription = () => {
    setIsFullDescriptionShown(!isFullDescriptionShown);
  };

  const displayDescription =
    isFullDescriptionShown && !isFullDescriptionShown
      ? words.splice(0, 100).join(" ") + "..."
      : description;

  return <div>Description</div>;
};

export default Description;
