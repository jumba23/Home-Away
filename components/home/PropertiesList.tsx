import PropertyCard from "../card/PropertyCard";
import type { PropertyCardProps } from "@/utils/types";

const PropertiesList = ({
  properties,
}: {
  properties: PropertyCardProps[];
}) => {
  return (
    <section>
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </section>
  );
};

export default PropertiesList;
