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
          users={ this.state.users } />
      </div>
    )
  }

}

ReactDOM.render(
    <App />,
     document.querySelector('.container'));
