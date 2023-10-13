// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {timeLeft: 0 * 60}

  startBtnClicked = () => {
    this.intervalUniqueId = setInterval(() => {
      this.setState(prevState => ({
        timeLeft: prevState.timeLeft + 1,
      }))
    }, 1000)
  }

  stopBtnClicked = () => {
    clearInterval(this.intervalUniqueId)
  }

  resetBtnClicked = () => {
    clearInterval(this.intervalUniqueId)
    this.setState({
      timeLeft: 0 * 60,
    })
  }

  render() {
    const {timeLeft} = this.state
    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60
    return (
      <div className="bg">
        <h1>Stopwatch</h1>
        <div className="timerCardContainer">
          <div className="timerHeadContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <h1>Timer</h1>
          </div>
          <h1>
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </h1>
          <div className="btnContainer">
            <button
              type="button"
              className="btnEl btnStart"
              onClick={this.startBtnClicked}
            >
              Start
            </button>
            <button
              type="button"
              className="btnEl btnStop"
              onClick={this.stopBtnClicked}
            >
              Stop
            </button>
            <button
              type="button"
              className="btnEl btnReset"
              onClick={this.resetBtnClicked}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
