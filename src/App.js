import React,{Component} from 'react';
import './App.css';
import axios from 'axios';
import routes from './routes';

class App extends Component {
  componentDidMount(){
    axios.get('/api/test')
    .then((res)=>{

    })
  }
  render() {
    return (
      <div>
        {routes}
      </div>
    )
  }
}


export default App;
