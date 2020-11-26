const repository = require('../Repository/Votes');

/**
 * @param id
 * @returns {Promise<*>}
 */
const find = async (id) => {
  let item = await repository.find(id);

  // if no item was found, create a new one
  if (!item) {
    await repository.create(id);
    item = await repository.find(id);
  }

  return item;
};

/**
 * @param id
 * @returns {Promise<*>}
 */
const upvote = async (id) => {
  await repository.upvote(id);

  return find(id);
};

/**
 * @param id
 * @returns {Promise<*>}
 */
const downvote = async (id) => {
  await repository.downvote(id);

  return find(id);
};

module.exports = {
  find,
  upvote,
  downvote,
};
