import React, { Component } from 'react'

export default class BarChart extends Component {
  
  render() {
    console.log(this.props.stock)
    return (
      <div>
        This is the Barchart API page.
        <div className="row">
            <div className="col-12">
              <form id="stockForm" onSubmit={this.props.onStockSubmit}>
                <div className="form-group">
                  <label form="term">Search Stocks</label>
                  <input name="stocks" type="text" className="form-control" placeholder="search by tickers, separate by commas" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        <table className="table">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Opening</th>
            <th>Closing</th>
            <th>Current</th>
          </tr>
          {this.props.stock.results ? this.props.stock.results.map((e, key) =>
          <tr key={key}>
            <td>{e.name}</td>
            <td>{e.symbol}</td>
            <td>{e.open}</td>
            <td>{e.close}</td>
            <td>{e.lastPrice}</td>
          </tr>
        ) : <tr></tr>}
        </tbody>
        </table>
        
      </div>
    )
  }
}
