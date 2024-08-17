import FavoriteToggleButton from "@/components/card/FavoriteToggleButton";
import BreadCrumbs from "@/components/properties/BreadCrumbs";
import ShareButton from "@/components/properties/ShareButton";
import { fetchPropertyDetails } from "@/utils/actions";
import { redirect } from "next/navigation";
import React from "react";

const PropertyDetailsPage = async ({ params }: { params: { id: string } }) => {
  const property = await fetchPropertyDetails(params.id);

  if (!property) redirect("/");
  const { baths, bedrooms, beds, guests } = property;
  const details = { baths, bedrooms, beds, guests };

  return (
    <section>
      <BreadCrumbs name={property.name} />
      <header className="flex justify-between items-center mt-4">
        <h1 className="text-4xl font-bold">{property.tagline}</h1>
        <div className="flex space-x-4 items-center">
          {/*share button*/}
          <ShareButton propertyId={property.id} name={property.name} />
          <FavoriteToggleButton propertyId={property.id} />
        </div>
      </header>
    </section>
  );
};

export default PropertyDetailsPage;
