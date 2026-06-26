import { useState } from "react";
import { shirtColors } from "../data/shirtColors";

export const useShirtColor = () => {
  const [selectedColor, setSelectedColor] = useState(
    shirtColors[0]
  );

  const [view, setView] = useState<"front" | "back">(
    "front"
  );

  const toggleView = () => {
    setView((prev) =>
      prev === "front" ? "back" : "front"
    );
  };

  const setCustomColor = (color: string) => {
    setSelectedColor({
      id: 999,
      name: "Custom",
      color,
    });
  };

  return {
    selectedColor,
    setSelectedColor,
    setCustomColor,
    view,
    toggleView
  };
};