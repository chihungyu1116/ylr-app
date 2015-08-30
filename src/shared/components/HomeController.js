import React from "react";
import SearchController from "./SearchController";
import HeaderController from "./HeaderController";
 
export default class HomeController extends React.Component {  

  componentDidMount() {
    console.log('barboo')
  }

  render() {
    return (
      <div>
        <HeaderController/>
        <SearchController/>
      </div>
    )
  }
}