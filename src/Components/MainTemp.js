import React, { Component } from 'react';

class MainTemp extends Component {

  render() {
    let weather = this.props.weather;
    return (
      <div id='main-temp-box'>
        <p id='temp-num'>{Math.round(weather.main.temp)}&deg;</p>
        <div id='sub-flex'>
          <p className='degree'>F</p>
          <p>{weather.weather[0].description}</p>
          <p>{weather.main.humidity}% humidity</p>
        </div>
      </div>
    )
  }
}

export default MainTemp;
