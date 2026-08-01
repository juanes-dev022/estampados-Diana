import blanca from "../../../../assets/images/water bottles/blanca.png";
import degradadoAzul from "../../../../assets/images/water bottles/degradado azul.png";
import degradadoRosa from "../../../../assets/images/water bottles/degradado rosa.png";
import plata from "../../../../assets/images/water bottles/plata.png";
import type { waterBottleType } from "../../../../domain/entities/waterBottleType";

export const waterBottlesData: waterBottleType[] = [
  { id: 1, name: "Botella Blanca", price: "$18", image: blanca },
  { id: 2, name: "Botella Degradado Azul", price: "$20", image: degradadoAzul },
  { id: 3, name: "Botella Degradado Rosa", price: "$20", image: degradadoRosa },
  { id: 4, name: "Botella Plata", price: "$18", image: plata },
];