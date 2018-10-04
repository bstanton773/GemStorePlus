import React, { Component } from 'react'
import GemItem from '../GemItem';

export default class GemList extends Component {
  render() {
    console.log(this.props.gems)
    return (
      <div>
        <div className="row">
          {this.props.gems.map((gem, key) => <GemItem key={gem.id} gem={gem} onAddToCart={this.props.onAddToCart} />)}
        </div>
      </div>
    )
  }
}
