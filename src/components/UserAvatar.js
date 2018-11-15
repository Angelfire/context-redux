import React from 'react';
import { UserConsumer } from '../UserContext';

const UserAvatar = ({ size }) => (
    <UserConsumer>
      {user => (
        <img
          className={`user-avatar ${size || ""}`}
          alt="user avatar"
          src={user.avatar}
        />
      )}
    </UserConsumer>
  );

export default UserAvatar;
