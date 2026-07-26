import ShirtsDesignEditorPage from "../../presentation/features/shirts/pages/ShirtsDesignEditorPage";
import  MugMotherDayPage  from "../../presentation/features/mugs/pages/MugMotherDayPage";
import MugFatherDayPage from "../../presentation/features/mugs/pages/MugFatherDayPage";
import KeychainPage from "../../presentation/features/keychains/pages/KeychainPage";
import ToteBagPage from "../../presentation/features/tote-bags/pages/ToteBagPage";
import MugAnimePage from "../../presentation/features/mugs/pages/MugAnimePage";
import MobileLayout from "../../presentation/components/layout/MobileLayout";
import MugPage from "../../presentation/features/mugs/pages/MugPage";
import CategoryPage from "../../presentation/pages/CategoryPage";
import ProductsPage from "../../presentation/pages/ProductsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../../presentation/pages/HomePage";

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
        </Routes>
      </MobileLayout>
    </BrowserRouter>
  );
};