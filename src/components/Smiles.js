import React from 'react';
import Happy from '../images/Happy.png';
import Sad from '../images/Sad.png';


class Smiles extends React.Component {

  dateToday () { //Como estoy teniendo problemas para pasar el valor de lafecha, pues utilizo esta función y así automáticamente se seleleciona la fecha del día en el que se está.
     let today = new Date();
     let dd = today.getDate();
     let mm = today.getMonth()+1;
     let yyyy = today.getFullYear();

     return today = mm + '/' + dd + '/' + yyyy;
   }

   render() {
     const date = this.dateToday();
    return (
        <div className="smiles_box" title={this.props.date}>
        {this.props.mood === 'happy'?
          <img className="emoji" src={Happy} alt={this.props.mood} /> : <img className="emoji" src={Sad} alt={this.props.mood}/>}
          <div className="date_box">
           {this.dateToday()}
          </div>
          <div className="reason_box">
            {this.props.msg !== ''? <p className="reason">{this.props.msg}</p> : ''}
          </div>
        </div>
    );
  }
}

export default Smiles;
