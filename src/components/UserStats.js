import React from 'react';
import UserAvatar from './UserAvatar';
import { UserConsumer } from '../UserContext';

const UserStats = () => (
    <UserConsumer>
      {user => (
        <div className="user-stats">
          <div>
            <UserAvatar user={user} />
            {user.name}
          </div>
          <div className="stats">
            <div>{user.followers} Followers</div>
            <div>{user.following} Following</div>
          </div>
        </div>
      )}
    </UserConsumer>
  );

export default UserStats;
