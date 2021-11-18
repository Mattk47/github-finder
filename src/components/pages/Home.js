import React from 'react'
import Users from '../users/Users';
import Search from '../users/Search';
import Alert from '../layouts/Alert'

const Home = ({ alert, setAlert }) => {

    return (
        <div className="container">
            <Alert />
            <Search />
            <Users />
        </div>
    )

}

export default Home;