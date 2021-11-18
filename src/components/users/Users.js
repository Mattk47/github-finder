import React, { useContext } from 'react'
import UserItem from './UserItem'
import Spinner from '../layouts/Spinner'
import GithubContext from '../context/github/githubContext'

const Users = () => {
    const githubContext = useContext(GithubContext);

    const { loading, users } = githubContext

    const userStyles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '1rem'
    }
    if (loading) return (<Spinner />)

    return (
        <div style={userStyles}>
            {users.map(user => {
                return (
                    <UserItem key={user.id} user={user} />
                )
            })}
        </div>
    )
}

export default Users;


