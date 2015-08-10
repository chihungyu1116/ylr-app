import React from "react";
import {RouteHandler} from "react-router";
 
export default class AppController extends React.Component {  
  render() {
    return (
      <div>
        <h1>App</h1>
        <RouteHandler/>
      </div>
    )
  }
}