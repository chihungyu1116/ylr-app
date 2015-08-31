import React from "react";
import Router from "react-router";
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
import routes from "../shared/routes";
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

const initialState = window.__INITIAL_STATE__;
const store = {};//createStore(counterApp, initialState);

Router.run(routes, Router.HistoryLocation, (Handler, state) => {
  React.render(
    <Provider store={store}>
      {() => <Handler/>}
    </Provider>,
    document.getElementById('root')
  );
});