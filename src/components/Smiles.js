import React from 'react';
import Happy from '../images/Happy.png';
import Sad from '../images/Sad.png';


class Smiles extends React.Component {
  render () {
    return (
        <div className="smiles_box" title={this.props.date}>
        {this.props.mood === 'happy'?
          <img className="emoji" src={Sad} alt={this.props.mood} /> : <img className="emoji" src={Happy} alt={this.props.mood}/>}

          <div className="reason_box">
            {this.props.msg !== ''? <p className="reason">{this.props.msg}</p> : ''}
          </div>
        </div>
    );
  }
}

export default Smiles;
