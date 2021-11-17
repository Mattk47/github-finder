import React from 'react'
import Users from '../users/Users';
import Search from '../users/Search';
import Alert from '../layouts/Alert'

const Home = ({ loading, alert, users, setAlert, clearUsers, searchUsers }) => {

    return (
        <div className="container">
            <Alert alert={alert} />
            <Search searchUsers={searchUsers} setAlert={setAlert}
                clearUsers={clearUsers} showClear={users.length > 0 ? true : false} />
            <Users loading={loading} users={users} />
        </div>


    )

}

export default Home;