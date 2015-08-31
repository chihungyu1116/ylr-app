import React from "react";
import SearchController from "./SearchController";
import HeaderController from "./HeaderController";
 
export default class HomeController extends React.Component {  

  static fetchData() {
    console.log('home bar')
    // should define fetchData for HeaderController and SearchController
  }

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