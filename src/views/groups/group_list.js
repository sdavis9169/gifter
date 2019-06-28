import React, { Component } from 'react';
import axios from 'axios';
import Group from './components/group';
import {connect} from 'react-redux';

class GroupList extends Component {
        state = {
            groups: []
        }
    componentDidMount(){
        axios.get('/api/view_groups')
        .then(({data})=>{
            console.log({data})
            if(data.success){
                this.setState({
                    groups: data.groups
                })
            } else {
                alert('Group list failed to load')
            }
        })
    }
    render() {
        const groups = this.state.groups.map((e, r)=>{
            return <Group key={e.id} title={e.title} id={e.id} />
        })
        
        return (
            <div>
                {groups}
            </div>
        )
    }
}

export default connect(state => state)(GroupList)