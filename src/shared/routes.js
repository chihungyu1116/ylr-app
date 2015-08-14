import { Route, DefaultRoute } from "react-router";  
import React from "react";

import HomeController from "./components/HomeController";
import AppController from "./components/AppController";
import AboutController from "./components/AboutController";
import ForumController from "./components/ForumController";
import FAQController from "./components/FAQController";
 
export default (  
  <Route name="app" path="/" handler={ AppController }>
    <DefaultRoute handler={ HomeController }/>
    <Route name="about" path="about" handler={ AboutController }/>
    <Route name="forum" path="forum" handler={ ForumController }/>
    <Route name="faq" path="faq" handler={ FAQController }/>
  </Route>
);