import React, { Component } from "react";
import axios from "axios";
import { connect } from 'react-redux';
import Posts from './post_list';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event_type: "",
      item_name: "",
      picture: "",
      link: ""
    };
  }


  handleChange(event, name) {
		const value = event.target.value;
		this.setState({ [name]: value });
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
        })
    
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="Event Type"
            onChange={(e)=> this.handleChange(e, 'event_type')}
            value={this.state.event_type}
          />
          <br/>
          <input
            type="text"
            placeholder="Item Name"
            onChange={(e)=> this.handleChange(e, 'item_name')}
            value={this.state.item_name}
          />
          <br/>
          <input
            type="text"
            placeholder="Picture"
            onChange={(e)=> this.handleChange(e, 'picture')}
            value={this.state.picture}
          />
          <br/>
          <input
            type="text"
            placeholder="Link"
            onChange={(e)=> this.handleChange(e, 'link')}
            value={this.state.link}
          />

          <br/>
          <button type="submit" onClick={()=>this.submit()}>Add Item</button>
          </div>
          <div>

          </div>
      </div>
    );
  }
}

export default connect((state) => state)(CreatePost);
