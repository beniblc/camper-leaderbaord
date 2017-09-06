import React, { Component } from 'react';
import LeaderboardItems from './leaderboard-items.js';

const Leaderboard = (props) => {
    const UserItems = props.users.map((user) => {
        return(
            <LeaderboardItems key={user.username} user={user} />
        )
    });

    return (
        <table>
            <tbody>
                <tr>
                    <th id="ava"></th>
                    <th className="name">User Name</th>
                    <th className="info" onClick={() => props.tester() } >All Time</th>
                    <th className="info" onClick={() => {console.log('place2') } }>Last 30 Days</th>
                </tr>
                { UserItems }
                <tr><td colSpan="4">test </td></tr>
            </tbody>
        </table>
    )

}

export default Leaderboard;