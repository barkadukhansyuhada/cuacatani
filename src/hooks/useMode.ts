"use client";

import { useContext } from "react";
import { ModeContext } from "@/contexts/ModeContext";

export function useMode() {
  return useContext(ModeContext);
}
