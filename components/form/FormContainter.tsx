"use client";

import { useFormState } from "react-dom";
import useEffect from "react";
import { useToast } from "@/components/ui/use-toast";
import { actionFunction } from "@/utils/types";

const initialState = {
  message: "",
};

export const FormContainer = ({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) => {
  const [state, formAction] = useFormState(action, initialState);

  return <form action={}>{children}</form>;
};
