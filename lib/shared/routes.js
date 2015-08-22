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

var _componentsUserController = require("./components/UserController");

var _componentsUserController2 = _interopRequireDefault(_componentsUserController);

exports["default"] = _react2["default"].createElement(
  _reactRouter.Route,
  { name: "app-view", path: "/", handler: _componentsAppController2["default"] },
  _react2["default"].createElement(_reactRouter.Route, {
    name: "home-view",
    path: "/",
    handler: _componentsHomeController2["default"] }),
  _react2["default"].createElement(_reactRouter.Route, {
    name: "about-view",
    path: "about",
    handler: _componentsAboutController2["default"] }),
  _react2["default"].createElement(_reactRouter.Route, {
    name: "user-view",
    path: "user",
    handler: _componentsUserController2["default"] }),
  _react2["default"].createElement(_reactRouter.Route, {
    name: "faq-view",
    path: "faq",
    handler: _componentsFAQController2["default"] }),
  _react2["default"].createElement(_reactRouter.Route, {
    name: "forum-view",
    path: "forum",
    handler: _componentsForumController2["default"] })
);
module.exports = exports["default"];