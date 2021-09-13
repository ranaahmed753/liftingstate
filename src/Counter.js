import React, { Component } from 'react'

export default class Counter extends Component {

    render() {
        const { count, increment, decrement } = this.props
        return (
            <div>
                <h1>Count:{count}</h1><br />
                <button onClick={increment}>Increment</button><br />
                <button onClick={decrement}>Decrement</button>
            </div>
        )
    }
}
