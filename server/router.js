const express = require("express");

const bodyParser = require("body-parser");
const router = express.Router();

const db = require('./db/mongoose.js');
const Users = db.users;
const Questions = db.questions;
const Quizzes = db.quizzes;

router
  .use(express.static('resources'))
  .use(bodyParser.json()) // for parsing application/json
  .use(bodyParser.urlencoded({
    extended: true
  })) // for parsing application/x-www-form-urlencoded
  .get("/users", (req, res) => {
    Users
      .find({})
      .exec((err, data) => {
        if (err) console.log("error", err);
        else res.json(data);
      });
  })
  .get("/users/:userName", (req, res) => {
    Users
      .findOne({
        name: req.params.userName
    }).exec((err, data) => {
        if (err) return res.status(500).send(err);
        else res.json(data);
    });
  })
  .post("/newUser", (req, res) => {
    const u = new Users(req.body);    // The json object is the body of the request
    u.save()                          // Save the object.
     .then(item => res.json(item))     // send the object in response
     .catch(err => res.status(400).send("unable to save to database"));
  })
  .get("/quizzes", (req, res) => {
    Quizzes
      .find({})
      .exec((err, data) => {
        if (err) console.log("error", err);
        else res.json(data);
      });
  })
  .get("/quizz/:id", (req, res) => {
    Quizzes
      .findOne({
        _id: req.params.id
      })
      .exec((err, data) => {
        if (err) console.log("error", err);
        else res.json(data);
      });
  })
  .patch('/statisticUpdate/:id', (req, res) => {
    if(req.body.answer === 1) {
      Quizzes
      .update( {_id : req.params.id} , 
                {$inc : {"questions.$[elem].pointA" : 1} } , 
                {arrayFilters: [{"elem.question": req.body.question}]},
                err => {
           if (err)
             res.status(500).send(err)
           else res.json({ok: true});

      });
    } else if (req.body.answer === 2) {
      Quizzes
      .update( {_id : req.params.id} , 
                {$inc : {"questions.$[elem].pointB" : 1} } , 
                {arrayFilters: [{"elem.question": req.body.question}]},
                err => {
           if (err)
             res.status(500).send(err)
           else res.json({ok: true});

      });
    }
  })
  .post("/newQuizz", (req, res) => {
    const q = new Quizzes(req.body);    // The json object is the body of the request
    q.save()                          // Save the object.
     .then(item => res.json(item))     // send the object in response
     .catch(err => res.status(400).send("unable to save to database"));
  })
  .get("/questions", (req, res) => {
    Questions
      .find({})
      .exec((err, data) => {
        if (err) console.log("error", err);
        else res.json(data);
      });
  })
  .get("/questions/:id", (req, res) => {
    Questions
      .findOne({
        _id: req.params.id
    }).exec((err, data) => {
        if (err) return res.status(500).send(err);
        else res.json(data);
    });
  })
  .post("/newQuestion", (req, res) => {
    const q = new Questions(req.body);    // The json object is the body of the request
    q.save()                          // Save the object.
     .then(item => res.json(item))     // send the object in response
     .catch(err => res.status(400).send("unable to save to database"));
  })
  .patch('/statisticUpdateOldOne/', (req, res) => {
    if(req.body.answer === 1) {
      Questions
      .findOneAndUpdate({   // Find the data
         title: req.body.title
      }, {
          $inc: { statistic1: 1 }
      }, err => {
          if (err)
            res.status(500).send(err)
          else res.json({ok: true});
      })
    } else if (req.body.answer === 2) {
      Questions
      .findOneAndUpdate({   // Find the data
         title: req.body.title
      }, {
          $inc: { statistic2: 1 }
      }, err => {
          if (err)
            res.status(500).send(err)
          else res.json({ok: true});
      })
    }
  })
  .post('/upload', (req, res) => {
  req.files.file.mv(__dirname + '/resources/pictures/' + req.files.file.name,
      (err) => {
        if (err)
          return res.status(500).send(err);
        res.json({file: req.files.file.name});
      }
    );
})
  .use((req, res) => {
    res.status(400);
    res.json({
      error: "Bad request"
    });
  });


module.exports = router;
