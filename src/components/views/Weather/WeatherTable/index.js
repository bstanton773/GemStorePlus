import React, { Component } from 'react'

export default class WeatherTable extends Component {
  render() {
    console.log(this.props.weather)
    return (
      <div>
        This is the WeatherTable Component.
        <table className="table">
          <tbody>
            <tr>
              <th>Current</th>
              <th>Low</th>
              <th>High</th>
              <th>Conditions</th>
              <th>Visibility</th>
            </tr>
            {this.props.weather.query && this.props.weather.query.results && this.props.weather.query.results.channel.item && this.props.weather.query.results.channel.item.forecast ?  this.props.weather.query.results.channel.item.forecast.map((e,key) => 
              <tr key={key}>
                <td>{this.props.weather.query.results.channel.item.condition.temp} + {this.props.weather.query.results.channel.item.condition.text}</td>
                <td>{e.low}</td>
                <td>{e.high}</td>
                <td>{e.text}</td>
                <td>{this.props.weather.query.results.channel.atmosphere.visibility}</td>
              </tr>
            ) : <tr></tr>}
            
          </tbody>
        </table>
      </div>
    )
  }
}
