import React, { Component } from 'react'
import WeatherTable from './WeatherTable'

export default class Weather extends Component {

  render() {
    return (
      <div>
        <main className="container">
          <div className="row">
            <div className="col-12">
              <form id="searchForm" onSubmit={this.props.onSearchSubmit}>
                <div className="form-group">
                <div className="row">
                  <input name="city" type="text" className="form-control col-6" placeholder="search city" />
                  <select name="state" className="form-control col-2" defaultValue="0">
                    <option value="0" disabled>Choose State</option>
                    {this.props.states ? this.props.states.map((e, key) =>
                    <option value={e.abbreviation} key={key}>{e.name}</option>
                    ) : ""}
                  </select>
                  <button type="submit" className="btn btn-primary col-2">Submit</button>
                </div>
                </div>
                
              </form>
            </div>
          </div>
          <WeatherTable weather={this.props.weather}/>
        </main>
      </div>
    )
  }
}
