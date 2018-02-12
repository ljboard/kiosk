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
          <div style={{height: 550}}>
            <img name={type.name} 
              src={this.props.injuries[type.name] ? type.black : type.white} 
              style={{marginTop: 140}} width={250} height={250} 
            />
          </div>
          <span className="injuryOptionLabel">{type.name}</span>
      </div>
    );
    return (
      <div className="InjuryType" style={{textAlign: "center"}}>
        <h1>INJURIES</h1>
        <div style={{height: 100}}></div><div>
          {injuryTypeOptions}
        </div>
        <img 
          style={{position: "fixed", bottom: 100, right: 120}}
          src={orangeArrow} 
          width={450}
          height={200}
          onClick={() => {this.props.onContinueClick("finished")}} />
      </div>
    );
  }
}

export default InjuryType;