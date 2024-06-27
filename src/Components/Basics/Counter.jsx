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

    static getDerivedStateFromProps(props) {
        console.log("getDerivedStateFromProps : ", props);
        return props
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        // true - UI should render
        // false - UI should not render
        return true
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    increaseCount = (step) => {
        this.setState({
            count: this.state.count + step
        })
    }

    decreaseCount = (step) => {
        this.setState({
            count: this.state.count - step
        })
    }

    render() {
        return (
            <>
                <h1>Counter - {this.state.count}</h1>
                <button onClick={() => this.increaseCount(1)}>Add by 1</button>
                <button onClick={() => this.increaseCount(5)}>Add by 5</button>
                <button onClick={() => this.decreaseCount(1)}>Subract by 1</button>
                <button onClick={() => this.decreaseCount(5)}>Subract by 5</button>
            </>
        )
    }
}