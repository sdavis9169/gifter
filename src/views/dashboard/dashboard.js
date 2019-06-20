import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/action_creators/action_creator';
import axios from 'axios';
import Group from './component/group';
import AddGroup from './subview/addGroup/addGroup';
import './dashboard.css'
import Nav from '../nav/nav'

 class Dashboard extends Component {

         state = {
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

    
    render() {
        const groups = this.state.groups.map((e, r) => {
            return <Group key={e.id} id={e.id} title={e.title} />
        })
        return (
            <div>
                <h1>Active groups</h1>
                <Nav />
                {groups}
            </div>
        )
    }}

export default connect(state => state, actions)(Dashboard);
