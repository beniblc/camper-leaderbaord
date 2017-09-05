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
                    <th>Avatar</th>
                    <th>User Name</th>
                    <th>All Time</th>
                    <th>Recent</th>
                    <th>Last Update</th>
                </tr>
                { UserItems }
            </tbody>
        </table>
    )

}

export default Leaderboard;