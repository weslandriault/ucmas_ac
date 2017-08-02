const db = require('./db');
const studentSchema = new db.Schema({
  firstName: String,
  lastName: String,
  dateOfBirth: String,
  gender: String,
  details: {
    studentRegistrationNumber: String,
    studyingInGrade: Number,
    batchCode: String,
    courseInstructor: String,
    batchDays: String,
    batchTimings: String,
    beginClassDate: String,
    franchisee: String,
    location: String
  },
  contactInfo: {
    address: String,
    city: String,
    province: String,
    postalCode: String,
    phoneNumber: String,
    schoolName: String
  },
  creationDate: String,
  lastModifiedDate: String,
  registrationDate: String,
  directedFrom: {
    referral: Boolean,
    newspaperAdvt: Boolean,
    tvAds: Boolean,
    radioAds: Boolean,
    flyers: Boolean,
    signage: Boolean,
    others: String
  },
  emergencyContacts: [{ name: String, phoneNumber: String}],
  authorizedPersonsForPickup: [{ name: String, relationToChild: String }], 
  parents: [{ parentId: db.Schema.Types.ObjectId }],
  preferences: {
    preferredDays: String,
    preferredTimings: String
  },
  medicalDetails: {
    healthCardNumber: String,
    specialMedicalInstructions: String
  },
  formIdNo: Number
})
const Students = db.model('Student', studentSchema, 'students');

module.exports = Students;
