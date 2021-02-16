const userController = {
  getName: async (req, res) => {
    res.status(200).send(`The username is ${req.session.userName}`);
  },
  setName: async (req, res) => {
    req.session.userName = 'John';
    res.status(200).send('User has been set');
  },
};

module.exports = userController;
