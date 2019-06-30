import React from "react";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import App from "../../containers/App";
import Template from "../../containers/Template";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App}/>
      <Route path="/template" exact={true} component={Template}/>
    </Switch>
  </BrowserRouter>
);

export default AppRouter;