import React from "react";
import SearchController from "./SearchController";
import HeaderController from "./HeaderController";
 
export default class HomeController extends React.Component {  
  render() {
    return (
      <div>
        <h1>Home</h1>
        <HeaderController/>
        <SearchController/>
      </div>
    )
  }
}