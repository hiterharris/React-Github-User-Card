import React from 'react';
import UserList from './components/UserList';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <UserList />
      </div>
    );
  }
}
