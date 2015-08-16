import React from "react";
import {Link} from "react-router";
 
export default class HeaderController extends React.Component {  
  render() {
    return (
      <nav>
        <Link to='/'>Ylr</Link>
        <Link to="/user-page">User</Link>
      </nav>
    )
  }
}