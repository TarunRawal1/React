import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Productlist } from "../pages/products/Productlist";
import { ProductDetail } from "../pages/ProductDetail";
import { Login } from "../pages/Login";
import { Cart } from "../pages/cart/Cart";
import { Protectedroutes } from "./Protectedroutes";
import { Register } from "../pages/Register";
import { Ordersummary } from "../pages/order/Ordersummary";
import { PageNotFound } from "../pages/Pagenotfound";
import { Dashboard } from "../pages/Dashboard/Dashboard";
export const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Productlist />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/cart"
          element={
            <Protectedroutes>
              <Cart />
            </Protectedroutes>
          }
        />
        <Route
          path="/order-summary"
          element={
            <Protectedroutes>
              <Ordersummary />
            </Protectedroutes>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Protectedroutes>
              <Dashboard />
            </Protectedroutes>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
