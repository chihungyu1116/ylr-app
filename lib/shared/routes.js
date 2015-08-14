"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _reactRouter = require("react-router");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _componentsHomeController = require("./components/HomeController");

var _componentsHomeController2 = _interopRequireDefault(_componentsHomeController);

var _componentsAppController = require("./components/AppController");

var _componentsAppController2 = _interopRequireDefault(_componentsAppController);

var _componentsAboutController = require("./components/AboutController");

var _componentsAboutController2 = _interopRequireDefault(_componentsAboutController);

var _componentsForumController = require("./components/ForumController");

var _componentsForumController2 = _interopRequireDefault(_componentsForumController);

var _componentsFAQController = require("./components/FAQController");

var _componentsFAQController2 = _interopRequireDefault(_componentsFAQController);

exports["default"] = _react2["default"].createElement(
  _reactRouter.Route,
  { name: "app", path: "/", handler: _componentsAppController2["default"] },
  _react2["default"].createElement(_reactRouter.DefaultRoute, { handler: _componentsHomeController2["default"] }),
  _react2["default"].createElement(_reactRouter.Route, { name: "about", path: "about", handler: _componentsAboutController2["default"] }),
  _react2["default"].createElement(_reactRouter.Route, { name: "forum", path: "forum", handler: _componentsForumController2["default"] }),
  _react2["default"].createElement(_reactRouter.Route, { name: "faq", path: "faq", handler: _componentsFAQController2["default"] })
);
module.exports = exports["default"];