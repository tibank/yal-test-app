import React, {useContext} from 'react';
import {UserContext} from "./UserContext";
import {gerTemplateResultArray} from "./helper";
import OneMonth from "./OneMonth";

function convertDate(date) {
    return new Date(date)
}

function getFilteredList(value) {

    return Object.values(value).filter(item => item.user).filter(user => user.active)

}

function sortByLastName(a, b) {

    if (a.lastName > b.lastName) {
        return 1
    } else if (a.lastName < b.lastName) {
        return -1
    } else {
        return 0
    }

}

function getUsersbyMonthes(users) {

    const result = gerTemplateResultArray();

    users.forEach(item => {
        result[convertDate(item.user.dob).getMonth()].push(item.user)
    })

    result.forEach(arr => arr.sort(sortByLastName))

    return result
}

export default function BirthDays() {
    const value = useContext(UserContext);
    const users = getFilteredList(value);

    return (
        <>
            <div className="header">Employees birthday</div>
            {users.length > 0 && getUsersbyMonthes(users).map((item, index) => (
                <OneMonth number={index} users={item}/>
            ))}
            {users.length === 0 && <div>Employees List is empty</div>}
        </>

    )
}



