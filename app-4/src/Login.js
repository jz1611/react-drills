import React from 'react';

export default class Login extends React.Component {
constructor(){
    super();

    this.state = {
        username: "",
        password: ""
    }
}

    render(){
        return(
            <span>
                <input placeholder="Username"/>
                <input placeholder="Password"/>
                <button>Login</button>
            </span>
            );
    }
}