import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './views/login/login';
import Dashboard from './views/dashboard/dashboard';
import CreateGroup from './views/groups/createGroup';
import ViewGroup from './views/groups/group_details';


export default (
    <Switch>
        <Route component={ViewGroup} path='/groups/:id' />
        <Route component={Dashboard} path='/dashboard' />
        <Route component={Login} exact path='/' />
    </Switch>
)