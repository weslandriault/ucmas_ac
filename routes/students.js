const express = require('express');
const router = express.Router();
const Student = require('../model/student');
const Parent = require('../model/parent');
const Promise = require('bluebird');

function formatForCreateStudent(unformattedJSON) {
  const student = Object.assign({}, unformattedJSON);

  delete student.parents;
  
  return student;
}

// Get All Students
router.get('/students', function _onGetAllStudents(req, res) {
  Student.find()
    .then((students) => res.json(students))
    .catch((err) => res.send(err));
});

// Get a Single Student by Unique Identifier
router.get('/students/:id', function _onGetSingleStudent(req, res) {
  var studentId = req.params.id;

  Student.findById(studentId)
    .then((student) => res.json(student))
    .catch((err) => res.send(err));
});

router.post('/students', function _handleCreationEvents(req, res) {
  const studentObj = req.body;
  const parents = studentObj.parents;
  // First create the parent
  if (!parents || !parents.length) {
    res.status(400)
      .send('At least one parent must be included in student registration!');
    return;
  }

  console.log('check out the json: ' + JSON.stringify(req.body))

  Promise.map(parents, function _createParent(parent) {
    console.log('sending in the parent: ')
    return Parent.create(parent)
  })
  .then((parents) => {
    studentObj.parents = parents.map((parent) => ({ parentId: parent._id }));
    console.log(`here it is ${JSON.stringify(studentObj)}`)
    return Student.create(studentObj)
  })
  .then((student) => res.json(student))
  .catch((err) => res.send(err));
});

module.exports = router;
