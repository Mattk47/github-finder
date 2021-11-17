import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({ user }) => {
    const { login, avatar_url } = user
    const avatarStyle = { width: '60px' }

    return (
        <div className='card text-center'>
            <img src={avatar_url} className='round-img' style={avatarStyle} />
            <h3>{login}</h3>
            <div>
                <Link className='btn btn-dark my-1 ' to={`/user/${login}`} > more info</Link>
            </div>
        </div>
    )

}

export default UserItem;