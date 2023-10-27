import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    count: 0,
  }

  onRandomNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({count: randomNumber})
    console.log(randomNumber)
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            onClick={this.onRandomNumber}
            className="button"
            type="button"
          >
            Generate
          </button>
          <p className="result">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
