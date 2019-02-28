import React, {Component} from 'react';
import {persons} from './examples';

import {Link, LinkA} from 'react-router-dom';




class Count extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Compte de {persons.surname}</h1>
                    You're like % users
                </div>

                <div>
                    g,rkeo
                </div>
                <Link to='./'><button className='button'>Create questions</button></Link>

            </div>
        );
    }
}

export default Count;
