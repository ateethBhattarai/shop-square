import { Route, Routes } from "react-router-dom";
import Test from "../Test";
import AppLayout from "../layout/AppLayout";
import PageNotFound from "../not-found/PageNotFound";
import ProductDescription from "../products/ProductDescription";
import Home from "../Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="/product/:id" element={<ProductDescription />} />
      </Route>
      <Route path="/test" element={<Test />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
