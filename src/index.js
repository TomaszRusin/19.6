
import React from 'react'
import ReactDOM from 'react-dom'
  
  class Stopwatch extends React.Component {
    constructor(props) {
      super(props);
      
      ["update", "reset", "toggle"].forEach((method) => {
          this[method] = this[method].bind(this);
      });
  
      this.state = this.initialState = {
        isRunning: false,
        timeElapsed: 0,
      };
    }
    toggle() {
      this.setState({isRunning: !this.state.isRunning}, () => {
        this.state.isRunning ? this.startTimer() : clearInterval(this.timer)
      });
    }
    reset() {
      clearInterval(this.timer);
      this.setState(this.initialState);
    }
    startTimer() {
      this.startTime = Date.now();
      this.timer = setInterval(this.update, 10);
    }
    update() {
      const delta = Date.now() - this.startTime;
      this.setState({timeElapsed: this.state.timeElapsed + delta});
      this.startTime = Date.now();
    }
    render() {
      const {isRunning, timeElapsed} = this.state;
      return (
        <div>
          <Counter id="timer" timeElapsed={timeElapsed} />
          <button onClick={this.toggle}>
            {isRunning ? 'Stop' : 'Start'}
          </button>
          <button
            onClick={this.reset}
            disabled={!isRunning && !timeElapsed}
           >
             Reset
          </button>
        </div>
      );
    }
  }
  
  class Counter extends React.Component {
    getUnits() {
      const seconds = this.props.timeElapsed / 1000;
      return {
        min: Math.floor(seconds / 60).toString(),
        sec: Math.floor(seconds % 60).toString(),
        msec: (seconds % 1).toFixed(3).substring(2)
      };
    }
    render() {
      const units = this.getUnits();
      return (
        <div id={this.props.id}>
          <span>{units.min}:</span>
          <span>{units.sec}.</span>
          <span>{units.msec}</span>
        </div>
      );
    }
  }
  
  ReactDOM.render(
      <Stopwatch />, 
    document.getElementById('root')
  );
  