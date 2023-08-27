import React from "react";
import { Router } from "./router/Router";
import { AuthProvider } from "./context/AuthProvider";

export const App = () => {
  return (
    <>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </>
  );
};
