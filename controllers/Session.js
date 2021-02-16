const path = require('path');

const userController = {
  login: async (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  },
  connect: async (req, res) => {
    if (req.body.username === 'John' && req.body.psw === 'Doe') {
      req.session.isConnected = true;
      res.redirect('/session/admin');
    }
  },
  admin: async (req, res) => {
    req.session.isConnected
      ? res.status(200).send('Admin page!!')
      : res.redirect('/session/login');
  },
  logout: async (req, res) => {
    req.session.destroy();
    res.redirect('/session/login');
  },
};

module.exports = userController;
