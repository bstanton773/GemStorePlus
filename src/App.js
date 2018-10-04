import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import {Switch, Route} from 'react-router-dom';
import Home from './components/views/Home';
import Weather from './components/views/Weather';
import BarChart from './components/views/Barchart';
import Racer from './components/views/Racer';

class App extends Component {
  constructor() {
    super()

    this.state = {
      cart: [],
      cartTotal: 0,
      gems: [],
      weather: [],
      stock: [],
      states: []
    };
  }

  updateCartTotal = () => {
    let existingTotal = this.state.cartTotal;
    existingTotal = 0;
    this.state.cart.forEach(item => {
      existingTotal += item.price;
    });
    return this.setState({
      cartTotal: existingTotal
    })
  }

  addToCart = cartItem => {
    let currentCart = this.state.cart;
    currentCart.push(cartItem);
    this.setState({
      cart: currentCart
    });
    this.updateCartTotal();
  };

  emptyCart = () => this.setState({cart: [], cartTotal: 0});

  stockSubmit = e => {
    e.preventDefault();
    const stocks = e.target.elements.stocks.value;
    fetch("https://marketdata.websol.barchart.com/getQuote.json?apikey=cc048fcaa152b53be52861b5041ed90e&symbols=" + stocks)
      .then(response => response.json())
      .then(json => this.setState({stock: json}));
  }

  searchSubmit = e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const state = e.target.elements.state.value;
    fetch("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + city + " " + state + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys")
      .then(response => response.json())
      .then(json => this.setState({weather: json}));
  }

  componentDidMount() {
    fetch("data/gems.json")
      .then(response => response.json())
      .then(json => this.setState({gems: json}));
    fetch("data/states.json")
      .then(response => response.json())
      .then(json => this.setState({states: json}));
  }

  render() {
    return (
      <div>
        <Navigation onEmptyCart={this.emptyCart} cart={this.state.cart} cartTotal={this.state.cartTotal} />
        <div className="container">
          <Switch>
            <Route exact path="/" render={() => <Home gems={this.state.gems} onAddToCart={this.addToCart} />}></Route>
            <Route exact path="/weather" render={() => <Weather weather={this.state.weather} onSearchSubmit={this.searchSubmit} states={this.state.states}/>}></Route>
            <Route exact path="/barchart" render={() => <BarChart stock={this.state.stock} onStockSubmit={this.stockSubmit}/>}></Route>
            <Route exact path="/f1-racer" component={Racer}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
