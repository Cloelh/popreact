import React, {Component} from 'react';

import Home from "./Home.js";


import {quizzes, users} from './examples';
import {Link} from 'react-router-dom';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';

//root



class Quizzes extends Component {
    constructor (props){
        super(props);
        this.state= {
            indexQuizzes: 0
        }
    }

    render() {
        //variable locale
        return (
            <div>
                <h1>Quizzes</h1>
                <div>
                    {quizzes.map(q => <Link to={'/questions/'+q._uid}> <img src={HTTP_SERVER_PORT_PICTURES + q.icon} />{q.name}</Link>)}
                </div>
            </div>
        );
    }
}

export default Quizzes;
