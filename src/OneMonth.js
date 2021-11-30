import {getNameMonth, getLocaleDate} from "./helper";
import React from "react";

function UserBirthDay(props) {
    return (
        <li className="user-birthday" key={props.user.id}>
            {props.user.firstName} {props.user.lastName} - {getLocaleDate(props.user.dob)}
        </li>
    )
}

 export default function OneMonth(props) {
    return (
        <>
            <div className="block-month">
                {getNameMonth(props.number)}
            </div>
            <div>
                { props.users.length > 0 &&
                <ul className="list-birthday">
                    {props.users.map(item =>
                        (<UserBirthDay user={item}/>)
                    )}
                </ul>
                }
                { props.users.length === 0 && <div>No Employees</div>}
            </div>
        </>
    )
}
