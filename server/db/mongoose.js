const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// db connexion
mongoose.connect('mongodb://localhost/quizz',{ useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("connected to", db.client.s.url);
});

// database collections
const usersSchema = Schema({
  name: String,
  userName: String,
  password: String,
  age: Number,
  status: Number
});

const questionsSchema = Schema({
  title: String,
  category: String,
  answer1: String,
  statistic1: Number,
  picture1: String,
  tip1: String,
  answer2: String,
  statistic2: Number,
  picture2: String,
  tip2: String
});

const quizzesSchema = Schema({
  name: String,
  icon: String,
  keywords: [],
  statistic1: Number,
  questions: [
  	{
  		question: String,
	  	video: String,
	  	txtAnswers: [],
	  	imgAnswers: [],
	  	nbpoint: Number,
	    pointA: Number,
	    pointB: Number,
	    conseil:[]
	}
  	],
  published: Boolean,
  owner: Number,
  scores: []
});


// exports
const Users = mongoose.model('Users', usersSchema);
const Questions = mongoose.model('Questions', questionsSchema);
const Quizzes = mongoose.model('Quizzes', quizzesSchema);

module.exports = {};
module.exports.users = Users;
module.exports.questions = Questions;
module.exports.quizzes = Quizzes;