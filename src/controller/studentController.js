const studentService = require('../services/student');

exports.getAllStudents = (req, res) => {
    const students = studentService.getAllStudents();
    res.json(students);
};

exports.addStudent = (req, res) => {
    const newStudent = req.body;
    const addedStudent = studentService.addStudent(newStudent);
    res.status(201).json(addedStudent);
};