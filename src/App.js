import React, { Component } from 'react';
import HomePage from './components/homepage';
import PersonalInfo from './components/personalInfo';
import HeartRate from './components/heartRate';
import ConfirmationPage from './components/confirmationPage';
import InjuryType from './components/injuryType';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: "injuryType", 
      user: {
        name: "", 
        birth: "", 
        ssn: "", 
        heartRate: 0, 
        injuryTypes: {
          "INTERNAL": false,
          "BONE": false,
          "EXTERNAL": false
        }, 
        medicalHistory: [],
      }
    };
    this.onNameInput = this.onNameInput.bind(this);
    this.onDateInput = this.onDateInput.bind(this);
    this.onSSNInput = this.onSSNInput.bind(this);
    this.onInjuryTypeInput = this.onInjuryTypeInput.bind(this);

    this.onContinueClick = this.onContinueClick.bind(this);
  }

  onNameInput(e) {
    let newState = Object.assign({}, this.state); 
    newState.user.name = e.target.value; 
    this.setState(newState); 
    console.log(this.state);
  }

  onContinueClick(step) {
    let newState = Object.assign({}, this.state); 
    newState.step = step; 
    this.setState(newState); 
    console.log(this.state);
  }

  onDateInput(e) {
    let newState = Object.assign({}, this.state); 
    newState.user.birth = e.target.value; 
    this.setState(newState); 
    console.log(this.state);
  }

  onSSNInput(e) {
    let newState = Object.assign({}, this.state); 
    newState.user.ssn = e.target.value; 
    this.setState(newState); 
    console.log(this.state);
  }

  onInjuryTypeInput(e) {
    let newState = Object.assign({}, this.state); 
    const prevInjuries = newState.user.injuryTypes[e.target.name];
    newState.user.injuryTypes[e.target.name] = !prevInjuries;
    
    this.setState(newState); 
    console.log(e.target.name);
    console.log(this.state);
  }

  render() {
    switch(this.state.step) {
      case "intro": 
        return <HomePage 
          onContinueClick={this.onContinueClick} />;
      case "personalInfo": 
        return <PersonalInfo 
          onNameInput={this.onNameInput}
          onDateInput={this.onDateInput}
          onSSNInput={this.onSSNInput}
          onContinueClick={this.onContinueClick}/>;
      case "heartRate": 
        return <HeartRate 
          onContinueClick={this.onContinueClick}/>;
      case "injuryType": 
        return <InjuryType 
          onInjuryTypeInput={this.onInjuryTypeInput}
          injuries={this.state.user.injuryTypes}
          onContinueClick={this.onContinueClick} />;
      case "finished": 
        return <ConfirmationPage 
          name={this.state.user.name}
          waitTime={" " + Math.floor(Math.random()*100) + " minutes"} 
          onContinueClick={this.onContinueClick} />;
      default: 
        return <HomePage 
          onNameInput={this.onNameInput}
          onContinueClick={this.onContinueClick} />;

    }
  }
}

export default App;
