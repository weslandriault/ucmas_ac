const db = require('./db');
const parentSchema = new db.Schema({
  fullName: String,
  phoneNumber: String,
  role: String,
  email: String,
  children: [{ type: db.Schema.Types.ObjectId, ref: 'Student' }]
});
const Parent = db.model('Parent', parentSchema, 'parents');

module.exports = Parent;
