import { useState } from "react";

import type { EditorColor, Position } from "../types/design-editor";

interface Params {
  colors: EditorColor[];
}

export const useDesignEditor = ({
  colors,
}: Params) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const [view, setView] = useState<"front" | "back">("front");

  const [frontDesign, setFrontDesign] = useState<string | null>(null);

  const [backDesign, setBackDesign] = useState<string | null>(null);

  const [frontSizeCm, setFrontSizeCm] = useState(12);

  const [backSizeCm, setBackSizeCm] = useState(12);

  const [frontPosition, setFrontPosition] =
    useState<Position>({
      x: 50,
      y: 34,
    });

  const [backPosition, setBackPosition] =
    useState<Position>({
      x: 50,
      y: 34,
    });

  const toggleView = () => {
    setView((prev) =>
      prev === "front"
        ? "back"
        : "front"
    );
  };

  const setCustomColor = (
    color: string
  ) => {
    setSelectedColor({
      id: 999,
      name: "Custom",
      color,
    });
  };

  const uploadDesign = (
    file: File
  ) => {
    const imageUrl =
      URL.createObjectURL(file);

    if (view === "front") {
      setFrontDesign(imageUrl);
    } else {
      setBackDesign(imageUrl);
    }
  };

  return {
    selectedColor,
    setSelectedColor,
    setCustomColor,

    view,
    toggleView,

    currentDesign:
      view === "front"
        ? frontDesign
        : backDesign,

    currentSizeCm:
      view === "front"
        ? frontSizeCm
        : backSizeCm,

    setCurrentSizeCm:
      view === "front"
        ? setFrontSizeCm
        : setBackSizeCm,

    currentPosition:
      view === "front"
        ? frontPosition
        : backPosition,

    setCurrentPosition:
      view === "front"
        ? setFrontPosition
        : setBackPosition,

    uploadDesign,
  };
};