const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const index = require('./routes/index')
const students = require('./routes/students');
const ejs = require('ejs');
const app = express();
const workingDir = __dirname;
const port = 3000;

// View Engine
app.set('views', path.join(workingDir, 'views'));
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);


// Set Static Folder
// app.use(express.static(path.join(workingDir), 'client'));

// Body Parse MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/api', students);

app.listen(port, () => { console.log(`Server started on port: ${port}`); });
