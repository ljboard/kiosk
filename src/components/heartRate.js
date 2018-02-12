import React, { Component } from 'react';
import '../App.css';
import whiteArrow from '../icons/whiteArrow.jpg';

class HeartRate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: 0, 
      timeElapsed: 0,
      step: "instructions", // "waiting", "finished"
    };
  };

  componentWillMount() {
    const startTime = new Date();
    
    let newState = Object.assign({}, this.state);
    newState.startTime = startTime;
    this.setState(newState);

    const countdown = () => {
      newState.startTime = startTime;
      const currentTime = new Date();
      newState.timeElapsed = (currentTime - this.state.startTime)/1000;

      if (newState.timeElapsed >= 7.5) {
        clearInterval(this.timer);
        newState.step = "finished"
      } else if (newState.timeElapsed >= 2.5) {
        newState.step = "waiting";
      } 
      this.setState(newState); 
    }
    this.timer = setInterval(countdown, 20);
  }

  componentWillUnmount = () => {
    clearInterval(this.timer);
  }

  render() {
    const instructions = (
      <div>
        <h2>Please place your hand on the sensor as shown.</h2>
      </div>
    );
    const waiting = (
      <div>
        <h2>Please hold your hand steady.</h2>
        <div style={{width:"100%",marginTop: 100}}>
          <div style={{
            width:(7.5-this.state.timeElapsed)*20 + "%", 
            height: 200, 
            backgroundColor:"#ffcd2b"}}>
          </div>
        </div>
      </div>
    );
    const finished = (
      <div>
        <h2>Measurement successful.</h2>
        <img 
          style={{position: "fixed", bottom: 100, right: 120}}
          src={whiteArrow} 
          width={450}
          height={200}
          onClick={() => {this.props.onContinueClick("injuryType")}} />
      </div>      
    )
    let heartRateInfo;
    switch (this.state.step) {
      case "instructions":
        heartRateInfo = instructions;
        break; 
      case "waiting": 
        heartRateInfo = waiting;
        break; 
      case "finished": 
        heartRateInfo = finished;
        break; 
      default:
        heartRateInfo = <h4>ERROR</h4>;
        break; 
    }

    return (
      <div className="HeartRate">
        <h1>HEART RATE</h1>
        { heartRateInfo }
      </div>
    );
  }
}

export default HeartRate;