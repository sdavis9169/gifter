import React from 'react';
import { Link } from 'react-router-dom';


export default function group(props) {
    return (
        <div>
            <Link to={`/title/title.id`}>
            <h1>{props.title}</h1>
            </Link>
        </div>
    )
}