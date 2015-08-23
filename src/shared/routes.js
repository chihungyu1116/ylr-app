import { Route, DefaultRoute } from "react-router";  
import React from "react";

import HomeController from "./components/HomeController";
import AppController from "./components/AppController";
import AboutController from "./components/AboutController";
import ForumController from "./components/ForumController";
import FaqController from "./components/FAQController";
import UserController from "./components/UserController";

export default (  
<Route name="app-view" path="/" handler={ AppController }>
  <Route
    name="home-view"
    path="/"
    handler={ HomeController } />
  <Route
    name="about-view"
    path="about"
    handler={ AboutController } />
  <Route
    name="user-view"
    path="user"
    handler={ UserController } />
  <Route
    name="faq-view"
    path="faq"
    handler={ FaqController } />
  <Route
    name="forum-view"
    path="forum"
    handler={ ForumController } />
</Route>
);

