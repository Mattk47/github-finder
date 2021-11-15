import React, { Component } from 'react'
import spinner from './spinner.gif'

export default class Spinner extends Component {
    render() {
        return (
            <>
                <img src={spinner} alt='loading...' style={{ width: '200px', display: 'block', margin: 'auto' }} />
            </>
        )
    }
}
