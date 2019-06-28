import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default function Post (props) {
        return (
            <div>
                <Link to={`/posts/${props.id}`}>

                <h2>{props.event_type}</h2>
                <h2>{props.item_name}</h2>
                <h2>{props.picture}</h2>
                <h2>{props.link}</h2>

                </Link>
            </div>
        )
    }

