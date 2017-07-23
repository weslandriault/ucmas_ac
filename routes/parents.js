const express = require('express');
const router = express.Router();
const parent = require('../model/parent');

// Get All parent
router.get('/parent', function _onGetAllParents(req, res) {
  parent.find()
    .then((parent) => res.json(parent))
    .catch((err) => res.send(err));
});

// Get a Single Student by Unique Identifier
router.get('/parent/:id', function _onGetSingleParent(req, res) {
  var parentId = req.params.id;

  parent.findById(parentId)
    .then((parent) => res.json(parent))
    .catch((err) => res.send(err));
});

router.post('/parent', function _handleCreationEvents(req, res) {
  const parents = req.body.parents;
  // First create the parent
  parent.create(req.body)
    .then((parent) => res.json(parent))
    .catch((err) => res.send(err))

});

module.exports = router;
