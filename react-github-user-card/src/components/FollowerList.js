import React from 'react';
import FollowerCard from './FollowerCard';
import axios from 'axios';
import '../App.css';

export default class FollowerList extends React.Component {
  state = {
    followers: [],
    searchText: '',
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

  updateSearch = e => {
    e.preventDefault();
    this.setState({
      searchText: e.target.value
    })
  }

  render() {
    let filteredFollowers = this.state.followers.filter( (filter) => {
      return filter.login.indexOf(this.state.searchText) !== -1;
    });
    // console.log(filteredFollowers);

    return (
      <div>
        <input 
          type='text'
          placeholder='search'
          value={this.state.searchText}
          onChange={this.updateSearch}
        />
        {this.state.followers.map((user, i) => {
         return <FollowerCard key={i} user={user} searchText={this.state.searchText} followers={this.state.followers} />;
        })}
      </div>
    );
  }
}
