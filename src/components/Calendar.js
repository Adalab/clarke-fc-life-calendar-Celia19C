import React from 'react';
import { Link } from 'react-router-dom';

class Calendar extends React.Component {
  render(){
  return (
      <div>
        <header>
        <button type="button" name="button" className="button-calendar"><Link to='/'> + </Link></button>

        </header>
        <div>


        </div>
      </div>
    )
  }
}

export default Calendar;
