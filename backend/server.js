const express = require('express');
const app = express();

global.__basedir = __dirname;

const db = require('./config/db.config');

const Cliente = db.Cliente;

let router = require('./routes/router');

const cors = require('cors')
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.static('resources'));
app.use('/', router);

// Create o servidor
const server = app.listen(8080, function () {

    let host = server.address().address
    let port = server.address().port

    console.log("O App está executando em http://%s:%s", host, port);
})