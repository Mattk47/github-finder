import React, { useState } from 'react'

const Search = ({ setAlert, searchUsers, clearUsers, showClear }) => {
    const [text, setText] = useState('')


    const onChange = e => {
        setText(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        if (text === '') {
            setAlert('Please enter something', 'light')

        } else {
            searchUsers(text)
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
            {showClear &&
                <button onClick={clearUsers} className='btn btn-light btn-block'>Clear</button>
            }
        </div>
    )

}

export default Search;