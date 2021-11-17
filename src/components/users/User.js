import React, { useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../layouts/Spinner'
import { Link } from 'react-router-dom'
import Repo from '../repos/Repo'

const User = ({ user, loading, getUser, getUserRepos, repos }) => {
    const { login } = useParams()
    const { name, location, avatar_url, bio, blog, company, public_repos, public_gists, html_url, followers, following, hireable } = user
    useEffect(() => {
        getUser(login)
        getUserRepos(login)
    }, [])


    if (loading) return <Spinner />

    return (
        <Fragment>
            <Link to='/' className='btn btn-light'>Back to home</Link>
            Hireable: {' '}
            {hireable ? <i className='fa fa-check text-success' /> : <i className='fa fa-times-circle text-danger' />}
            <div className="card grid-2">
                <div className='all-center'>
                    <img src={avatar_url} className='round-img' alt='' style={{ width: '150px' }} />
                    <h1>{name}</h1>
                    <p>{location}</p>
                </div>
                <div>
                    {bio && <Fragment>
                        <h3>Bio:</h3>
                        <p>{bio}</p>
                    </Fragment>}
                    <a href={html_url} className='btn btn-dark my-1'>Visit Github profile</a>
                    <ul>
                        <li><strong>Login:</strong> {login}</li>
                        {company && <Fragment>

                            <li><strong>company:</strong> {company}</li>
                        </Fragment>}
                        {company && <Fragment>

                            <li><strong>Website:</strong> {blog}</li>
                        </Fragment>}
                    </ul>
                </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">Followers: {followers}</div>
                <div className="badge badge-success">Following: {following}</div>
                <div className="badge badge-light">Public Repos: {public_repos}</div>
                <div className="badge badge-dark">Public Gists: {public_gists}</div>
            </div>
            <div>
                <Repo repos={repos} />
            </div>
        </Fragment>
    )

}

export default User;