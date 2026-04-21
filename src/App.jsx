import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import QuienesSomos from "./components/QuienesSomos/QuienesSomos";
import Preparados from "./components/Preparados/Preparados";
import Product from "./components/Product/Product";
import NotFound from "./components/NotFound/NotFound";
import Recomendaciones from "./components/Recomendaciones/Recomendaciones";
import BotonesChat from "./components/BotonesChat/BotonesChat";

function App() {
  return (
    <main>
      <Header></Header>
      <Routes>
        <Route path="*" element={<NotFound></NotFound>} />
        <Route path="/" element={<Home></Home>} />
        <Route path="/quienesSomos" element={<QuienesSomos></QuienesSomos>} />
        <Route path="/preparados" element={<Preparados></Preparados>} />
        <Route path="/item/:name" element={<Product></Product>} />
        <Route path="/FAQ" element={<Recomendaciones />}></Route>
      </Routes>
      <BotonesChat></BotonesChat>
      <Footer></Footer>
    </main>
  );
}

export default App;
