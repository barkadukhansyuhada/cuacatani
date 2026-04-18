"use client";

import { useContext } from "react";
import { CompareContext } from "@/contexts/CompareContext";

export function useCompare() {
  return useContext(CompareContext);
}
