import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './views/login/login';
import Dashboard from './views/dashboard/dashboard';
import CreateGroup from './views/groups/createGroup';
import ViewGroup from './views/groups/group_details';
import CreatePost from './views/posts/create_post';
import EditPost from './views/posts/edit_post'


export default (
    <Switch>
        <Route component={EditPost} path='/editPost/:id' />
        <Route component={CreatePost} path='/newPost' />
        <Route component={ViewGroup} path='/groups/:id' />
        <Route component={Dashboard} path='/dashboard' />
        <Route component={Login} exact path='/' />
    </Switch>
)