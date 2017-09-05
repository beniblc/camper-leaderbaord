import React from 'react';

const LeaderboardItems = ({user}) => {

  return (
    <tr>
      <th><img src= {user.img} height="42" width="42"/></th>
      <th>{user.username}</th>
      <th>{user.alltime}</th>
      <th>{user.recent}</th>
      <th>{user.lastUpdate}</th>
    </tr>   
  ) 
};

export default LeaderboardItems;