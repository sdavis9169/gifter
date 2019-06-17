import React,{Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import login from './views/login/login';
import dashboard from './views/dashboard/dashboard';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/dashboard" component={dashboard} />
            <Route path="/" component={login} />
          </Switch>
        </Router>
      </div>
    )
  }
}


export default App;
