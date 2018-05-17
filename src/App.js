import React, { Component } from 'react';
import './App.css';
import Search from './Components/Search';
import MainTemp from './Components/MainTemp';
import Forecast from './Components/Forecast';
import axios from 'axios';

// normally the API would be kept secret in a .env
// but this app doesn't require a backend so to keep it concise
// I included the key here
const KEY = 'd91c84d826dba76338a8ba8e91d55ab4';
const URL = 'http://api.openweathermap.org/data/2.5/forecast?q=';

let d = new Date();
let month = d.getMonth();
let day = d.getDate();

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      weather: null,
      month,
      day
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      search: e.target.value
    })
  }

  clearSearch = e => {
    this.setState({
      search: ''
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    let search = this.state.search;
    axios.get(`${URL + search},us&APPID=${KEY}&units=imperial`).then( res => {
      this.setState({
        weather: res.data
      })
    })
  }

  render() {
    if (this.state.weather) {
      let length = this.state.weather.list.length
      return (
        <div id='grid'>
          <Search
            onHandleSubmit={e => this.handleSubmit(e)}
            handleChange={e => this.handleChange(e)}
            clearSearch={e => this.clearSearch(e)}
          />
          <MainTemp weather={this.state.weather.list[0]} />
          <div id='temp-footer'>
            <Forecast weather={this.state.weather.list[8]} month={this.state.month} day={this.state.day + 1} />
            <Forecast weather={this.state.weather.list[16]} month={this.state.month} day={this.state.day + 2} />
            <Forecast weather={this.state.weather.list[24]} month={this.state.month} day={this.state.day + 3} />
            <Forecast weather={this.state.weather.list[32]} month={this.state.month} day={this.state.day + 4} />
            <Forecast weather={this.state.weather.list[length - 1]} month={this.state.month} day={this.state.day + 5} />
          </div>
        </div>
      )
    } else {
      return (
        <div id='grid'>
          <Search
            onHandleSubmit={e => this.handleSubmit(e)}
            handleChange={e => this.handleChange(e)}
            clearSearch={e => this.clearSearch(e)}
          />
          <p> </p>
          <div id='temp-footer'>
            <p>Search a US city to see the 5 day forecast</p>
          </div>
        </div>
      );
    }
  }
}

export default App;
