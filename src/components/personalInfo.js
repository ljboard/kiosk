import React, { Component } from 'react';
import '../App.css';
import whiteArrow from '../icons/whiteArrow.jpg';

class PersonalInfo extends Component {
  render() {
    return (
      <div className="PersonalInfo">
        <h1>PERSONAL INFO</h1>
        <div className="infoSectionWrapper">
          <div className="infoSection">
            <h3>NAME</h3>
            <input type="text"
              onChange={this.props.onNameInput} />
          </div>
          <div className="infoSection">
            <h3>BIRTHDATE</h3>
            <input type="text"
              onChange={this.props.onDateInput} />
          </div>
          <div className="infoSection">
            <h3>SOCIAL SECURITY NUMBER </h3>
            <input type="number"
              onChange={this.props.onSSNInput} />
          </div>
        </div>
        <img 
          style={{position: "fixed", bottom: 30, right: 40}}
          src={whiteArrow} 
          width={225}
          height={100}
          onClick={() => {this.props.onContinueClick("heartRate")}} />
      </div>
    );
  }
}

export default PersonalInfo;