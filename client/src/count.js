import React, {Component} from 'react';



import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';

//root
import Createanaccount from './createanaccount';
import Connexion from './connexion'


class Count extends Component {
    render() {
        return (
            <div>
                <h1>Compte de 'NAME'</h1>
                You're like %
            </div>
        );
    }
}

export default Count;
