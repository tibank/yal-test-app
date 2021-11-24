import React, {Component} from 'react';
import {Person} from "./Person";

class UsersOneLetter extends Component {

    render() {
        return (
            <div className="one-letter">
                <div className="letter-column" key={this.props.index}>{this.props.letter}</div>
                {this.props.users.length ?
                    this.props.users.map((user) => (
                        <Person user={user}/>
                    )) : <div className="employee">No Employees</div>}
            </div>
        );
    }
}

export default UsersOneLetter;
