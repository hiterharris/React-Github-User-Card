import React from 'react';
import FollowerCard from './FollowerCard';
import axios from 'axios';
import '../App.css';

export default class FollowerList extends React.Component {
  state = {
    followers: [],
  }
  componentDidMount() {
    axios.get('https://api.github.com/users/hiterharris/followers')
    .then(res => {
      this.setState({
        followers: res.data
      })
    })
    .catch(err => {
      console.log('Data not returned', err)
    })
  }
  render() {
    return (
      <div>
        {this.state.followers.map((user, i) => {
         return <FollowerCard key={i} user={user} />;
        })}
      </div>
    );
  }
}
