import React, { Component } from 'react';
import '../App.css';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <h1 style={{paddingTop: 250}}>WELCOME</h1>
        <h2>Click below to start.</h2>
        <div id="buttonWrapper">
          <button className="startButton" 
            onClick={() => {this.props.onContinueClick("personalInfo")}}>
              START
          </button>
        </div>
      </div>
    );
  }
}

export default HomePage;