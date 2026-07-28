import ProductCard from "../../products/components/ProductCard";
import ProductGrid from "../../products/components/ProductGrid";
import CollapsibleSection from "../../calendars/components/CollapsibleSection";
import { calendarsData } from "../data/calendarsData";
import agendaMDF from "../../../../assets/images/calendars/agenda MDF.png";
import agendaMDF2 from "../../../../assets/images/calendars/agenda MDF para sublimar 2.png";
import agendaNegraVinilo from "../../../../assets/images/calendars/agenda negra para estampado en vinilo adhesivo.png";
import agendaTapaDuraPremium from "../../../../assets/images/calendars/agenda tapa dura premium.png";
import agendaTapaDura from "../../../../assets/images/calendars/agenda tapa dura.png";

import "./CalendarsPage.css";

const CalendarsPage = () => {
  return (
    <div className="calendars-page">
      {/* Agenda tradicional / catálogo */}
      <CollapsibleSection
        eyebrow="Catálogo"
        title="Agendas y calendarios"
        preview={<ProductCard name="" price="" image={agendaTapaDura} />}
      >
        <div className="spec-line">
          <span className="spec-line__tag">17 x 24 cm</span>
          <span className="spec-line__tag">Tapa dura</span>
          <span className="spec-line__price">$41.000</span>
        </div>

        <ProductGrid products={calendarsData} />
      </CollapsibleSection>

      {/* Agenda negra vinilo */}
      <CollapsibleSection
        eyebrow="Edición especial"
        title="Agenda negra para estampado en vinilo adhesivo o DTF UV"
        preview={<ProductCard name="" price="" image={agendaNegraVinilo} />}
      >
        <ul className="detail-card__specs">
          <li>100 hojas</li>
          <li>Cuadriculada</li>
        </ul>
        <p className="detail-card__price">$48.000</p>
      </CollapsibleSection>

      {/* Línea MDF */}
      <CollapsibleSection
        eyebrow="Línea MDF"
        title="Agenda MDF para sublimar"
        preview={<ProductCard name="" price="" image={agendaMDF} />}
      >
        <div style={{margin: "0 auto", width: "200px"}}>
                    <ProductCard name="" price="" image={agendaMDF2} />

        </div>
        <ul className="detail-card__specs">
          <li>Hoja de datos</li>
          <li>100 hojas cuadriculadas</li>
          <li>1 hoja calendario</li>
        </ul>

        <p className="detail-card__price">$37.500</p>

        <div className="detail-card__divider" />

        <p className="detail-card__addons-label">Adiciones</p>
        <ul className="detail-card__addons">
          <li>
            <span>Juego de tapas</span>
            <span>$10.500</span>
          </li>
          <li>
            <span>Cuaderno de 5 materias sublimable</span>
            <span>$55.000</span>
          </li>
        </ul>
      </CollapsibleSection>

      {/* Agenda tapa dura premium */}
      <CollapsibleSection
        eyebrow="Premium"
        title="Agenda tapa dura premium"
        preview={<ProductCard name="" price="" image={agendaTapaDuraPremium} />}
      >
        <ul className="detail-card__specs">
            <li>para sublimacion</li>
          <li>hojas de datos</li>
          <li>calendario</li>
          <li>programador por mes</li>
          <li>100 hojas cuadriculada</li>
          <li></li>
        </ul>
        <p className="detail-card__price">$45.000</p>
      </CollapsibleSection>

    </div>
  );
};

export default CalendarsPage;