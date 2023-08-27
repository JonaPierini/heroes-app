import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { MarvelPage } from "../heroes/pages/MarvelPage";
import { DcPage } from "../heroes/pages/DcPage";
import { LoginPage } from "../auth/pages/LoginPage";
import { NavBar } from "../ui/components/NavBar";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const Router = () => {
  return (
    <>
      <Routes>
        {/* Login esta fuera de esas rutas y no me va a mostrar el NavBar */}
        {/* Ruta Publica */}
        <Route  path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }>

        </Route>
        {/* Creamos un componente (HeroesRoutes) en donde estan definidas las rutas */}
        {/* Rutas Privadas */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        ></Route>

      </Routes>
    </>
  );
};
