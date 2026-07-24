import type { ShirtsCaroucel } from "../types/ShirtsCaroucel"; // ajusta ruta

import algodonCuelloRedondoTallasMenores from "../../../../assets/images/shirts/algodon peinado cuello redondo tallas menores.jpeg";
import algodonCuelloRedondo from "../../../../assets/images/shirts/algodon peinado cuello redondo.jpeg";
import algodonMangaLarga from "../../../../assets/images/shirts/algodon peinado manga larga.jpeg";
import algodonNino from "../../../../assets/images/shirts/algodon peinado niño.jpeg";
import algodonPeinado from "../../../../assets/images/shirts/algodon peinado.jpeg";
import pielDeDurazno from "../../../../assets/images/shirts/camisas piel de durazno.jpeg";
import oversizeHombre from "../../../../assets/images/shirts/oversive hombre cuello redondo.jpeg";
import oversizeMujer from "../../../../assets/images/shirts/oversize cuello redondo mujer.jpeg";
import telaFriaCuelloRedondo from "../../../../assets/images/shirts/tela fria cuello redondo.jpeg";
import telaFria from "../../../../assets/images/shirts/tela fria.jpeg";


// ⚠️ Ajusta los precios reales, aquí van valores de ejemplo
export const shirtsCarouselData: ShirtsCaroucel[] = [
  {
    id: 1,
    image: algodonCuelloRedondo,
    price: "$45.000",
    description: "Camiseta algodón peinado cuello redondo",
  },
  {
    id: 2,
    image: algodonCuelloRedondoTallasMenores,
    price: "$38.000",
    description: "Camiseta algodón peinado cuello redondo - tallas menores",
  },
  {
    id: 3,
    image: algodonMangaLarga,
    price: "$48.000",
    description: "Camiseta algodón peinado manga larga",
  },
  {
    id: 4,
    image: algodonNino,
    price: "$35.000",
    description: "Camiseta algodón peinado para niño",
  },
  {
    id: 5,
    image: algodonPeinado,
    price: "$42.000",
    description: "Camiseta algodón peinado",
  },
  {
    id: 6,
    image: pielDeDurazno,
    price: "$50.000",
    description: "Camisa tela piel de durazno",
  },
  {
    id: 7,
    image: oversizeHombre,
    price: "$52.000",
    description: "Camiseta oversize hombre cuello redondo",
  },
  {
    id: 8,
    image: oversizeMujer,
    price: "$52.000",
    description: "Camiseta oversize cuello redondo mujer",
  },
  {
    id: 9,
    image: telaFriaCuelloRedondo,
    price: "$46.000",
    description: "Camiseta tela fría cuello redondo",
  },
  {
    id: 10,
    image: telaFria,
    price: "$46.000",
    description: "Camiseta tela fría",
  },
];