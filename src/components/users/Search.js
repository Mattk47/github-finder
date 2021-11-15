import React, { Component } from 'react'

export default class Search extends Component {
    state = {
        text: ''
    };

    onChange = e => {
        this.setState({ text: e.target.value });
    }
    onSubmit = e => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('Please enter something', 'light')

        } else {
            this.props.searchUsers(this.state.text)
            this.setState({ text: '' })
        }
    }

    render() {

        const { clearUsers, showClear } = this.props

        return (

            <div>
                <form className='form' onSubmit={this.onSubmit}>
                    <input type='text'
                        name='text'
                        placeholder='Search users'
                        value={this.state.text}
                        onChange={this.onChange}
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
}
