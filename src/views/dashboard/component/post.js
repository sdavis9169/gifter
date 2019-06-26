import React, { Component } from "react";
import axios from "axios";
import { connect } from 'react-redux';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event_type: "",
      item_name: "",
      picture: "",
      link: ""
    };
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    })
}

  submit=()=>{
    debugger
    const postObj = {
        event_type: this.state.event_type,
        item_name: this.state.item_name,
        picture: this.state.picture,
        link: this.state.link,
    }
    axios.post('/api/new_post', postObj)
    
        .then((post)=>{
          console.log(post)
          this.props.history.push('/dashboard')
        })
        .catch((err)=>{
          console.log(err)
        })
  }

  render() {
    return (
      <div>
          <input
            type="text"
            placeholder="Event Type"
            onChange={this.handleChange}

          />
          <br/>
          <input
            type="text"
            placeholder="Item Name"
            onChange={this.handleChange}

          />
          <br/>
          <input
            type="text"
            placeholder="Picture"
            onChange={this.handleChange}

          />
          <br/>
          <input 
          type="text" 
          placeholder="Link" 
          onChange={this.handleChange} 

          />

          <br/>
          <button type="submit" onClick={()=>this.submit()}>Add Item</button>
      </div>
    );
  }
}

export default connect((state) => state)(Post);
