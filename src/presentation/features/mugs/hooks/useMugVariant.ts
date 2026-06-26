import { useState } from "react";

import { mugVariants } from "../data/mugVariants";

export const useMugVariant = () => {
  const [selectedVariant, setSelectedVariant] =
    useState(mugVariants[0]);

  return {
    selectedVariant,
    setSelectedVariant,
  };
};