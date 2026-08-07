import { Routes, Route } from "react-router-dom";

import DashboardPage from "../pages/DashboardPage";
import CustomersPage from "../pages/CustomersPage";
import ProductsPage from "../pages/ProductsPage";
import OrdersPage from "../pages/OrdersPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/customers" element={<CustomersPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/orders" element={<OrdersPage />} />
    </Routes>
  );
}

export default AppRoutes;