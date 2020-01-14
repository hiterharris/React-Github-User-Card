import React from 'react';
import '../App.css';

export default class FollowerCard extends React.Component {
  render() {
    const {name, login, email, followers, following, avatar_url} = this.props.user;
    return (
      <div>
        <p>{login}</p>
        <img src={`${avatar_url}`} alt="avatar" />
        <p>{email}</p>
        <p>Followers: {followers}</p>
        <p> Following: {following}</p>
      </div>
    );
  }
}
