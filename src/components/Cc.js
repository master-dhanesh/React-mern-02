import React, { Component } from "react";

export default class Cc extends Component {
    constructor() {
        super();
        console.log("Constructor");
    }

    state = {
        flag: false,
    };

    changeflag = () => {
        this.setState((prevstate) => ({
            flag: !prevstate.flag,
        }));
    };

    componentDidMount() {
        console.log("Component Did Mount");
    }

    render() {
        console.log("Render");
        return (
            <div className="container mt-5">
                {this.state.flag ? "Authorized" : "Unautorized"}
                <br />
                <button
                    onClick={this.changeflag}
                    className="mt-3 btn btn-primary"
                >
                    Chaange Status
                </button>
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component Did Update", prevProps, prevState);
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
    }
}
