import React, { Component } from 'react'

export default class Register extends Component {
    state = {
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        username: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    register = () => {
        debugger
        const registerObj = {
            email: this.state.email,
            password: this.state.password,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            username: this.state.username
        }
        this.props.register(registerObj)
    }
    render() {
        const inputs = Object.keys(this.state).map((e, i)=>{
            return <input className="login" type="text" key={i} placeholder={e} name={e} value={this.state[e]} onChange={this.handleChange}/>
        })  
        return (
            <div className="auth-box">
            <img src="https://cdn1.iconfinder.com/data/icons/ecommerce-61/48/eccomerce_-_gift-256.png" alt="logo" />
            <h1>gifter</h1>
            <div className="login">
                {inputs}
                </div>
                <button className="black-button" onClick={this.register}>Register</button>
            </div>
        )
    }
}