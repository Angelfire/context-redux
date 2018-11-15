import React from 'react';
import UserAvatar from './UserAvatar';

export const UserStats = ({ user }) => (
    <div className="user-stats">
        <div>
            <UserAvatar user={user} />
            <p>{user.name}</p>
        </div>
        <div className="stats">
            <div>{user.followers} Followers</div>
            <div>{user.following} Following</div>
        </div>
    </div>
);

export default UserStats;
