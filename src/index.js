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

  AllTime = (users) => {
    users.sort((a, b) => {
      return b.alltime -a.alltime;
    });
    this.setState({ users });
  }

  Recent = (users) => {
      users.sort((a, b) => {
      return b.recent -a.recent;
    });
    this.setState({ users });
  }

  test = (users) => {
    console.log(this.state.users[0]);
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
          allTime={ this.AllTime } 
          recent={ this.Recent } />
      </div>
    )
  }

}

ReactDOM.render(
    <App />,
     document.querySelector('.container'));
