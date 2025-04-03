// logic for managing student data

const { students } = require('../config/db');

function calculateStatus(student) {
    if (student.calificacion >= 70) {
        return student.deuda > 0 ? "Reestructura" : "Aprobado";
    } else {
        return student.deuda > 0 ? "Expulsado" : "Pendiente";
    }
}

function getAllStudents() {
    const result = [];
    students.forEach((student, matricula) => {
        result.push({
            matricula,
            nombre: student.nombre,
            estatus: calculateStatus(student)
        });
    });
    return result;
}

function addStudent(newStudent) {
    students.set(newStudent.matricula, newStudent);
    return newStudent;
}

function getStudent(matricula) {
    return students.get(matricula) || null;
}

function updateStudent(matricula, updatedData) {
    if (!students.has(matricula)) return null;

    const student = students.get(matricula);
    const updatedStudent = { ...student, ...updatedData };
    students.set(matricula, updatedStudent);
    return updatedStudent;
}

function deleteStudent(matricula) {
    return students.delete(matricula);
}

module.exports = {
    getAllStudents,
    addStudent,
    getStudent,
    updateStudent,
    deleteStudent
};