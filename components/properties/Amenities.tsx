import { Amenity } from "@/utils/amenities";
import { LuFolderCheck } from "react-icons/lu";
import Title from "./Title";

const Amenities = ({ amenities }: { amenities: string }) => {
  const amenitiesList: Amenity[] = JSON.parse(amenities as string);
  const noAmenities = amenitiesList.every((amenity) => !amenity.selected);

  if (noAmenities) return null;

  return (
    <div className="mt-4">
      <Title text="What this place offers" />
      <div className="grid md:grid-cols-2 gap-x-4">
        {amenitiesList.map((amenity) => {
          if (!amenity.selected) return null;
          return (
            <div key={amenity.name} className="flex gap-x-4 items-center mb-2">
              <LuFolderCheck className="text-primary h-5 w-6" />
              <span className="text-sm font-light capitalize">
                {amenity.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Amenities;
