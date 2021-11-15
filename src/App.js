import './App.css';
import React, { Component, Fragment } from 'react'
import Navbar from './components/layouts/Navbar'
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const axios = require('axios');

export default class App extends Component {

  state = {
    loading: false,
    users: [],
    alert: null
  }
  searchUsers = async (search) => {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
  &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    this.setState({ users: res.data.items, loading: false })

  }

  clearUsers = () => this.setState({ users: [], loading: false })

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } })

    setTimeout(() => this.setState({ alert: null }), 5000)

  }

  render() {
    const { loading, users } = this.state;

    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Routes>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search searchUsers={this.searchUsers} setAlert={this.setAlert}
                    clearUsers={this.clearUsers} showClear={users.length > 0 ? true : false} />
                  <Users loading={loading} users={users} />

                </Fragment>

              )}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    )
  }
}
