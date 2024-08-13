import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const ImageInput = () => {
  const name = "image";

  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Image
      </Label>
      <Input
        type="file"
        name={name}
        id={name}
        required
        accept="image/*"
        className="max-w-xs"
      />
    </div>
  );
};

export default ImageInput;
