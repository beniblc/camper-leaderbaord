import React, { Component } from 'react';
import LeaderboardItems from './leaderboard-items.js';

const Leaderboard = (props) => {
    const UserItems = props.users.map((user) => {
        return(
            <LeaderboardItems key={user.username} user={user} />
        )
    });

    const AllTime = props.users.map((user) => {
        console.log(user.username);
    });

    return (
        <table>
            <tbody>
                <tr>
                    <th id="ava"></th>
                    <th className="name">User Name</th>
                    <th className="info" onClick={ AllTime } >All Time</th>
                    <th className="info">Last 30 Days</th>
                </tr>
                { UserItems }
                <tr><th>}</th></tr>
            </tbody>
        </table>
    )

}

export default Leaderboard;