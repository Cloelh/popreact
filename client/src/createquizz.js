import React, {Component} from 'react';

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';




class Createquizz extends Component {
    render() {
        return (
            <div>
                <h1>Create a new quizz</h1>
                <form>
                    <input type="text" name="usrname" placeholder='Name of quizz'/><br/>
                    <input type="text" name="question" placeholder='The question'/><br/>
                    <input type="text" name="ans1" placeholder='Reponse A'/><br/>
                    <input type="text" name="consA" placeholder='Tip A'/><br/>
                    <input type="text" name="ans2" placeholder='Reponse B'/><br/>
                    <input type="text" name="ans2" placeholder='Reponse B'/><br/>
                    <input type="submit" value="Enter a new quesion"/>
                    <input type="submit" value="Create"/>
                </form>
            </div>
        );
    }
}


export default Createquizz;