import React from 'react';
import UserCard from './UserCard';
import '../App.css';

export default class UserList extends React.Component {
  render() {
    return (
      <div>
        <h2>UserList</h2>
        <UserCard />
      </div>
    );
  }
}
