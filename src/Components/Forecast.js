import React, { Component } from 'react';

let months = {
  0: 'Jan',
  1: 'Feb',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'Aug',
  8: 'Sept',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec'
}

let iconURL = 'http://openweathermap.org/img/w/';

class Forecast extends Component {

  toCel(deg) {
    return Math.round((deg - 32) / 1.8);
  }

  render() {
    let weather = this.props.weather;
    let month = months[this.props.month];
    let url = `${iconURL}${this.props.weather.weather[0].icon}.png`

    return (
      <div className='forecast'>
        <p className='date'>{month} {this.props.day}</p>
        <img src={url} alt={this.props.weather.weather[0].main} />
        <p className='forecase-temp'>{Math.round(weather.main.temp)}</p>
        <p className='celsius'>{this.toCel(weather.main.temp)}</p>
      </div>
    )
  }
}

export default Forecast;
