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
                <form>
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
