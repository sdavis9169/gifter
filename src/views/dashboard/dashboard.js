import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/action_creators/action_creator';
import axios from 'axios';
import './dashboard.css'
import CreateGroup from '../groups/createGroup';
import GroupList from '../groups/group_list';
import { Link } from 'react-router-dom';

 class Dashboard extends Component {
    
    render() {
        return (
            <div>
                <h2>Create Group:</h2>
                <CreateGroup />
                <h1>Active groups</h1>
                <GroupList />
            </div>
        )
    }}

export default connect(state => state, actions)(Dashboard);
