import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import * as actions from '../../redux/action_creators/action_creator';
import Register from './subview/register/register';


class Login extends Component {
	state = {
		email: '',
		password: '',
		showRegister: false
	};
	login = () => {
		const loginObj = {
			email: this.state.email,
			password: this.state.password
		};
		axios.post('/api/login', loginObj).then(({ data }) => {

			if (data.success) {
				this.props.setUser(data.user);
				this.props.history.push('/dashboard');
			} else {
				alert('Wrong credentails');
			}
		});
	};
	showRegister = () => {
		this.setState({
			showRegister: true
		});
	};
	register = registerObj => {

		axios.post('/api/register', registerObj).then(({ data }) => {

			if (data.success) {
				this.props.setUser(data.user);
				this.props.history.push('/dashboard');
			} else {
				alert('Email already exists login.');
			}
		});
	};

	handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
		const register = this.state.showRegister ? <Register register={this.register} /> : '';
		return (
			<div>
				{register}
				{this.state.showRegister ? (
					''
				) : (
					<div className="auth-box">
					<img src="https://cdn1.iconfinder.com/data/icons/ecommerce-61/48/eccomerce_-_gift-256.png" alt="logo"/>
						<h1>gifter</h1>
					<div className="login">
						<input
							type="text"
							placeholder="Email"
							name="email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
						</div>
						<div className="login">
						<input
							type="text"
							placeholder="Password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
						</div>
						<div className="button-container">
							<button className="btn btn-primary"  onClick={this.login}>login</button>
							<button className="black-button" onClick={this.showRegister}>register</button>
						</div>
					</div>
				)}
			</div>
        )
    }
}

export default connect(state => state, actions)(Login)
