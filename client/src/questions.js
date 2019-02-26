import React, {Component} from 'react';

import Home from "./Home.js";


import {quizzes, users} from './examples';
import {Link} from './food'
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';

//root



class Questions extends Component {
    constructor (props){
        super(props);
        this.state= {
            indexQuestion: 0
        }
    }

    render() {
        //variable locale
        return (
            <div>
                <h1>Quizzes</h1>
                <strong>
                    {quizzes.map(q => <p>{q.name}</p>)}
                </strong>
            </div>
        );
    }
}

export default Questions;
