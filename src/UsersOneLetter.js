import React, {Component} from 'react';
import {Person} from "./Person";

class UsersOneLetter extends Component {

    render() {
        return (
            <div className="one-letter">
                <div className="letter-column">{this.props.letter}</div>
                {this.props.users.length ?
                    this.props.users.map((user) => (
                        <Person key={user.id} user={user}/>
                    )) : <div className="employee">No Employees</div>}
            </div>
        );
    }
}

export default UsersOneLetter;
