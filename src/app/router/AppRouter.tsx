import ToteBagPage from "../../presentation/features/tote-bags/pages/ToteBagPage";
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
        </Routes>
      </MobileLayout>
    </BrowserRouter>
  );
};