import React, { Component } from 'react';
import axios from 'axios';


class Posts extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }
componentDidMount(){
    axios.get('/api/posts')
        .then(({data})=>{
            if(data.success){
                this.setState({
                    posts: data.posts
                })
            }else if(!data.isLoggedIn){
                this.props.history.push('/')
            } else{
                alert('There was an error')
            }
        })
}

deletePost =(id)=>{
    axios.delete(`/api/post/${id}`)
        .then(({data})=>{
            if(data.success){
                console.log('Post Deleted')
            } else {
                alert('Delete Post failed')
            }
        })
}

    render() {
        const posts = this.state.posts.map((post, index)=>{
            return (
                <div>
                <div key={post.id} className="post-box">
                    <h3>{post.event_type}</h3>
                    <h3>{post.item_name}</h3>
                    <h3>{post.picture}</h3>
                    <h3>{post.link}</h3>
                    <button>Edit</button>
                    <button onClick={this.deletePost()}>Delete</button>
                </div>
                <div>
                    
                </div>
                </div>
            )
        })
        return (
            <div>
                {posts}
            </div>
        )
    }
}

export default Posts
