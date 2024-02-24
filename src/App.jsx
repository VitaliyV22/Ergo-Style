import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Landing } from "./pages/Landing/Landing";
import { ShopContextProvider } from "./context/store-context";
import { Cart } from "./pages/Cart/Cart";
import { Desks } from "./pages/Desks/Desks";
import { Chairs } from "./pages/Chairs/Chairs";

function App() {
  return (
    <>
      <ShopContextProvider>
        <Router>
          <div className="pb-5">
            <Navbar />
          </div>

          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/cart" element={<Cart />}/>
            <Route path="/desks" element={<Desks />}/>
            <Route path="/chairs" element={<Chairs /> }/>
          </Routes>
        <Footer />
        </Router>
      </ShopContextProvider>
    </>
  );
}

export default App;
