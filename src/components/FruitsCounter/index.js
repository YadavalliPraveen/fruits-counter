import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  mangoCount = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  bananaCount = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="yellow-container">
        <div className="content-container">
          <h1 className="heading">
            Bob ate <span className="count">{mangoCount}</span> mangoes
            <span className="count"> {bananaCount}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="mango-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                onClick={this.mangoCount}
                className="fruit-button"
                type="button"
              >
                Eat mango
              </button>
            </div>
            <div className="banana-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                onClick={this.bananaCount}
                className="fruit-button"
                type="button"
              >
                Eat banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
