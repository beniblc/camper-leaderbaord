import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import Leaderboard from './components/leaderboard';
import LeaderboardItems from './components/leaderboard-items';

class App extends Component {

  render() {
    return(
      <div>
        <h1>Camper Leaderboard</h1>
        <LeaderboardItems />
      </div>
    )
  }

}

ReactDOM.render(
    <App />,
     document.querySelector('.container'));
