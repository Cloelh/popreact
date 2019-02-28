import React, {Component} from 'react';

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';

//root
import Home from './Home';


class Connexion extends Component {
    render() {
        return (
            <div>
                <h1>Connexion</h1>
                <h2>Get your life together</h2>
                <form>
                    <input type="text" name="usrname" placeholder='Username'/><br/>
                    <input type="password" name="password" placeholder='Password'/><br/>
                    <input type="submit" value="Connexion"/>
                </form>
            </div>
        );
    }
}


export default Connexion;