import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Prisma } from "@prisma/client";

type PriceInputProps = {
  defaultValue?: number;
};

//instead of using the "const name = "price"" approach below, you can use the following approach:
const name = 

const PriceInput = ({ defaultValue }: PriceInputProps) => {
  const name = "price";
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Price ($)
      </Label>
      <Input
        type="number"
        name={name}
        id={name}
        min={0}
        defaultValue={defaultValue || 100}
        required
      />
    </div>
  );
};

export default PriceInput;
