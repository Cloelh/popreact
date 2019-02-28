import React, {Component} from 'react';

//import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES, HTTP_SERVER_PORT} from './constants.js';
import axios from 'axios'
//root
import Home from './Home';


class Createanaccount extends Component {
    constructor(){
        super();
        
    }

    render() {
        return (
            <div>
                <h1>Create an new account</h1>
                <h2>And get your life together</h2>
                <form>
                    <input type="text" name="name" placeholder='Name'/><br/>
                    <input type="text" name="usrname" placeholder='Username'/><br/>
                    <input type="password" name="password" placeholder='Password'/><br/>
                    <input type='number' name="age" placeholder='Your age'/><br/>
                    <input type="submit" value="Connexion"/>
                </form>
            </div>
    );
    }
}

export default Createanaccount;
