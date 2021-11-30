import React, {Component} from 'react';
import UserService from "./UserService";
import UsersOneLetter from "./UsersOneLetter";
import BirthDays from "./BirthDays";

class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            users: []
        };
    }

    componentDidMount() {
        UserService.getUsers()
            .then((result) => {
                    this.setState({isLoaded: true, users: result});
                },
                (error) => {
                    this.setState({isLoaded: true, error});
                }
            )
    }

    render() {
        const {error, isLoaded, users} = this.state;
        const ALPHABET_UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (error) {
            return (
                <div>
                    <p>Error {error.message}</p>
                </div>
            );
        } else if (!isLoaded) {
            return (
                <div>
                    <p>Loading</p>
                </div>
            );
        } else {
            return (
                <div className="UsersPage">
                    <div className="Users">
                        <div className="header">Employees</div>
                        <div className="user-list">
                            {Array.from(ALPHABET_UPPER).map(
                                (letter, index) => (
                                    <UsersOneLetter letter={letter} key={index} users={users[index]}/>
                                )
                            )}
                        </div>
                    </div>
                    <div className="BirthDays">
                        <BirthDays/>
                    </div>
                </div>
            );
        }
    }
}

export default Users;
