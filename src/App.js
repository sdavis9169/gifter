import React,{Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import login from './views/login/login';
import dashboard from './views/dashboard/dashboard';
import axios from 'axios';

class App extends Component {
  componentDidMount(){
    axios.get('/api/test')
    .then((res)=>{
      console.log(res.data)
    })
  }
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
