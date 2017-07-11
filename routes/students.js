const express = require('express');
const router = express.Router();
const Students = require('../db/students');

// Get All Students
router.get('/students', function _onGetAllStudents(req, res) {
  Students.find()
    .then((students) => res.json(students))
    .catch((err) => res.send(err));
});

// Get a Single Student by Unique Identifier
router.get('/students/:id', function _onGetSingleStudent(req, res) {
  var studentId = req.params.id;
  
  Students.findById(studentId)
    .then((student) => res.json(student))
    .catch((err) => res.send(err));
})

module.exports = router;
