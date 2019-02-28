import React, {Component} from 'react';

import Home from "./Home.js";


//import {quizzes, users} from './examples';
import {Link} from 'react-router-dom';
import {HTTP_SERVER_PORT_PICTURES, HTTP_SERVER_PORT} from './constants.js';
import axios from 'axios'
//root



class Quizzes extends Component {
    constructor (props){
        super(props);
        this.state= {
            indexQuizzes: 0,
            quizzes : []
        }
        this.loadData();
    }

    async loadData() {
      const quizzes = (await axios.get(HTTP_SERVER_PORT + 'quizzes')).data;  // We need to wait for the response.
      this.setState({quizzes: quizzes});
    }   

    render() {
        //variable locale
        //return (<p>sometihg</p>);
        if(this.state.quizzes == []) {
            return (
                <p> Loading </p>
                );
        } else {
            return (
                <div>
                    <h1>Quizzes</h1>
                    <div>
                        {this.state.quizzes.map(q => <Link to={'/questions/'+q._id}> <img src={HTTP_SERVER_PORT_PICTURES + q.icon} />{q.name}</Link>)}
                    </div>
                </div>
            );
        }
    }
}

export default Quizzes;
