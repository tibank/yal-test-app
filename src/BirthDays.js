import React, {useContext} from 'react';
import {UserContext} from "./UserContext";

function convertDate(date) {
    return new Date(date)
}

function getLocaleDate(date) {
    const dat = new Date(date)

    return dat.toLocaleDateString('en-US', {day: '2-digit'}) + ' ' +
        dat.toLocaleDateString('en-US', {month: 'long'}) + ', ' + dat.getFullYear() + ' year';

}

function gerTemplateResultArray() {
    const arrMonth = [];
    for (let i = 0; i < 12; i++) {
        arrMonth.push([]);
    }

    return arrMonth;
}

function getFilteredList(value) {

    const arrUsers = Object.values(value).filter(item => item.active === 1);
    const result = gerTemplateResultArray();

    arrUsers.forEach(item => {
        result[convertDate(item.dob)].push(item)
    })

    return result

}

function getNameMonth(index) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    return monthNames[index]
}

function UserBirthDay(props) {

    return (
        <li className="user-birthday" key={props.user.id}>
            {props.user.firstName} {props.user.firstName} - {getLocaleDate(props.user.dob)}
        </li>
    )
}

function OneMonth(props) {
    return (
        <>
            <div className="block-month">
                {getNameMonth(props.index)}
            </div>
            <div>
                <ul className="list-birthday">
                    {props.users.map(item =>
                        (<UserBirthDay user={item}/>)
                    )}
                </ul>
            </div>
        </>
    )
}

export default function BirthDays(props) {
    const value = useContext(UserContext);
    const listUsers = getFilteredList(value);

    return (
        <>
            <div className="header">Employees birthday</div>
            {listUsers.map((item, index) => (
                item.length ? <OneMonth number={index} users={item}/> : (<div></div>)
            ))}
        </>

    )
}



