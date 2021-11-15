import React, { Component } from 'react'
export default class UserItem extends Component {

    render() {
        const { login, avatar_url, html_url } = this.props.user
        const avatarStyle = { width: '60px' }

        return (
            <div className='card text-center'>
                <img src={avatar_url} className='round-img' style={avatarStyle} />
                <h3>{login}</h3>
                <div>
                    <a href={html_url} className='btn btn-dark my-1 '>more info</a>
                </div>
            </div>
        )
    }
}
