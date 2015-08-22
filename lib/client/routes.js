"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _reactRouter = require("react-router");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _sharedComponentsHomeController = require("../shared/components/HomeController");

var _sharedComponentsHomeController2 = _interopRequireDefault(_sharedComponentsHomeController);

var _sharedComponentsAppController = require("../shared/components/AppController");

var _sharedComponentsAppController2 = _interopRequireDefault(_sharedComponentsAppController);

var _sharedComponentsAboutController = require("../shared/components/AboutController");

var _sharedComponentsAboutController2 = _interopRequireDefault(_sharedComponentsAboutController);

var _sharedComponentsForumController = require("../shared/components/ForumController");

var _sharedComponentsForumController2 = _interopRequireDefault(_sharedComponentsForumController);

var _sharedComponentsFAQController = require("../shared/components/FAQController");

var _sharedComponentsFAQController2 = _interopRequireDefault(_sharedComponentsFAQController);

var _sharedComponentsUserController = require("../shared/components/UserController");

var _sharedComponentsUserController2 = _interopRequireDefault(_sharedComponentsUserController);

exports["default"] = _react2["default"].createElement(
  _reactRouter.Route,
  { name: "app",
    path: "/",
    handler: _sharedComponentsAppController2["default"] },
  _react2["default"].createElement(_reactRouter.DefaultRoute, {
    name: "home",
    handler: _sharedComponentsHomeController2["default"] }),
  _react2["default"].createElement(_reactRouter.Route, {
    name: "about",
    path: "about",
    handler: _sharedComponentsAboutController2["default"] }),
  _react2["default"].createElement(_reactRouter.Route, {
    name: "user",
    path: "user",
    handler: _sharedComponentsUserController2["default"] }),
  _react2["default"].createElement(_reactRouter.Route, {
    name: "faq",
    path: "faq",
    handler: _sharedComponentsFAQController2["default"] }),
  _react2["default"].createElement(_reactRouter.Route, {
    name: "forum",
    path: "forum",
    handler: _sharedComponentsForumController2["default"] })
);
module.exports = exports["default"];