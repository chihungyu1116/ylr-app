"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _reactRouter2 = _interopRequireDefault(_reactRouter);

// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

var _sharedRoutes = require("../shared/routes");

var _sharedRoutes2 = _interopRequireDefault(_sharedRoutes);

var _reactTapEventPlugin = require("react-tap-event-plugin");

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

(0, _reactTapEventPlugin2["default"])();

var initialState = window.__INITIAL_STATE__;
var store = {}; //createStore(counterApp, initialState);

_reactRouter2["default"].run(_sharedRoutes2["default"], _reactRouter2["default"].HistoryLocation, function (Handler, state) {
  _react2["default"].render(_react2["default"].createElement(
    Provider,
    { store: store },
    function () {
      return _react2["default"].createElement(Handler, null);
    }
  ), document.getElementById('root'));
});