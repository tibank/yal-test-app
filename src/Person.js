import React, {useState, useContext} from 'react';
import {UserContext} from "./UserContext";

function BlockRadio(props) {

    return (

        <div className={"block-radio user-" + props.id} key={props.id}>
            <label htmlFor={"user-input-" + props.id}>
                <input
                    type="radio"
                    name={"user-input-" + props.id}
                    value={props.act}
                    checked={props.act}
                    onChange={props.toggle}
                />
                {props.text}
            </label>
        </div>

    )
}

export function Person(props) {
    const [active, setActive] = useState(0);
    const userContext = useContext(UserContext)


    function toggleActive(param) {
        setActive(param)
        userContext[props.user.id] = {user: props.user, active: param};
    }

    return (
        <UserContext.Provider value={userContext}>
            <div className="employee" key={props.user.id}>
                <div className="user-names" userActive={active}>{props.user.firstName} {props.user.lastName}</div>

                <BlockRadio id={props.user.id} act={!active ? 1 : 0} toggle={() => toggleActive(0)}
                            text={'not active'}/>
                <BlockRadio id={props.user.id} act={active ? 1 : 0} toggle={() => toggleActive(1)} text={'active'}/>
            </div>
        </UserContext.Provider>

    );
}
