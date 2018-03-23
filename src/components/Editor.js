import React from 'react';

class Editor extends React.Component {
  render() {
    return (
      <div>
        <form className='form'>
        <div className="form_details">
          <label className="label date" for="date">Fecha</label>
          <input className="date2" type="date" name="date" />
          <label className="label mood" for="mood">Estado</label>
          <div className="happy_mood">
          <input className="happy" type="checkbox" name="happy" />
          <label for="happy"> :)</label>
          </div>
          <div className="sad_mood">
          <input className="sad" type="checkbox" name="sad" />
          <label for="sad"> :(</label>
          </div>
          <label className="label msg" for="msg">Mensaje</label>
          <input className="msg" type="text" name="msg" value="¿Por qué es un buen día?"/>
          <input type="submit" className="save" value="GUARDAR" />
          <input type="submit" className="cancel" value="CANCELAR" />
        </div>
        </form>
      </div>
    );
  }
}

export default Editor;
