import React, { Component } from 'react';
import '../App.css';
import smiley from '../icons/smiley.png';

class ConfirmationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: null
    }
  }
  componentWillUnmount = () => {
    clearInterval(this.timer);
  }

  componentWillMount() {
    const time = new Date();
    this.setState({startTime: time.getSeconds()});

    this.timer = setInterval(() => this.props.onContinueClick("homepage"), 5000);
  }

  render() {
    return (
      <div className="ConfirmationPage" 
        style={{textAlign: "center"}}>
        <h1>THANK YOU</h1>
        <h2>Please take your band.</h2>
        <img 
          src={smiley}
          width={450} height={400} 
        />

        <h2 style={{color: "#ffcd2b"}}>Your estimated wait time is 
          <span style={{color: "#683b0f", fontSize: 90 }}>
            {this.props.waitTime}
          </span>
        .</h2>
      </div>
    );
  }
}

export default ConfirmationPage;