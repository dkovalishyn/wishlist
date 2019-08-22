const Person = require("../../models/Person");

/**
 * searchUser
 *
 * GET: /api/v1/user/search
 *
 * query:
 *   firstName {string} First name of User.
 *   lastName {string} Last name of User.
 *   age {integer} Age of User.
 *
 */
exports.handler = async function searchUser(req, res) {
  const {
    query: { fullName }
  } = req;
  try {
    const aggregate = await Person.aggregate([
      {
        $project: {
          _id: 0,
          userId: 1,
          firstName: 1,
          lastName: 1,
          avatar: 1,
          fullName: { $concat: ["$firstName", " ", "$lastName"] }
        }
      },
      { $match: { fullName: { $regex: new RegExp(fullName) } } },
      { $project: { fullName: 0 } }
    ]);
    res.send(aggregate);
  } catch (e) {
    res.status(404).send(e.message);
  }
};
