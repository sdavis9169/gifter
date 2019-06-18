import React, { Component } from 'react';
import { connect } from 'react-redux';

 class Dashboard extends Component {
     constructor(props){
         super(props);
         this.state = {
             create_group: '',
             groups: [],
         }
     }

     createGroup = () => {
         const groupObj = {
             
         }
     }

    render() {
        return (
            <div>
                dashboard
                <input type="text"/>
            </div>
        )
    }
}
export default connect((state) => state)(Dashboard);
