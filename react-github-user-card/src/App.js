import React from 'react';
import FollowerList from './components/FollowerList';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import './App.css';

export default class App extends React.Component {
  state = {
    user: '',
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/hiterharris')
      .then(res => {
        this.setState({
          user: res.data
        })
      })
      .catch(err => {
        console.log('Data not returned', err)
      })
  }

  render() {
    console.log('User', this.state.user);
    const {name, login, email, followers, following, avatar_url} = this.state.user;
    return (
      <div>
        <h1>{name}</h1>
        <p>{login}</p>
        <img src={`${avatar_url}`} alt="avatar" />
        <p>{email}</p>
        <Link to='/followers'>
          <p>Followers: {followers}</p>
        </Link>
        <p> Following: {following}</p>
        <Route path='/followers' component={FollowerList} />
      </div>
    );
  }
}
