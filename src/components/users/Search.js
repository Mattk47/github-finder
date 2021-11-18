import React, { useState, useContext } from 'react'
import GithubContext from '../context/github/githubContext'
import AlertContext from '../context/alert/alertContext'


const Search = ({ setAlert }) => {
    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext)

    const [text, setText] = useState('')

    const onChange = e => {
        setText(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        if (text === '') {
            alertContext.setAlert('Please enter something', 'light')

        } else {
            githubContext.searchUsers(text)
            setText('')
        }
    }

    return (

        <div>
            <form className='form' onSubmit={onSubmit}>
                <input type='text'
                    name='text'
                    placeholder='Search users'
                    value={text}
                    onChange={onChange}
                ></input>
                <input type='submit'
                    value='search'
                    className='btn btn-dark btn-block'
                ></input>
            </form>
            {githubContext.users.length > 0 &&
                <button onClick={githubContext.clearUsers} className='btn btn-light btn-block'>Clear</button>
            }
        </div>
    )

}

export default Search;