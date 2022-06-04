import React, { Component } from "react";

export default class Chind extends Component {
    componentWillUnmount() {
        console.log("Child.js ComponentDidUnmount");
        alert("Do youwant to leave this page?");
    }

    render() {
        return <div>Child Component</div>;
    }
}
