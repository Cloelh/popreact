import React, {Component} from 'react';
import {Link, LinkA} from 'react-router-dom';

import Createanaccount from './createanaccount';

//import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES, HTTP_SERVER_PORT} from './constants.js';
import axios from 'axios'

//root



class Home extends Component {
    constructor(){
        super();
        this.state = {
            users : []
        }
    }

    async loadData() {
      const users = (await axios.get(HTTP_SERVER_PORT + 'quizzes')).data;  // We need to wait for the response.
      this.setState({quizzes: quizzes});
    }   

    render() {
        return (
            <div>
                <h1>The Pop</h1>
                <h2>Get your life together</h2>
                <form onSubmit={(e) => this.logIn(e)}>
                    <input type="text" name="usrname" placeholder='Username'/><br/>
                    <input type="password" name="password" placeholder='Password'/><br/>
                    <input type="submit" value="Connexion"/>
                </form>
                <Link to={'/createanaccount'}>Create an account</Link>
            </div>
        );
    }
}

export default Home;
