import React from "react";
import Pikachu from "./Pikachu";
import Piku from "./Piku";
import Button from "@mui/material/Button";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <br />

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Button variant="outline" color="success">
            <NavLink to="/">Pikachu</NavLink>
          </Button>

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
              <li className="nav-item"></li>
              <li className="nav-item p-4">
                <Button color="secondary">
                  <NavLink style={{ color: "orange" }} to="/Piku">
                    Pikachu
                  </NavLink>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Pikachu} />
        <Route exact path="/Piku" component={Piku} />
        <Redirect to="/"></Redirect>
      </Switch>
    </>
  );
};
export default Menu;
