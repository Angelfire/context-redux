import React, { Component } from 'react';
import UserAvatar from './components/UserAvatar';
import Nav from './components/Nav';
import Body from './components/Body';
import UserStats from './components/UserStats';
import Content from './components/Content';

import './App.css';

class App extends Component {
    state = {
      user: {
        avatar: "https://www.gravatar.com/avatar/ae8006fddac9d723c41b99bedc9c6132",
        name: "Ａｎｄｒｅｓ⠠⠵",
        followers: 3249,
        following: 732
      }
    };
  
    render() {
        const { user } = this.state;
    
        return (
            <div className="app">
                <Nav>
                    <UserAvatar user={user} size="small" />
                </Nav>
                <Body
                    sidebar={<UserStats user={user} />}
                    content={<Content />}
                />
            </div>
        );
    }
}

export default App;
