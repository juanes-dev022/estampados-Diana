export interface MugVariant {
  id: number;
  name: string;

  frontImage: string;
  backImage: string;

  preview: string;
}

import MetalizadoFront from "../../../../assets/images/mugs/metalicos.png";
import MetalizadoBack from "../../../../assets/images/mugs/metalicos-removebg-preview.png";

import magicFront from "../../../../assets/images/mugs/mug9.jpeg";
import magicBack from "../../../../assets/images/mugs/mugBasico.png";

import travelFront from "../../../../assets/images/mugs/mugBasico.png";
import travelBack from "../../../../assets/images/mugs/mugBasico.png";

export const mugVariants: MugVariant[] = [
  {
    id: 1,
    name: "F Y O METALIZADO",

    frontImage: MetalizadoFront,
    backImage: MetalizadoBack,

    preview: MetalizadoFront,
  },

  {
    id: 2,
    name: "PELTRE",

    frontImage: magicFront,
    backImage: magicBack,

    preview: magicFront,
  },

  {
    id: 3,
    name: "MAGICO",

    frontImage: travelFront,
    backImage: travelBack,

    preview: travelFront,
  },
    {
    id: 4,
    name: "MAGICO ESCARCHADO",

    frontImage: travelFront,
    backImage: travelBack,

    preview: travelFront,
  },  {
    id: 5,
    name: "RECUADRO",

    frontImage: travelFront,
    backImage: travelBack,

    preview: travelFront,
  },
    {
    id: 6,
    name: "TAPA ESPEJO",

    frontImage: travelFront,
    backImage: travelBack,

    preview: travelFront,
  },
  {
    id: 7,
    name: "TINTERO",

    frontImage: travelFront,
    backImage: travelBack,

    preview: travelFront,
  },
  {
    id: 8,
    name: "TINTERO 2",

    frontImage: travelFront,
    backImage: travelBack,

    preview: travelFront,
  },
  {
    id: 9,
    name: "APILABLE",

    frontImage: travelFront,
    backImage: travelBack,

    preview: travelFront,
  },
{
    id: 10,
    name: "APILABLE 2",

    frontImage: travelFront,
    backImage: travelBack,

    preview: travelFront,
  },
    {
    id: 11,
    name: "MUG PAREJA",

    frontImage: travelFront,
    backImage: travelBack,

    preview: travelFront,
  },
    {
    id: 12,
    name: "OREJA GORDA",

    frontImage: travelFront,
    backImage: travelBack,

    preview: travelFront,
  },
    {
    id: 13,
    name: "OREJA BAMBU",

    frontImage: travelFront,
    backImage: travelBack,

    preview: travelFront,
  },
    {
    id: 14,
    name: "O Y BORDE DORADO",

    frontImage: travelFront,
    backImage: travelBack,

    preview: travelFront,
  },
  
];