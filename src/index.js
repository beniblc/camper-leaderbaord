import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Leaderboard from './components/leaderboard';

class App extends Component {

  constructor(props) {
    super(props);

    this.state={
      users: []
    };
  }

  AllTime = () => {
      users.sort((a, b) => {
      return b.alltime -a.alltime;
    });
    console.log(users[0]);
  }

  Recent = () => {
      users.sort((a, b) => {
      return b.recent -a.recent;
    });
    console.log(users[0]);
  }

  test = () => {
    console.log(users[0]);
  }

  componentDidMount() {
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent#')
    .then(result=> result.json())
    .then(users => this.setState({ users }) );
  }

  render() {
    return(
      <div>
        <h1>Camper Leaderboard</h1>
        <Leaderboard
          users={ this.state.users } 
          tester={ this.test } />
      </div>
    )
  }

}

ReactDOM.render(
    <App />,
     document.querySelector('.container'));
