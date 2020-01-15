import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

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
    const {name, html_url, login, blog, avatar_url} = this.state.user;
    return (
      <div className='Profile'>
        <img src={`${avatar_url}`} alt="avatar" />
        <div className='profile-info'>
            <div>
                <h1>{name}</h1>
                <a href={html_url} target='_blank'>
                    <h3>{login}</h3>
                </a>
                <a href={blog} target='_blank'>
                    <h3>Website</h3>
                </a>
                <Link to='/followers'>
                    <h3>Followers</h3>
                </Link>
            </div>
        </div>

      </div>
    );
  }
}
