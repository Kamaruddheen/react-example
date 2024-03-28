import React, { Component } from "react";

export default class Counter extends Component {

    constructor(props) {
        super()
        this.state = {
            count: 10
        }
        // this.increaseCount = this.increaseCount.bind(this)
        // this.decreaseCount = this.decreaseCount.bind(this)
    }

    increaseCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decreaseCount = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <>
                <h1>Counter - {this.state.count}</h1>
                <button onClick={this.increaseCount}>Add</button>
                <button onClick={this.decreaseCount}>Subract</button>
            </>
        )
    }
}