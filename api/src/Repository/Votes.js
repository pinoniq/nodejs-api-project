const connect = require('../db');

module.exports = {
  find: async (id) => {
    const db = await connect();

    return db.collection('votes').findOne({
      id,
    });
  },
  upvote: async (id) => {
    const db = await connect();

    return db.collection('votes').updateOne({
      id,
    }, {
      $inc: { upvotes: 1 },
    });
  },
  downvote: async (id) => {
    const db = await connect();

    return db.collection('votes').updateOne({
      id,
    }, {
      $inc: { downvotes: 1 },
    });
  },
  create: async (id) => {
    const db = await connect();

    return db.collection('votes').insertOne({
      id,
      upvotes: 0,
      downvotes: 0,
    })
  }
}
