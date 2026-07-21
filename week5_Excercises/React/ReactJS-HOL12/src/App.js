import React, { Component } from "react";
import GuestPage from "./Components/GuestPage";
import UserPage from "./Components/UserPage";
import Login from "./Components/Login";
import Logout from "./Components/Logout";

class App extends Component {

    constructor(props) {

        super(props);

        this.state = {
            isLoggedIn: false
        };

    }

    login = () => {

        this.setState({
            isLoggedIn: true
        });

    };

    logout = () => {

        this.setState({
            isLoggedIn: false
        });

    };

    render() {

        if (this.state.isLoggedIn) {

            return (

                <div>

                    <UserPage />

                    <Logout logout={this.logout} />

                </div>

            );

        }

        return (

            <div>

                <GuestPage />

                <Login login={this.login} />

            </div>

        );

    }

}

export default App;