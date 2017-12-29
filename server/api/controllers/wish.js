module.exports = {
  getWishes: getWishes
};

const wishes = [{
  id: 0,
  description: 'My very first wish'
}];

function getWishes(req, res) {
  res.send(wishes)
}
