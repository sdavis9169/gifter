import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './views/login/login';
import Dashboard from './views/dashboard/dashboard';
import CreateGroup from './views/createGroup/createGroup';
import Group from './views/dashboard/component/group'


export default (
    <Switch>
        <Route component={Group} path='/group/:id' />
        <Route component={CreateGroup} path='/create-group' />
        <Route component={Dashboard} path='/dashboard' />
        <Route component={Login} exact path='/' />
    </Switch>
)