import ShirtsDesignEditorPage from "../../presentation/features/shirts/pages/ShirtsDesignEditorPage";
import  MugMotherDayPage  from "../../presentation/features/mugs/pages/MugMotherDayPage";
import MugFatherDayPage from "../../presentation/features/mugs/pages/MugFatherDayPage";
import CalendarsPage from "../../presentation/features/calendars/pages/CalendarsPage";
import KeychainPage from "../../presentation/features/keychains/pages/KeychainPage";
import MousePadPage from "../../presentation/features/Mouse Pad/pages/MousePadPage";
import ToteBagPage from "../../presentation/features/tote-bags/pages/ToteBagPage";
import MugAnimePage from "../../presentation/features/mugs/pages/MugAnimePage";
import MobileLayout from "../../presentation/components/layout/MobileLayout";
import MugPage from "../../presentation/features/mugs/pages/MugPage";
import CategoryPage from "../../presentation/pages/CategoryPage";
import ProductsPage from "../../presentation/pages/ProductsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../../presentation/pages/HomePage";
import AcrylicPlatesPage from "../../presentation/features/acrylic-plates/pages/AcrylicPlatesPage";
import ThermosPage from "../../presentation/features/thermos/pages/ThermosPage";
import WaterBottlesPage from "../../presentation/features/water-bottles/pages/WaterBottlesPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <MobileLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/category/:type" element={<CategoryPage />} />
          <Route path="/tote-bags" element={<ToteBagPage/>} />
          <Route path="/mug" element={<MugPage/>} />
          <Route path="/mug/mugMotherDay" element={<MugMotherDayPage/>}/>
          <Route path="/mug/Anime" element={<MugAnimePage/>}/>
          <Route path="/mug/dia del padre" element={<MugFatherDayPage/>}/>
          <Route path="/camisa/diseña tu camisa" element={<ShirtsDesignEditorPage/>}/>
          <Route path="/Llaveros" element={<KeychainPage/>}/>
          <Route path="/Mouse pad" element={<MousePadPage/>}/>
          <Route path="/Calendarios" element={<CalendarsPage/>}/>
          <Route path="/Acrilicos" element={<AcrylicPlatesPage/>}/>
          <Route path="/Termos" element={<ThermosPage/>}/>
          <Route path="/Caramañolas" element={<WaterBottlesPage/>}/>
        </Routes>
      </MobileLayout>
    </BrowserRouter>
  );
};