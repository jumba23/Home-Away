"use client";

import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { actionFunction } from "@/utils/types";

const initialState = {
  message: "",
};
