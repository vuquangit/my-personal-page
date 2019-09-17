import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Page404 from "./Pages/404";
import Header from "./Header";
import Footer from "./Footer";
import pageConfigs from "./pageConfigs";

const Main = () => {
  const _renderPage = () =>
    pageConfigs.map((route, index) => <Route {...route} key={index} />);
  return (
    <div className="position-relative">
      <HashRouter>
        <Header />
        <div className="container-fluid pt-0">
          <Switch>
            {_renderPage()}
            <Route component={Page404} />
          </Switch>
        </div>
        <Footer />
      </HashRouter>
    </div>
  );
};

export default Main;
