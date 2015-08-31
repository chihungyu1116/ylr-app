import searchStyle from '../../sass/search.scss';
import React from "react";

export default class SearchController extends React.Component {
  static fetchData() {
    console.log('foo search')
  }

  constructor(props) {    
    super(props);
    this.state = {destValue: ''}
  }

  handleSubmit() {

  }

  handleDestInput(event) {
    this.setState({destValue: event.target.value});
  }

  render() {
    return (
      <div>
        <h3>Smart Choice = Perfect Travel</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleDestInput}/>
          <button type="submit">SEARCH</button>
        </form>
      </div>
    )
  }
}