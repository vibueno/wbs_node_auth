const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

// init of dotenv
dotenv.config();

const { PORT, SECRET } = process.env;

const app = express();

app.use(bodyParser.json());
// urlencoded format
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.set('trust proxy', 1); // trust first proxy
app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {},
  })
);

// import routes
const pokeRoutes = require('./routes/User');

// use postsRoutes
app.use('/', pokeRoutes);

// Starting server
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
