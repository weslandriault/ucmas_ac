const db = require('./db');
const studentSchema = new db.Schema({
  first_name: String,
  last_name: String,
  registration_date: Date,
  date_of_birth: Date,
  sex: String,
  studying_in_grade: Number,
  address: String,
  city: String,
  province: String,
  postal_code: String,
  phone_number: String,
  name_of_school: String,
  directed_from: {
    referral: Boolean,
    newspaper_advt: Boolean,
    tv_ads: Boolean,
    radio_ads: Boolean,
    flyers: Boolean,
    signage: Boolean,
    others: String
  },
  health_card_number: String,
  special_med_instructions: String,
  form_id_no: Number
});
const Students = db.model('Students', studentSchema, 'students');

module.exports = Students;
