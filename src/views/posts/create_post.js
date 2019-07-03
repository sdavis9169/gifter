import React, { Component } from "react";
import axios from "axios";
import { connect } from 'react-redux';
import Posts from './post_list';
import { withRouter } from "react-router-dom";


class CreatePost extends Component {
    state = {
      event_type: "",
      item_name: "",
      picture: "",
      link: "",
    };
  

 

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
        group_id: this.state.group_id,


    }
    axios.post('/api/new_post', postObj)
        .then(({data})=>{
          if(data.success){
            this.props.history.push(`/dashboard`)
          }
        })
    
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="Event Type"
            name="event_type"
            onChange={this.handleChange}
            value={this.state.event_type}
          />
          <br/>
          <input
            type="text"
            placeholder="Item Name"
            name="item_name"
            onChange={this.handleChange}
            value={this.state.item_name}
          />
          <br/>
          <input
            type="text"
            placeholder="Picture"
            name="picture"
            onChange={this.handleChange}
            value={this.state.picture}
          />
          <br/>
          <input
            type="text"
            placeholder="Link"
            name="link"
            onChange={this.handleChange}
            value={this.state.link}
          />

          <br/>
          <button className="btn btn-primary" type="submit" onClick={()=>this.submit()}>Add Item</button>
          </div>
          <div>

          </div>
      </div>
    );
  }
}

export default withRouter(connect((state) => state)(CreatePost));
