import React from 'react';
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
        <input className="happy"  type="radio" name="happy" value="happy" onClick={this.props.handleMood}/>
        <label htmlFor="happy_"> :)</label>
        </div>
        <div className="sad_mood">
        <input className="sad"  type="radio" name="sad" value="sad" onClick={this.props.handleMood} />
        <label htmlFor="sad"> :(</label>
        </div>
        <div className={` ${ this.props.mood === 'happy'? '' : 'invisible' }`}>
        <label className="label msg" htmlFor="msg">¿Por qué es un buen día?</label>
        <input className="msg" type="text" name="msg" onChange={this.props.handleMsg} />
        </div>
          <div className="buttons">
        <button onClick={this.props.handleNewMood} type="submit" className="save"><Link to='/calendar'>Guardar</Link></button>
        <button className="cancel"><Link to='/'>Cancelar</Link></button>
        </div>
        </div>
      </form>

      </div>
    );
  }
}

export default Editor;
