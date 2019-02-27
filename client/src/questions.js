import React, {Component} from 'react';

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';

//root
import {Link} from "./Quizzes";





class Question extends Component {
    render() {
        const q = this.props.question;
        console.log("inQuestion",q);
        return (
            <div>
                {this.props.question.question}
                <form onSubmit={(e) => this.props.conseil(e)}>
                    {this.props.question.txtAnswers.map(txt => <p><input name="rep" type="radio" />{txt}</p>)}
                    {this.props.question.imgAnswers.map(img => <div><input name="rep" type="radio" />
                        <img src={HTTP_SERVER_PORT_PICTURES + img}></img></div>)}
                    <input type="submit" value="Submit"/>
                </form>
                {this.props.soumission == 0 ?
                    <div>Tu fais partie des {this.props.moy}% {this.props.question.conseil[this.props.pop]}
                        <button onClick={e=>this.props.reponse(e)}>Next</button>
                    </div>
                    : null
                }
            </div>
        );
    }
}



class Questions extends Component {
    constructor(props) {
        super(props);
        this.quizz = quizzes.filter(q=> q._uid == this.props.match.params.id)[0];

        let todo = [];
        for(let i = 0; i < this.quizz.questions.length;i++)
            todo.push(i);

        console.log(todo);
        let min =0;
        let max=todo.length;
        let rand = Math.floor(min + (Math.random()* (max-min)));
        console.log("rand",rand);
        let n=todo[rand];
        console.log(n + " " + rand);
        let nT=todo.filter(nb => nb!=n);


        this.state = {current : n, soumission: 1, pop : 0, todo : nT, moy : 0};
        console.log("state",this.state);

        this.reponse = this.reponse.bind(this);
        this.conseil = this.conseil.bind(this);

    }

    conseil(e) {
        console.log(this.state.moy)
        e.preventDefault();
        this.setState({soumission : 1 - this.state.soumission});
        this.setState({pop : e.target.elements[0].checked ? 0 : 1});

        //let A et B et nbpont
        let A =this.quizz.questions[this.state.current].pointA;
        let B =this.quizz.questions[this.state.current].pointB;
        let nb=this.quizz.questions[this.state.current].nbpoint;

        //calcul des nouv A et B
        if (e.target.elements [0].checked){
            A++
        }
        else {
            B++
        }

        //verification
        console.log('pointA : '+A);
        console.log('pointB : '+B);

        //calcul du pourcentage
        nb = A+B;
        if (e.target.elements [0].checked) {
            this.state.moy = (A/nb)*100;
        }
        else {
            this.state.moy = (B/nb)*100
        }
        console.log(this.state.moy+"%");


        //remplace A et B et nb dans la base de donnée
        this.quizz.questions[this.state.current].pointA = A;
        this.quizz.questions[this.state.current].pointB = B;
        this.quizz.questions[this.state.current].nbpoint = nb;

    }

     reponse(e) {
        e.preventDefault();
        console.log(1);
        let nT = null;
        let n = 0;
         if(this.state.todo.length >0) {
             let min = 0;

             let max = this.state.todo.length;
             let rand = Math.floor(min + (Math.random() * (max - min)));
             console.log("rand", rand);
             n = this.state.todo[rand];
             nT = this.state.todo.filter(nb => nb != n);
             console.log("Now : " + n + " " + rand);
         } else
             nT = false;

         this.setState({current : n, todo : nT});


        this.setState({soumission : 1 - this.state.soumission});
    }

    render() {
        if(this.state.todo === false) {
            return (<div>Fini</div>);
        }

           // );
        const q = this.quizz.questions[this.state.current];
        console.log("Q",q);
        console.log("current",this.state.current);
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