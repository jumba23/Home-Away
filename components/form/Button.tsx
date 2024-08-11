"use client";

import { ReloadIcon } from "@radix-ui/react-icons";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

type SubmitButtonProps = {
  className?: string;
  text?: string;
};

export const SubmitButton = ({
  className = "",
  text = "submit",
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="lg"
      className={`capitalize ${className}`}
      disabled={pending}
    >
      {pending ? (
        <>
          <ReloadIcon className="mr-2 w-4 h-4 animate-spin" /> Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
};
