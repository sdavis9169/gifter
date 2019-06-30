import React, { Component } from 'react';
import axios from 'axios';
import Post from './post'
import {connect} from 'react-redux';

class Posts extends Component {
    state = {
        posts: []
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
                console.log('item removed')
            } else{
                console.log('post not deleted')
            }
        })
        .catch((err)=>{
            console.log(err)
        })
}

    render() {
        const posts = this.state.posts.map((e, r)=> {
            return <Post key={e.id}  event_type={e.event_type}
            item_name={e.item_name} picture={e.picture} link={e.link}
            deletePost={this.deletePost}
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

export default connect(state => state)(Posts)