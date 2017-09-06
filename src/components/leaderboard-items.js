import React from 'react';

const LeaderboardItems = ({user}) => {

  return (
    <tr>
      <th><img src= {user.img} height="40" width="40"/></th>
      <th className="name">{user.username}</th>
      <th className="info">{user.alltime}</th>
      <th className="info">{user.recent}</th>
    </tr>   
  ) 
};

export default LeaderboardItems;