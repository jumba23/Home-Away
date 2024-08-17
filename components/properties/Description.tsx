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

  return (
    <article className="mt-4">
      <Title text="Description" />
      <p>
        {displayDescription && (
          <Button variant="link" className="pl-0" onClick={toggleDescription}>
            {isFullDescriptionShown ? "Show less" : "Show more"}
          </Button>
        )}
      </p>
    </article>
  );
};

export default Description;
