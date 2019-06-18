import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './views/login/login';
import Dashboard from './views/dashboard/dashboard';


export default (
    <Switch>
        <Route component={Dashboard} path='/dashboard' />
        <Route component={Login} exact path='/' />
    </Switch>
)