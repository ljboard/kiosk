import React, { Component } from 'react';
import '../App.css';

// unselected icons
import bone_white from "../icons/bone_white.svg";
import external_white from "../icons/external_white.svg";
import internal_white from "../icons/internal_white.svg";

// selected icons
import bone_black from "../icons/bone_black.svg";
import external_black from "../icons/external_black.svg";
import internal_black from "../icons/internal_black.svg";

import orangeArrow from '../icons/orangeArrow.jpg';

class InjuryType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      injuryTypes: [
        { name: "INTERNAL", black: internal_black, white: internal_white },
        { name: "BONE",     black: bone_black,     white: bone_white },
        { name: "EXTERNAL", black: external_black, white: external_white } 
      ]
    };
  }

  onInjuryTypeInput(e) {
    
    this.props.onInjuryTypeInput(e);
  }

  render() {
    const injuryTypeOptions = this.state.injuryTypes.map((type, i) => 
      <div 
        className="injuryOption"
        onClick={this.props.onInjuryTypeInput}>
          <div style={{height: 225}}>
            <img name={type.name} 
              src={this.props.injuries[type.name] ? type.black : type.white} 
              style={{marginTop: 70}} width={125} height={125} 
            />
          </div>
          <span className="injuryOptionLabel">{type.name}</span>
      </div>
    );
    return (
      <div className="InjuryType" style={{textAlign: "center"}}>
        <h1>INJURIES</h1>
        <div style={{height: 50}}></div><div>
          {injuryTypeOptions}
        </div>
        <img 
          style={{position: "fixed", bottom: 30, right: 40}}
          src={orangeArrow} 
          width={225}
          height={100}
          onClick={() => {this.props.onContinueClick("finished")}} />
      </div>
    );
  }
}

export default InjuryType;