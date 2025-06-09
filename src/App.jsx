import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About"
import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />  {/* Bỏ dấu / */}
          <Route path="products" element={<Product />} /> {/* Bỏ dấu / */}
          <Route path="about" element={<About />} />      {/* Bỏ dấu / */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;