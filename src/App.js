import './App.css';
import React, {useState} from "react";
import Users from "./Users";
import {UserContext} from "./UserContext";

function App() {

    const [value, setValue] = useState({});

    const updateValue = (value, active) =>
        setValue((prevValue) => {
            return {...prevValue, [value.id]: {user: value, active: active}};
        });

    return (
        <UserContext.Provider value={{...value, update: updateValue}}>
            <div className="App">
                <Users/>
            </div>
        </UserContext.Provider>
    );
}

export default App;
