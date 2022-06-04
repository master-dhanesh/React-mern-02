import React, { Component } from "react";
import Chind from "./Components/Chind";
import axios from "axios";

class App extends Component {
    constructor(props) {
        super(props);
        console.log("App.js Constructor");
    }

    state = {
        about: "",
        show: false,
        photos: [],
    };

    ChangeState = () => {
        this.setState({
            about: "New Data Of The State...",
            show: !this.state.show,
        });

        this.setState((prevProps, prevState) => ({
            about: "New Data Of The State...",
            show: !prevState.show,
        }));
    };

    render() {
        console.log("App.js Render");
        console.log(this.state);
        return (
            <div className="container mt-5 alert alert-dark">
                <h2>{this.state.about}</h2>
                <button className="btn btn-dark" onClick={this.ChangeState}>
                    Change
                </button>
                <hr />
                {this.state.show ? <Chind /> : ""}
            </div>
        );
    }

    async componentDidMount() {
        // we can change the state here
        console.log("App.js ComponentDidMount");
        const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/photos"
        );
        this.setState({ about: "chnaged in mount", photos: data });
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("App.js ComponentDidUpdate");
        console.log(prevProps, prevState);
    }
}

export default App;
