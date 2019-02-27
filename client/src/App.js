import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';

//root
import Home from "./Home.js";
import About from "./About.js";
import Quizzes from "./Quizzes.js"
import Questions from "./questions.js"
import Createanaccount from "./createanaccount";
import Connexion from './connexion';



class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <header>
                        <div>LOGO</div>
                        <div>
                            <div>Name</div>
                            <div>Score</div>
                        </div>
					</header>
                    <div className='contentm'>
                        <Switch>
                            <Route exact={true} path="/" component={Home} />
                            <Route exact={true} path="/home" component={Home} />
                            <Route exact={true} path="/quizzes" component={Quizzes} />
                            <Route exact={true} path="/questions/:id" component={Questions} />
                            <Route exact={true} path="/about" component={About} />
                            <Route exact={true} path="/createanaccount" component={Createanaccount} />
                            <Route exact={true} path="/connexion" component={Connexion} />
                            <Route path="*" component={() => <p>Page Not Found</p>} />
                        </Switch>
                    </div>

                    <footer>
                        <div>@POP</div>
                    </footer>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
