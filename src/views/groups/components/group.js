import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default function Group (props) {
        return (
            <div>
                <Link to={`/groups/${props.id}`}>
                <h2>{props.title}</h2>
                <p>created by: {props.email}</p>
                </Link>
            </div>
        )
    }

