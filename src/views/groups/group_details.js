import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Posts from '../posts/post_list'
import * as actions from '../../redux/action_creators/action_creator';
import CreatePost from '../posts/create_post'
import Header from '../shared/header'


class ViewGroup extends Component {
	state = {
		group: {},
		newTitle: ''
	};
	componentDidMount() {
        axios.get(`/api/groups/${this.props.match.params.id}`)
            .then(({ data }) => {
				console.log(data)
			if(data.success){
				this.props.setGroup(data.group);
			}
			// if (data.success) {
			// 	this.setState({
			// 		group: data.group
			// 	});
			// } else {
			// 	alert('something blew up');
			// }
		});
	}

	editName = () =>{
		debugger
		const nameObj = {
			group_id: this.props.group.id,
			title: this.state.title
		};

		axios.put(`/api/group/${this.props.match.params.id}`, nameObj)
		.then((req)=>{
			console.log(req.body)
		})
	}

	handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }


    render() {
        return (
            <div>
				<Header />
                <h1>Group: {this.props.group.title}</h1> 
				<input 
				value={this.state.title} 
				onChange={this.handleChange}
				type='text'
				name="title"
				/>
				<button onClick={this.editName} className="btn btn-primary" >Change Group Name</button>
				<CreatePost />
				<Posts />
            </div>
        )
    }
}

export default connect(state=>state, actions)(ViewGroup);

