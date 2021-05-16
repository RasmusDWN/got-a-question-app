module.exports = (questionDB) => {
  const express = require("express");
  const router = express.Router();

  /**** Routes ****/
  router.get('/', async (req, res) => {
    const questions = await questionDB.getQuestions();
    res.json(questions);
  });

  router.post('/', async (req, res) => {
    const question = req.body;

    if (question && question.title && question.description) {
      const savedQuestion = await questionDB.createQuestion(question.title, question.description);
      res.json(savedQuestion);
    } else {
      res.status(400).send("Missing title and/or description");
    }

  });

  router.get('/:id', async (req, res) => {
    const question = await questionDB.getQuestion(req.params.id);
    res.json(question);
  });

  router.post('/:id/answers', async (req, res) => {
    const id = req.params.id;
    const answer = req.body;

    if (id && answer && answer.answer) {
      const newAnswer = await questionDB.createAnswer(id, answer.answer);
      res.json(newAnswer);
    } else {
      res.status(400).send("Missing id or answer");
    }    
  });

  router.post('/:id/votes/:answerId', async (req, res) => {
    const answerId = req.params.answerId;

    if (answerId) {
      await questionDB.vote(answerId, "up");
      res.status(200).send("Ok");
    } else {
      res.status(400).send("Missing answerId");
    }
  });


  return router;
}
