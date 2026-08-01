export interface MugVariant {
  id: number;
  name: string;

  frontImage: string;
  backImage: string;

  preview: string;
}

import MetalizadoFront from "../../../../assets/images/mugs/metalicos.png";
import MetalizadoBack from "../../../../assets/images/mugs/metalicos.png";

import mugPeltreFront from "../../../../assets/images/mugs/mugPeltre.png";
import mugPeltreBack from "../../../../assets/images/mugs/mugPeltre.png";

import mugMagicoFront from "../../../../assets/images/mugs/mugMagico.png";
import mugMagicoBack from "../../../../assets/images/mugs/mugMagico.png";

import mugMagicoEscarchadoFront from "../../../../assets/images/mugs/mugMagicoEscarchado.png";
import mugMagicoEscarchadoBack from "../../../../assets/images/mugs/mugMagicoEscarchado.png";

import mugRecuadroFront from "../../../../assets/images/mugs/mugRecuadro.png";
import mugRecuadroBack from "../../../../assets/images/mugs/mugRecuadro.png";

import mugTapaEspejoFront from "../../../../assets/images/mugs/mugTapaEspejo.png";
import mugTapaEspejoBack from "../../../../assets/images/mugs/mugTapaEspejo.png";

import mugTinteroFront from "../../../../assets/images/mugs/mugTintero.png";
import mugTinteroBack from "../../../../assets/images/mugs/mugTintero.png";

import mugTinterosFront from "../../../../assets/images/mugs/mugTinteros.png";
import mugTinterosBack from "../../../../assets/images/mugs/mugTinteros.png";

import mugApilableFront from "../../../../assets/images/mugs/mugApilable.png";
import mugApilableBack from "../../../../assets/images/mugs/mugApilable.png";

import mugApilablesFront from "../../../../assets/images/mugs/mugApilables.png";
import mugApilablesBack from "../../../../assets/images/mugs/mugApilables.png";

import mugParejaFront from "../../../../assets/images/mugs/mugPareja.png";
import mugParejaBack from "../../../../assets/images/mugs/mugPareja.png";

import mugOrejaGordaFront from "../../../../assets/images/mugs/mugOrejaGorda.png";
import mugOrejaGordaBack from "../../../../assets/images/mugs/mugOrejaGorda.png";

import mugOrejaBambuFront from "../../../../assets/images/mugs/mugOrejaBambu.png";
import mugOrejaBambuBack from "../../../../assets/images/mugs/mugOrejaBambu.png";

import mugBordeDoradoFront from "../../../../assets/images/mugs/mugBordeDorado.png";
import mugBordeDoradoBack from "../../../../assets/images/mugs/mugBordeDorado.png";

import estandarmugFront from "../../../../assets/images/mugs/mugBasico.png";
import estandarMugBack from "../../../../assets/images/mugs/mugBasico.png";


export const mugVariants: MugVariant[] = [
  {
    id: 15,
    name: "estandar",

    frontImage: estandarmugFront,
    backImage: estandarMugBack,

    preview: estandarmugFront,
  },
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

    frontImage: mugPeltreFront,
    backImage: mugPeltreBack,

    preview: mugPeltreFront,
  },

  {
    id: 3,
    name: "MAGICO",

    frontImage: mugMagicoFront,
    backImage: mugMagicoBack,

    preview: mugMagicoFront,
  },
  {
    id: 4,
    name: "MAGICO ESCARCHADO",

    frontImage: mugMagicoEscarchadoFront,
    backImage: mugMagicoEscarchadoBack,

    preview: mugMagicoEscarchadoFront,
  },
  {
    id: 5,
    name: "RECUADRO",

    frontImage: mugRecuadroFront,
    backImage: mugRecuadroBack,

    preview: mugRecuadroFront,
  },
  {
    id: 6,
    name: "TAPA ESPEJO",

    frontImage: mugTapaEspejoFront,
    backImage: mugTapaEspejoBack,

    preview: mugTapaEspejoFront,
  },
  {
    id: 7,
    name: "TINTERO",

    frontImage: mugTinteroFront,
    backImage: mugTinteroBack,

    preview: mugTinteroFront,
  },
  {
    id: 8,
    name: "TINTEROS",

    frontImage: mugTinterosFront,
    backImage: mugTinterosBack,

    preview: mugTinterosFront,
  },
  {
    id: 9,
    name: "APILABLE",

    frontImage: mugApilableFront,
    backImage: mugApilableBack,

    preview: mugApilableFront,
  },
  {
    id: 10,
    name: "APILABLES",

    frontImage: mugApilablesFront,
    backImage: mugApilablesBack,

    preview: mugApilablesFront,
  },
  {
    id: 11,
    name: "MUG PAREJA",

    frontImage: mugParejaFront,
    backImage: mugParejaBack,

    preview: mugParejaFront,
  },
  {
    id: 12,
    name: "OREJA GORDA",

    frontImage: mugOrejaGordaFront,
    backImage: mugOrejaGordaBack,

    preview: mugOrejaGordaFront,
  },
  {
    id: 13,
    name: "OREJA BAMBU",

    frontImage: mugOrejaBambuFront,
    backImage: mugOrejaBambuBack,

    preview: mugOrejaBambuFront,
  },
  {
    id: 14,
    name: "O Y BORDE DORADO",

    frontImage: mugBordeDoradoFront,
    backImage: mugBordeDoradoBack,

    preview: mugBordeDoradoFront,
  },
];