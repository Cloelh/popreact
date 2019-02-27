import React, {Component} from 'react';
import {persons} from './examples';




class Count extends Component {
    render() {
        return (
            <div>
                <h1>Compte de {persons.surname}</h1>
                You're like % users
            </div>
        );
    }
}

export default Count;
