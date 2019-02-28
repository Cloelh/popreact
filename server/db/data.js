let u1 = {
  _uid: 1,
  name: 'toto',
  passwd: '123'
}

let q1 = {
    _uid: 1,
    name: 'quizz0',
  icon: 'quizz1/quizz1.jpg',
  keywords: ['kitchen', 'english'],
  questions: [{
    question: 'How often do you eat fast food ?',
    video: null,
    txtAnswers: ["Once a day minimum.", "I can't say exactly, sometimes, less than once a  month for sure"],
    imgAnswers: [],
    nbpoint:0,
    pointA:0,
    pointB:0,
      conseil:["PASTA ! You will probably die before finishing to read this sentence.", "POTATOE ! Keep that rhythm and you will enjoy every time you'll eat those junk food !"]
  }, {
    question: 'Where is Jenny, the sister of Brian?',
    video: null,
    txtAnswers: [],
    imgAnswers: ["quizz1/bathroom.jpg", "quizz1/kitchen.jpg"],
      nbpoint:0,
      pointA:0,
      pointB:0,
      conseil:['PASTA: ', 'POTATOES : ']
  }, {
    question: 'who is brian?',
    video: null,
    txtAnswers: ["a girl", "a boy"],
    imgAnswers: [],
      nbpoint:0,
      pointA:0,
      pointB:0,
      conseil:['PASTA: ', 'POTATOES : ']
  }],
  published: true,
  owner: db.users.findOne({name: "luk"}),
  scores: []
}

let q2 = {
    _uid: 2,
    name: 'quizz1',
  icon: 'quizz2/aix.jpg',
  keywords: ['Aix', 'Tourisme'],
  questions: [{
    question: 'where is Aix en Provence?',
    video: null,
    txtAnswers: ["In the north of France", "In the south of Italy", "In the south of France"],
    imgAnswers: [],
      nbpoint:0,
      pointA:0,
      pointB:0,
      conseil:['PASTA: ', 'POTATOES : ']
  }, {
    question: 'What is the rotonde?',
    video: null,
    txtAnswers: [],
    imgAnswers: ['quizz2/granet1.jpg', 'quizz2/sauveur2.jpg', 'quizz2/aix.jpg', 'quizz2/rotonde.jpg'],
      nbpoint:0,
      pointA:0,
      pointB:0,
      conseil:['PASTA: ', 'POTATOES : ']
  }],
  published: true,
  owner: db.users.findOne({name: "luk"}),
  scores: []
};


let Quizzes = [q1, q2];
let users = [u1];

db.quizzes.drop()
db.quizzes.insert(Quizzes)

