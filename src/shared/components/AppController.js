import baseStyle from '../../sass/base.scss';
import React from "react";
import {RouteHandler} from "react-router";
 
export default class AppController extends React.Component {  

  getState() {
    console.log('foo')
  }


  render() {
    return (
      <div>
        <RouteHandler/>
      </div>
    )
  }
}