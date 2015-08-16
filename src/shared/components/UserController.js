import React from "react";
import HeaderController from "./HeaderController";
 
export default class UserController extends React.Component {  
  render() {
    return (
      <div>
        <HeaderController/>
        <h1>User</h1>
      </div>
    )
  }
}