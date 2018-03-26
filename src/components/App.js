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
    this.handleNewMood= this.handleNewMood.bind(this);
		this.state = {
			date: '',
			mood:'',
      msg: '',
      moodTotal:[],
      newMood:[]
	}
}
  componentWillUpdate(nextPorps, nextState){
      localStorage.setItem('moodTotal', JSON.stringify(nextState.moodTotal));
    }
  componentWillMount(nextPorps, nextState){
      localStorage.getItem('moodTotal') && this.setState ({
        moodTotal: JSON.parse(localStorage.getItem('moodTotal')),
      });
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
       mood: moodValue
  })
  };
  handleMsg (event) {
    const msgValue = event.target.value;
    this.setState ({
       msg: msgValue
  })
  };
  handleNewMood (event) {
    let newMood = this.state.newMood
    newMood.push({
      mood: this.state.moodValue,
      date: this.state.dateValue,
      msg: this.state.msg
    })
    this.setState ({
       moodTotal: newMood
  })
  };



  render() {
console.log(this.state.moodTotal)
    return (
      <div className="App">
      <main className="main">
      <Switch>
         <Route exact path='/' render={() =>
          <Editor
            mood={this.state.mood}
            date={this.state.date}
            msg={this.state.msg}
            handleDate = {this.handleDate}
            handleMood = {this.handleMood}
            handleMsg = {this.handleMsg}
            handleNewMood = {this.handleNewMood}
          />
        }/>
        <Route path='/calendar' render={() =>
         <Calendar moodTotal = {this.state.moodTotal} />
       }/>
      </Switch>
      </main>
      </div>
    );
  }
}

export default App;
