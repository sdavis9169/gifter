import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";


class EditPost extends Component {
   state = {
    event_type: "",
    item_name: "",
    picture: "",
    link: "",
   }

   

   handleChange = (e) => {
    this.setState({
        [e.target.name] : e.target.value
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

export default withRouter(connect((state) => state)(EditPost));