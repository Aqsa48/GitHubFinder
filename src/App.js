import React, { Component, Fragment } from 'react';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './components/layouts/Navbar'
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/search'
import Alert from './components/layouts/Alert'
import axios from 'axios';
import './App.css';
import About from './components/pages/About';


class App extends Component {

  state = {
    users: [],
    singleUserData: {},
    loading: false,
    alert: null,
    repos: [],

  };

  async componentDidMount() {
    this.setState({ loading: true });
    // const res = await axios.get('https://api.github.com/users')
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data, loading: false })

  }


  // Get Simple component
  getUser = async (userName) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users?q=${userName}&client_id=${process.env.REACT_APP_GITHUB_ID}`);
    this.setState({ user: res.data, loading: false })
  }
  searchUser = async text => {
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users: res.data.items, loading: false })
  }


  // Clear User states
  clearUsers = () => {
    this.setState({ users: [], loading: false });

  }

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } })
    setTimeout(() => this.setState({ alert: null }), 5000)

  }

  // Getting single Github usre **First Github component
  getUser = async (username) => {

    // getting single user
    this.setState({ loading: true });
    // Getting single users Data
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ singleUserData: res.data, loading: false })

    // console.log(this.state.singleUserData)
  }


  // Getting User Repos
  getUserRepos = async (username) => {

    // getting single user
    this.setState({ loading: true });
    // Getting single users Data
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ repos: res.data, loading: false })

    // console.log(this.state.repos)
  }



  render() {
    const { users, loading, user, singleUserData, repos } = this.state

    return (
      <Router>
        <div className="App">
          <Nav />
          <div className='container'>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search searchUser={this.searchUser} clearUsers={this.clearUsers}
                    showClear={this.state.users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <Users loading={this.state.loading} user={this.state.users} />
                </Fragment>
              )}
              />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' render={props => (
                <User {...props} getUser={this.getUser} singleUserData={singleUserData}
                  getUserRepos={this.getUserRepos} repos={repos}

                  loading={loading} />
              )} />
            </Switch>


          </div>
        </div>
      </Router>
    );
  }
}

export default App
