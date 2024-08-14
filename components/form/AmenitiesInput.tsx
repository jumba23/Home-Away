"use client";
import { useState } from "react";
import { amenities, Amenity } from "@/utils/amenities";
import { Checkbox } from "@/components/ui/checkbox";

import React from "react";

const AmenitiesInput = ({ defaultValue }: { defaultValue?: Amenity[] }) => {
  const [selectedAmenities, setSelectedAmenities] = useState<Amenity[]>(
    defaultValue || amenities
  );

  const handleChange = (amenity: Amenity) => {
    setSelectedAmenities((prev) =>
      prev.map((a) =>
        a.name === amenity.name ? { ...a, selected: !a.selected } : a
      )
    );
  };

  return (
    <section>
      <input
        type="hidden"
        name="amenities"
        value={JSON.stringify(selectedAmenities)}
      />
      <div className="grid grid-cols-2 gap-4">
        {selectedAmenities.map((amenity) => {
          return (
            <div className="flex items-center space-x-2" key={amenity.name}>
              <Checkbox
                id={amenity.name}
                checked={amenity.selected}
                onChange={() => handleChange(amenity)}
              />
              <label
                htmlFor={amenity.name}
                className="text-sm font-medium leading-none capitalize flex gap-x-2 items-center"
              >
                {amenity.name} <amenity.icon className="w-4 h-4" />
              </label>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AmenitiesInput;
