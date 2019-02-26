import React, {Component} from 'react';

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';

//root
import {Link} from "./Quizzes";





class Question extends Component {
    render() {
        return (
            <div>
                {this.props.question.question}
                <form onSubmit={(e) => this.props.conseil(e)}>
                    {this.props.question.txtAnswers.map(txt => <p><input name="rep" type="radio" />{txt}</p>)}
                    {this.props.question.imgAnswers.map(img => <div><input name="rep" type="radio" />
                        <img src={HTTP_SERVER_PORT_PICTURES + img}></img></div>)}
                    <input type="submit" value="Submit"/>
                </form>
                {this.props.soumission == 0 ? <div>{this.props.question.conseil[this.props.pop]}<button onClick={e=>this.props.reponse(e)}>Next</button></div>
                    : null}
            </div>
        );
    }
}



class Questions extends Component {
    constructor(props) {
        super(props);
        this.quizz = quizzes.filter(q=> q._uid = this.props.match.params.id)[0];
        this.state = {current : 0, soumission: 1, pop : 0};
        this.reponse = this.reponse.bind(this);
        this.conseil = this.conseil.bind(this);
    }

    conseil(e) {
        e.preventDefault();
        console.log(this.props.question.question);
        this.setState({soumission : 1 - this.state.soumission});
        this.setState({pop : e.target.elements[0].checked ? 0 : 1});
    }

     reponse(e) {
        e.preventDefault();
        console.log(1);
        this.setState({current : this.state.current+1});
         this.setState({soumission : 1 - this.state.soumission});
    }

    render() {
        if(this.state.current == this.quizz.questions.length)
            return (<div>fini</div>

            );

        return (
            <div>
                {this.quizz.name}
                <Question soumission= {this.state.soumission} question={this.quizz.questions[this.state.current]}
                          reponse = {this.reponse} conseil = {this.conseil} pop = {this.state.pop} />
            </div>
        );
    }
}

export default Questions;