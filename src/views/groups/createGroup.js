import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import * as actions from '../../redux/action_creators/action_creator';

class CreateGroup extends Component {
    state = {
       title: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

createGroup = () =>{
    const group = {
        title: this.state.title
    };
    axios.post('/api/create_group', group)
    .then(({data})=>{
        debugger
        console.log({data})
        if(data.success){
        this.props.setGroup(data.group);
        this.props.history.push(`/groups/${data.group.id}`)
        }
    })

}

    render() {
        return (
            <div>
                <input type='text'
                name='title'
						value={this.state.title}
						onChange={this.handleChange} />
                <button onClick={this.createGroup}>Add</button>
            </div>
        )
    }
}

export default withRouter(connect((state) => state, actions)(CreateGroup));
