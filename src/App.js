import React, { Component } from 'react';
import Nav from './components/Nav';
import Body from './components/Body';

import { UserProvider } from './UserContext';

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
        return (
            <div className="app">
                <UserProvider value={this.state.user}>
                    <Nav />
                    <Body />
                </UserProvider>
            </div>
        );
    }
}

export default App;
