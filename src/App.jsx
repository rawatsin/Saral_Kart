import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import AppLayout from "./layout/AppLayout";
import Product from "./pages/Product";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
      </Route>
    </Routes>
  );
}

export default App;
