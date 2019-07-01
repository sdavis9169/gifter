import React, { Component } from 'react';
import axios from 'axios';
import Post from './post'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class Posts extends Component {
    state = {
        posts: [],

    }
componentDidMount(){
    axios.get('/api/posts')
        .then(({data})=>{
            console.log(data)
            if(data.success){
                this.setState({
                    posts: data.posts
                })
            } else {
                alert('Get all posts failed')
            }
        })
}


deletePost =(id)=>{
    axios.delete(`/api/post/${id}`)
        .then(({data})=>{
            if(data.success){
                this.props.history.push(`/dashboard`)
            } else{
                console.log('post not deleted')
            }
        })
        .catch((err)=>{
            console.log(err)
        })
}

// editPost=(id)=>{
//     axios.put(`/api/post/${id}`)
//     .then(({data})=>{
//         if(data.success){
//             this.props.history.push('/dashboard')
//         } else {
//             console.log('post not deleted')
//         }
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// }

    render() {
        const posts = this.state.posts.map((e, r)=> {
            return <Post key={e.id}  event_type={e.event_type}
            item_name={e.item_name} picture={e.picture} link={e.link}
            deletePost={this.deletePost} showEdit={this.showEdit}
            id={e.id}
            />
        })
        return (
                <div className="row">
              {posts}
              </div>

        )
    }
}

export default withRouter(connect(state => state)(Posts))