import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Post from '../posts/create_post';
import Posts from '../posts/post_list'


class ViewGroup extends Component {
	state = {
		group: {}
	};
	componentDidMount() {
        axios.get(`/api/groups/${this.props.match.params.id}`)
            .then(({ data }) => {
				console.log(data)
			if (data.success) {
				this.setState({
					group: data.group
				});
			} else {
				alert('something blew up');
			}
		});
	}

    render() {
        return (
            <div>
                <h1>Group name:</h1>
				<h2>{this.state.group.title}</h2>
                <Post />
				<Posts />
            </div>
        )
    }
}

export default connect(state=>state)(ViewGroup);

