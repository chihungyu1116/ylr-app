import React from "react";
import {Link} from "react-router";
 
export default class HeaderController extends React.Component {  
  render() {
    return (
      <nav>
        <Link to='/'>Ylr Travel</Link>
        <Link to="/user">User</Link>
        <Link to="/about">About</Link>
      </nav>
    )
  }
}