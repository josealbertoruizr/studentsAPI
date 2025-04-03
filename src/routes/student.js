// mi route

const express = require('express');
const router = express.Router();
const studentsController = require('../controller/studentController');


// route
router.get('/', studentsController.getAllStudents);

module.exports = router;