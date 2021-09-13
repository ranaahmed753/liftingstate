import React, { Component } from 'react'

export default class ClickCounter extends Component {
    render() {
        const { count, increment } = this.props
        return (

            <div>
                <h1>Count:{count}</h1><br />
                <button onClick={increment}>Increment</button><br />

            </div>
        )
    }
}
