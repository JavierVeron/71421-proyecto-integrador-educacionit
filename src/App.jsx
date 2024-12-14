import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux"
import Index from "./Index";
import Footer from "./Footer";
import Details from "./Details";
import Cart from "./Cart";
import NavBar from "./NavBar";
import ProductContextProvider from "./data/context/ProductContext";
import store from "./redux";

function App() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col">
          <Provider store={store}>
            <ProductContextProvider>
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
            </ProductContextProvider>
          </Provider>
        </div>
      </div>
    </div>
  )
}

export default App
