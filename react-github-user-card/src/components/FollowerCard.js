import React from 'react';
import '../App.css';

export default class FollowerCard extends React.Component {
  render() {
    const {login, html_url, avatar_url} = this.props.user;
    return (
      <div className='FollowerCard'>
        <img src={`${avatar_url}`} alt="avatar" />
        <a href={html_url} target='_blank'>
            <h3>{login}</h3>
        </a>
      </div>
    );
  }
}
