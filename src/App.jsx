import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Index";
import Footer from "./Footer";
import Details from "./Details";
import Cart from "./Cart";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col">
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path={"/"} element={<Index />} />
              <Route path={"/category/:id"} element={<Index />} />
              <Route path={"/details/:id"} element={<Details />} />
              <Route path={"/cart"} element={<Cart />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </div>
    </div>
  )
}

export default App
