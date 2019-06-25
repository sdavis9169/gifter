import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';

class CreateGroup extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: ''
        }
    }

    handleChange(event, name) {
		const value = event.target.value;
		this.setState({ [name]: value });
	}

createGroup = () =>{
    const group = {
        title: this.state.title
    };
    axios.post('/api/create_group', group)
    .then(()=>{

    })
}

    render() {
        return (
            <div>
                <input type='text'
						value={this.state.title}
						onChange={(e) => this.handleChange(e, 'title')} />
                <button onClick={()=>this.createGroup()}>Add</button>
            </div>
        )
    }
}

export default connect((state) => state)(CreateGroup);