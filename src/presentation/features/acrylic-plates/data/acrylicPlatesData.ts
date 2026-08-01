import ball from "../../../../assets/images/acrylic plates/ball.png";
import cuadro from "../../../../assets/images/acrylic plates/cuadro.png";
import drop from "../../../../assets/images/acrylic plates/drop.png";
import menu from "../../../../assets/images/acrylic plates/menu.png";
import soportePlacas from "../../../../assets/images/acrylic plates/soporte para placas.png";
import soporte from "../../../../assets/images/acrylic plates/soporte.png";
import type { acrylicPlateType } from "../../../../domain/entities/acrylicPlateType";

export const acrylicPlatesData: acrylicPlateType[] = [
  { id: 1, name: "Placa Acrílica Ball", price: "$12", image: ball },
  { id: 2, name: "Placa Acrílica Cuadro", price: "$14", image: cuadro },
  { id: 3, name: "Placa Acrílica Drop", price: "$12", image: drop },
  { id: 4, name: "Placa Acrílica Menú", price: "$16", image: menu },
  { id: 5, name: "Soporte para Placas", price: "$8", image: soportePlacas },
  { id: 6, name: "Soporte Acrílico", price: "$8", image: soporte },
];