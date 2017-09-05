import React, { Component } from 'react';

class LeaderboardItems extends Component {
  
  constructor() {
    super();

    this.state={
      users: [],
      headers: []
    };
  }



  componentDidMount() {
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent#')
    .then(result=> result.json())
    .then(users => this.setState({ users }) )
  }

  render() {
    const headings = this.state.users[0];

    return (
      <ul>
        { 
          this.state.users.length ?
          this.state.users.map( user=>
          <li key={ user.username }>{ user.alltime }</li>) 
          : <li> Loading... </li>
        }      
      </ul> 
      
    );
  }
}

export default LeaderboardItems;

//Object.keys(arr)