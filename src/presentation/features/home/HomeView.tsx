import Carousel from "./components/Carousel";
import CatalogPreview from "./components/CatalogPreview";

const HomeView = () => {
  return (
    <div style={{ height: "800px", display: "flex", flexDirection: "column", gap: "20px"  }}>
      <Carousel />
      <CatalogPreview />
    </div>
  );
};

export default HomeView;