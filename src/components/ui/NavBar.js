import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const NavBar = () => {
  const {
    user: { name },
    dispatch,
  } = useContext(AuthContext);
  // console.log(user);

  const history = useHistory();

  const handleLogout = () => {
    dispatch({
      type: types.logout,
    });

    history.replace("/login");
  };
  // RETURN
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Heroes App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                to="/dc"
              >
                DC
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                to="/marvel"
              >
                Marvel
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                to="/search"
              >
                Search
              </NavLink>
            </li>

            {/* <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link  "
                to="/login"
              >
                Logout
              </NavLink>
            </li> */}
          </ul>
        </div>
        {/* div 2 */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <span className="nav-link"> {name} </span>
            </li>

            <li className="nav-item">
              <button
                className="nav-link btn"
                // to="/login"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
