import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShareLayout from "./pages/component/ShareLayout";
import Home from "./pages/Home";
import Cart from "./pages/cart/Cart";
import Error from "./pages/error/Error";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShareLayout />}>
            <Route index element={<Home />} />
            <Route index path="/cart" element={<Cart />} />
            <Route index path="*" element={<Error />} />
            <Route />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
