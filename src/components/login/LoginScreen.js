import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    // console.log(history);
    // usando  history.push("/") puedo regresar a la pagina anterior
    // history.push("/");

    //  usando  history.replace("/") NO puedo regresar a la pagina anterior
    //  se utiilza normalmente en el LOGIN
    dispatch({
      type: types.login,
      payload: {
        name: "Emanuel",
      },
    });

    history.replace("/");
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-body">
              <h1> LoginScreen </h1>
              <hr />
              <div className="mb-2">
                <button className="btn btn-primary" onClick={handleLogin}>
                  {" "}
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
