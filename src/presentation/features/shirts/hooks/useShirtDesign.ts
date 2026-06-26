import { useState } from "react";

interface Position {
  x: number;
  y: number;
}

export const useShirtDesign = () => {
    const [frontDesign, setFrontDesign] = useState<string | null>(null);

    const [backDesign, setBackDesign] = useState<string | null>(null);

    const [frontDesignSizeCm, setFrontDesignSizeCm] = useState(12);

    const [backDesignSizeCm, setBackDesignSizeCm] = useState(12);

    const [frontPosition, setFrontPosition] = useState<Position>({
        x: 50,
        y: 34,
    });

    const [backPosition, setBackPosition] = useState<Position>({
      x: 50,
      y: 34,
    });


    const uploadDesign = (
      file: File,
      view: "front" | "back"
    ) => {
      const imageUrl = URL.createObjectURL(file);

      if (view === "front") {
        setFrontDesign(imageUrl);
      } else {
        setBackDesign(imageUrl);
      }
    };

  return {
    frontDesign,
    backDesign,

    uploadDesign,

    frontDesignSizeCm,
    setFrontDesignSizeCm,

    frontPosition,
    setFrontPosition,

    backPosition,
    setBackPosition,

    backDesignSizeCm,
    setBackDesignSizeCm
  };
};