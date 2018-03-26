import React from 'react';
import { Link } from 'react-router-dom';
import Mas from '../images/mas.png'
import Smiles from './Smiles';

class Calendar extends React.Component {




paintSmiles (){
  return (
    <div className="smile_calendar">
      <ul>
        {this.props.moodTotal.sort(function(a,b) {
          return new Date(a.date) - new Date(b.date);}).map((cr) =>
            <li key={cr.date}>
              <Smiles
                date={cr.date}
                mood={cr.mood}
                msg= {cr.msg}
              /></li>)}
      </ul>
    </div>
  )
}
render() {

  return (
      <div>
        <header>
        <Link to='/'> <img className="plus_img" src={Mas}/>  </Link>
        </header>
        <div>
         {this.paintSmiles()}
        </div>
      </div>
    )
  }
}

export default Calendar;
