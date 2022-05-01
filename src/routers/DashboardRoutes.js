import React from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { DcScreen } from "../components/dc/DcScreen";
import { HeroScreen } from "../components/heroes/HeroScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { NavBar } from "../components/ui/NavBar";

export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/hero/:heroeId" component={HeroScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
