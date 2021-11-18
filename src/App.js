import './App.css';
import React from 'react'
import GithubState from './components/context/github/GithubState';
import AlertState from './components/context/alert/AlertState';
import Navbar from './components/layouts/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About'
import User from './components/users/User';
import NotFound from './components/pages/NotFound'


const App = () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<Home />} >
              </Route>
              <Route exact path='/about' element={<About />}>
              </Route>
              <Route exact path='/user/:login' element={<User />}>
              </Route>
              <Route element={<NotFound />}>
              </Route>
            </Routes>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  )

}

export default App;