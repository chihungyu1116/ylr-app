import React from "react";  
import Router from "react-router";  
import routes from "../shared/routes";

Router.run(routes, Router.HistoryLocation, (Handler, state) => {
  window.rr = routes;
  window.rr1 = Router;
  console.log(routes)
  React.render(<Handler/>, document.getElementById('react-app'));
});