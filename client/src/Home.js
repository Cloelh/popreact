import React, {Component} from 'react';

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
                    Username: <input type="text" name="usrname"/><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default Home;
