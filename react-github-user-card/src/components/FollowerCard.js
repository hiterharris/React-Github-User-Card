import React from 'react';
import '../App.css';

export default class FollowerCard extends React.Component {
  render() {
    
    let filteredFollowers = this.props.followers.filter( (filter) => {
      return filter.login.indexOf(this.props.searchText) !== -1;
    });

    if(this.props.searchText.length > 0) {
      return (
        <div >
          {filteredFollowers.map(filteredUser => {
            return (
              <div className='FollowerCard'>
              <img src={`${filteredUser.avatar_url}`} alt="avatar" />
              <a href={filteredUser.html_url} target='_blank'>
                  <h3>{filteredUser.login}</h3>
              </a>
              </div>
            )
          })}
        </div>
      );
    } else {
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
}