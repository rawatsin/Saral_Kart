import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import AppLayout from "./layout/AppLayout";
import Product from "./pages/Product";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<SingleProduct />} />

      </Route>
    </Routes>
  );
}

export default App;
