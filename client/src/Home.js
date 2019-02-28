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

                    <main>
                        <a href='index.html'><img id="logo" src="../../images/Logo.png" height="120" width="200" alt=""/></a>
                
                        <div id="info">
                            <p>Pop is a new concept that we have developed which gives a new twist to the generic idea of a 'quiz'. We have done away with the competitive scoring aspect of the quiz as our application is orientated at the more serious matters one faces in their life, age dependant.</p>
                        </div>

                        <Link to='/createanaccount'><button className='button1'>Sign Up</button></Link>

                        <a href='login.html'><button className='button1'>Log In</button></a>
                
                        <h3>Special POP Quiz</h3>
                
                        <a href='#'><button class='button'>Start Quiz</button></a>
                    </main>
                </div>
                );
    }
}

export default Home;
