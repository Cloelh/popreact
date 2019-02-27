import React, {Component} from 'react';
import {Link, LinkA} from 'react-router-dom';

import Createanaccount from './createanaccount';

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';

//root



class Home extends Component {
    render() {
        return (
            <div>
                <h1>The Pop</h1>
                <h2>Get your life together</h2>
                <Link to={'/createanaccount'}>Create an account</Link>
                <Link to={'/connexion'}>Connexion</Link>
            </div>
        );
    }
}

export default Home;
