import './App.css';
import React, { useState } from 'react'
import Navbar from './components/layouts/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About'
import User from './components/users/User';
const axios = require('axios');
const App = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [alert, setAnAlert] = useState(null);
  const [repos, setRepos] = useState([]);

  console.log(users)

  const searchUsers = async (search) => {
    setLoading(true)
    const res = await axios.get(`https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    setUsers(res.data.items)
    setLoading(false)
  }

  const getUser = async (username) => {
    setLoading(true)
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    setUser(res.data)
    setLoading(false)
  }

  const getUserRepos = async (username) => {
    setLoading(true)
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc&?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    setRepos(res.data)
    setLoading(false)

  }

  const clearUsers = () => {
    setUsers([])
    setLoading(false)
  }

  const setAlert = (msg, type) => {
    setAnAlert({ msg, type })

    setTimeout(() => setAnAlert(null), 5000)

  }

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home loading={loading} users={users} setAlert={setAlert} clearUsers={clearUsers} searchUsers={searchUsers} getUser={getUser} alert={alert} user={user} />} >
          </Route>
          <Route exact path='/about' element={<About />}>
          </Route>
          <Route exact path='/user/:login' element={<User user={user} getUser={getUser} loading={loading} repos={repos} getUserRepos={getUserRepos} />}>
          </Route>
        </Routes>

      </div>
    </Router>
  )

}

export default App;