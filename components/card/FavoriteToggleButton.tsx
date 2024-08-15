import { FaHeart } from "react-icons/fa";
import { Button } from "../ui/button";
import { auth } from "@clerk/nextjs/server";
import { Card } from "../ui/card";
import { CardSignInButton } from "../form/Buttons";
import { fetchFavoriteId } from "@/utils/actions";
import FavoriteToggleForm from "./FavoriteToggleForm";

const FavoriteToggleButton = async ({ propertyId }: { propertyId: string }) => {
  const { userId } = auth();

  //if there is no user, return Sign In Modal
  if (!userId) {
    return <CardSignInButton />;
  }

  const favoriteId = await fetchFavoriteId({ propertyId });

  return <FavoriteToggleForm favoriteId={favoriteId} propertyId={propertyId} />;
};

export default FavoriteToggleButton;
