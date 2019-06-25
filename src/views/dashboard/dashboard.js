import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/action_creators/action_creator';
import axios from 'axios';
import './dashboard.css'
import Nav from '../nav/nav'

import { Link } from 'react-router-dom';

 class Dashboard extends Component {
        constructor(props){
            super(props);
            this.state = {
                groups: []
            }
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
        const groups = this.state.groups.map((group, index) => {
            return (
                <Link key={index} to={`/group/${group.id}`}>
                <div>
                    <h2>{group.title}</h2>
                </div>
                </Link>
            )
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
