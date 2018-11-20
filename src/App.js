import React, { Component } from 'react';
import './App.css';
import LDClient from 'ldclient-js';

class App extends Component {
  constructor () {
    super ()
    this.state = {
      weatherRange: null,
      days: [
        { name: 'Monday', description: 'Cloudy', high: 65.2, low: 55.5, airQuality: 'Unhealthy' },
        { name: 'Tuesday', description: 'Cloudy', high: 65.2, low: 55.5, airQuality: 'Unhealthy'},
        { name: 'Wednesday', description: 'Cloudy', high: 65.2, low: 55.5, airQuality: 'Very Unhealthy'},
        { name: 'Thursday', description: 'Partly Cloudy', high: 65.2, low: 55.5, airQuality: 'Very Unhealthy'},
        { name: 'Friday', description: 'Cloudy', high: 65.2, low: 55.5, airQuality: 'Moderate Unhealthy'},
        { name: 'Saturday', description: 'Sunny', high: 65.2, low: 55.5, airQuality: 'Moderate Unhealthy'},
        { name: 'Sunday', description: 'Sunny', high: 65.2, low: 55.5, airQuality: 'Good'}
      ]
    }
  }

  componentDidMount () {
    const user = {
      key: '123456'
    }
    this.ldclient = LDClient.initialize('5bf3854f8b34c34b45896257', user);
    this.ldclient.on('ready', this.onReady.bind(this));
  }

  onReady() {
    console.log('test:', this.ldclient.variation('show-air-quality'));
  }
  render() {
    let range = undefined
    if (this.state.weatherRange === 'week') {
      range = 'test'
    }
    return (
      <div className="App">
        <div>
          {this.state.days.sort(range).map(day =>
            <div>{day.name}</div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
