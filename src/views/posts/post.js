import React from 'react';
import {Link} from 'react-router-dom';


export default function Post (props) {
        return (
            <div className="row" >
            <div className='card-deck' >
            <div className='card'>
                {/* <Link to={`/posts/${props.id}`}> */}
                
               
                    <img src={props.picture} className="card-img-top" />
                <div className="card-body" >
                {console.log(props.showEdit)}
                <h4>{props.event_type}</h4>
                <h4>{props.item_name}</h4>
                <h5>{props.link}</h5>
                {/* </Link> */}
                <Link to={`/posts/${props.id}`} >
                <button className="btn btn-primary" >Edit</button>
                </Link>
                <button className="btn btn-primary" onClick={()=>{props.deletePost(props.id)}} >Delete</button>
                
                </div>
            </div>
            </div>
            </div>
        
        )
    }

