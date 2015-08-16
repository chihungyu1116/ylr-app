import { Route, DefaultRoute } from "react-router";  
import React from "react";

import HomeController from "./components/HomeController";
import AppController from "./components/AppController";
import AboutController from "./components/AboutController";
import ForumController from "./components/ForumController";
import FaqController from "./components/FAQController";
import UserController from "./components/UserController";
 
export default (  
  <Route path="/" handler={ AppController }>
    <DefaultRoute handler={ HomeController } />
    <Route path="about" handler={ AboutController } />
    <Route path="user" handler={ UserController } />
    <Route path="faq" handler={ FaqController } />
    <Route path="forum" handler={ ForumController } />
  </Route>
);