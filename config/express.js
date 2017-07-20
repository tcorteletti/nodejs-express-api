var express = require('express')
    ,app = express()
    ,bodyParser = require('body-parser')
    ,routes = require('../app/routes')
    ,cors = require('cors');

// use it before all route definitions
app.use(cors({origin: '*'}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

module.exports = app;