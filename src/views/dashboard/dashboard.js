import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Group from './component/group';

 class Dashboard extends Component {

         state = {
             create_group: '',
             groups: [],
         }
     

     componentDidMount(){
         axios.get('/api/view_groups')
         .then(({data})=>{
             if(data.success){
                 this.setState({
                     groups: data.groups
                 })
             } else if(!data.isLoggedIn){
                 this.props.history.push('/')
             } else{
                 alert('There was an error')
             }
         })
     }

     handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
     }

     createGroup = () => {
         const groupObj = {
            create_group: this.state.create_group
         }
         this.props.createGroup(groupObj)
     }

    render() {
        const groups = this.state.groups.map((e, r) => {
            return <Group key={e.id} id={e.id} name={e.name} />
        })
        return (
            <div>
                {groups}
                <input type="text" placeholder="Group Name" value={this.state.handleChange} onChange={this.handleChange}/>
                <button onClick={this.createGroup}>Create Group</button>
            </div>
        )
    }}

export default connect((state) => state)(Dashboard);
