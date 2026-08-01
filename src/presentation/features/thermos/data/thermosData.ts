import termoBotonTransparente from "../../../../assets/images/thermos/termo boton transparente.png";
import termoTapaRoscaRosa from "../../../../assets/images/thermos/termo tapa rosca rosa.png";
import termoTapaAcrilico from "../../../../assets/images/thermos/termo tapa acrilico.png";
import termoTapaRosca2 from "../../../../assets/images/thermos/termo tapa rosca 2.png";
import termoStanley from "../../../../assets/images/thermos/termo stanley.png";
import termoCarro from "../../../../assets/images/thermos/termo carro.png";
import type { thermoType } from "../../../../domain/entities/thermoType";

export const thermosData: thermoType[] = [
  { id: 1, name: "Termo Botón Transparente", price: "$25", image: termoBotonTransparente },
  { id: 2, name: "Termo Carro", price: "$28", image: termoCarro },
  { id: 3, name: "Termo Stanley", price: "$35", image: termoStanley },
  { id: 4, name: "Termo Tapa Acrílico", price: "$25", image: termoTapaAcrilico },
  { id: 5, name: "Termo Tapa Rosca", price: "$22", image: termoTapaRosca2 },
  { id: 6, name: "Termo Tapa Rosca Rosa", price: "$22", image: termoTapaRoscaRosa },
];