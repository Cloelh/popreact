import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import {quizzes, users, persons} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';

//root
import Home from "./Home.js";
import About from "./About.js";
import Quizzes from "./Quizzes.js"
import Questions from "./questions.js"
import Createanaccount from "./createanaccount";
import Connexion from './connexion';
import Count from './count';



class App extends Component {
    constructor (props) {
        super(props);
        this.state = {user: "toto"};
    }


    render(){

        const loginForm=<p> login form </p>;
        const x = <img id="pasta" src="../../images/pasta.png" height="70" width="70" alt=""/>;

        return (
            <BrowserRouter>
                <div>
                    <nav>
                        <img id="spud" src="../../images/Potatoe.png" height="60" width="75" alt=""/>

                        <h1><a href="about.html">Potatoes or Pasta?</a></h1>



                        {this.state.user && x}



                    </nav>
                    <div className='contentm'>
                        <Switch>
                            <Route exact={true} path="/" component={Home} />
                            <Route exact={true} path="/home" component={Home} />
                            <Route exact={true} path="/quizzes" component={Quizzes} />
                            <Route exact={true} path="/questions/:id" component={Questions} />
                            <Route exact={true} path="/about" component={About} />
                            <Route exact={true} path="/createanaccount" component={Createanaccount} />
                            <Route exact={true} path="/connexion" component={Connexion} />
                            <Route exact={true} path="/count" component={Count} />
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
