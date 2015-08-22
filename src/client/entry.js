import React from "react";  
import Router from "react-router";  
import routes from "../shared/routes";
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

Router.run(routes, Router.HistoryLocation, (Handler, state) => {
  React.render(<Handler/>, document.getElementById('react-app'));
});