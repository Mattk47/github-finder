import React, { Component } from 'react'
import UserItem from './UserItem'
import Spinner from '../layouts/Spinner'
const Users = ({ loading, users }) => {
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


