import React, { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";
import { AppRouter } from "./routers/AppRouter";

export const HeroesApp = () => {
  // el INIT se va a ejecutar al iniciar y los datos se los va a mandar al INITIALSTATE
  // que en este caso esta en el segundo argumento del useReducer  {}

  const init = () => {
    return JSON.parse(localStorage.getItem("user")) || { logged: false };
  };
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  // RETURN
  return (
    <>
      <AuthContext.Provider value={{ user, dispatch }}>
        <AppRouter />
      </AuthContext.Provider>
    </>
  );
};
