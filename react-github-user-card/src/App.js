import React from 'react';
import FollowerList from './components/FollowerList';
import Profile from './components/Profile';
import { Route } from 'react-router-dom';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Profile />
        <Route path='/followers' component={FollowerList} />
      </div>
    );
  }
}
