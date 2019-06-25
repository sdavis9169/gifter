import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


class Group extends Component {
	state = {
		group: {}
	};
	componentDidMount() {
        axios.get(`/api/groups/${this.props.match.params.id}`)
            .then(({ data }) => {
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
                <h1>Title: {this.state.group.title}</h1>
                <h4>created by: </h4>
            </div>
        )
    }
}

export default connect(null)(Group);

