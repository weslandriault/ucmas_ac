const mongoose = require('mongoose');
const Promise = require('bluebird');

Promise.promisifyAll(mongoose);
mongoose.connect('mongodb://localhost/ucmas_ac');

module.exports = mongoose;
