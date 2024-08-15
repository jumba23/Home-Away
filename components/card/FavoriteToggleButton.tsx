import { FaHeart } from "react-icons/fa";
import { Button } from "../ui/button";
import { auth } from "@clerk/nextjs/server";
import { Card } from "../ui/card";
import { CardSignInButton } from "../form/Buttons";

const FavoriteToggleButton = ({ propertyId }: { propertyId: string }) => {
  const { userId } = auth();

  //if there is no user, return Sign In Modal
  if (!userId) {
    return <CardSignInButton />;
  }

  const favoriteId = 

  return (
    <Button size="icon" variant="outline" className="p-2 cursor-pointer">
      <FaHeart />
    </Button>
  );
};

export default FavoriteToggleButton;
