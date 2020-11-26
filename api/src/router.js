const express = require('express');
const router = express.Router();

const voter = require('./Voter');

/* GET the current amount of votes casted on an intem */
router.get('/votes/:item', (req, res, next) => {
  voter.find(req.params.item).then((item) => res.send(item)).catch(console.error);
});

router.post('/votes/:item/up', (req, res, next) => {
  voter.upvote(req.params.item).then((item) => res.send(item)).catch(console.error);
});

router.post('/votes/:item/down', (req, res, next) => {
  voter.downvote(req.params.item).then((item) => res.send(item)).catch(console.error);
});

module.exports = router;
