import React, { Component } from 'react';
import City from '../component/city.js';

class Home extends Component {
    constructor(props) {
    super(props);
    // Se crea los estados para almacenar los valores del api
    this.state = {
      items: [],
      term:''
    };
     this.searchHandler = this.searchHandler.bind(this);
  }

  componentDidMount() {
      fetch('https://api.coinmarketcap.com/v1/ticker/?limit=10')        
      .then(results => {
        return results.json()
      })
      .then( data => {
        this.setState({ items: data});
      });
    }
   searchHandler(event){
        this.setState({term:event.target.value})
    }
  render() {
    return (
      <div className="App">
      <div className="container">
        <input onChange={this.searchHandler} type="text" className="form-plusel float-right my-2" id="search" aria-describedby="search"
                             placeholder="Type to filter"/>
      </div>
        <City term={this.state.term} searchHandler={this.searchHandler}  items={this.state.items}/>
      </div>
    );
  }
}

export default Home;
