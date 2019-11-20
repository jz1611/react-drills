import React from 'react';

export default class Login extends React.Component {
constructor(){
    super();

    this.state = {
        username: "",
        password: ""
    }

    
}
userHandler(event){
    this.setState({
        username: event.target.value
    })
}

passHandler(event){
    this.setState({
        password: event.target.value
    })
}

    render(){
        return(
            <span>
                <input placeholder="Username" onChange={(event) => this.userHandler(event)}/>
                <input placeholder="Password" onChange={(event) => this.passHandler(event)}/>
                <button onClick={() => alert(`Username: ${this.state.username} Password: ${this.state.password}`)}>Login</button>
            </span>
            );
    }
}