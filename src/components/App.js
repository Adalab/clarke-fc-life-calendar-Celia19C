import React, { Component } from 'react';
import Calendar from './Calendar';
import Editor from './Editor';

import { Route, Switch } from 'react-router-dom';




class App extends Component {
  constructor(props) {
		super(props)
		this.handleDate = this.handleDate.bind(this);
    this.handleMood= this.handleMood.bind(this);
    this.handleMsg = this.handleMsg.bind(this);
		this.state = {
			date: [],
			mood:'',
      msg: ''
		}
	}

  handleDate (event) {
    const dateValue = event.target.value;
    this.setState ({
       date: dateValue
  })
};
handleMood (event) {
  const moodValue = event.target.value;
  this.setState ({
     mood: moodValue,
})
console.log(this.state.mood)
};
handleMsg (event) {
  const msgValue = event.target.value;
  this.setState ({
     msg: msgValue,
})
console.log(this.state.msg)
};



  render() {

    return (
      <div className="App">
      <main className="main">
      <Switch>
         <Route path='/' render={() =>
          <Editor
            mood={this.state.mood}
            date={this.state.date}
            msg={this.state.msg}
            handleDate = {this.handleDate}
            handleMood = {this.handleMood}
            handleMsg = {this.handleMsg}
          />
        }/>
      </Switch>
      </main>
      </div>
    );
  }
}

export default App;
