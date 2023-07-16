import React, { useState } from 'react';

const UsernameField = ({setUsername}) => {

    return (
        <div className="usernameField">
            <i className="fa fa-user userIcon"></i>
            <input type="text"
                id="username"
                name="Username"
                className="usernameTextInput"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                autocomplete="off"></input>
        </div>
    )
}

export default UsernameField;