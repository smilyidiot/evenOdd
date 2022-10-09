// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  button = () =>
    this.setState(prevState => ({
      count: Math.round(Math.random(prevState.count) * 100, 2),
    }))

  number = () => {
    const {count} = this.state
    if (count % 2 === 0) {
      return 'Even'
    }
    return 'Odd'
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-cont">
        <div className="card">
          <h1 className="head">Count {count}</h1>
          <p className="para">Count is {this.number()}</p>
          <button className="bton" type="button" onClick={this.button}>
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
