import React from 'react';

import Calendar from './Calendar';
import { Link } from 'react-router-dom';

class Editor extends React.Component {
  render() {
    return (
      <div>
      <form className='form'>
      <div className="form_details">
        <label className="label date" htmlFor="date">Fecha</label>
        <input className="date2" type="date" name="date" onChange={this.props.handleDate} />
        <label className="label mood" htmlFor="mood">Estado</label>
        <div className="happy_mood">
        <input className="happy" type="checkbox" name="happy" />
        <label htmlFor="happy"> :)</label>
        </div>
        <div className="sad_mood">
        <input className="sad" type="checkbox" name="sad" />
        <label htmlFor="sad"> :(</label>
        </div>
        <label className="label msg" htmlFor="msg">¿Por qué es un buen día?</label>
        <input className="msg" type="text" name="msg" onChange={this.handleMsg} />
        <button onClick={this.props.handleMood} type="submit" className="save"><Link to='/calendar'>Guardar</Link></button>
<button className="cancel"><Link to='/'>Cancelar</Link></button>
        </div>
      </form>

      </div>
    );
  }
}

export default Editor;
