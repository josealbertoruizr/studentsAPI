const { getAllStudents, addStudent, getStudent, updateStudent, deleteStudent } = require('../src/services/student');
const { students } = require('../src/config/db');

let studentsBackup;

beforeEach(() => {
    // backup de la bd fake
    studentsBackup = new Map(students);

    // reiniciar la bd fake
    students.clear();
    students.set('1', { nombre: 'Felipe', calificacion: 80, deuda: 0 });
    students.set('2', { nombre: 'Pepe', calificacion: 60, deuda: 0 });
    students.set('3', { nombre: 'Oscar', calificacion: 75, deuda: 100 });
});

afterEach(() => {

    students.clear();
    studentsBackup.forEach((value, key) => students.set(key, value));
});

describe('Service functions for students', () => {
    test('getAllStudents - Should return all students with their status', () => {
        const result = getAllStudents();
        expect(result).toEqual([
            { matricula: '1', nombre: 'Felipe', estatus: 'Aprobado' },
            { matricula: '2', nombre: 'Pepe', estatus: 'Pendiente' },
            { matricula: '3', nombre: 'Oscar', estatus: 'Reestructura' }
        ]);
    });

    test('addStudent - Should add a new student', () => {
        const newStudent = { matricula: '4', nombre: 'Diego', calificacion: 50, deuda: 200 };
        const result = addStudent(newStudent);

        expect(result).toEqual(newStudent);
        expect(students.has('4')).toBe(true);
    });

    test('getStudent - Should return a specific student', () => {
        const result = getStudent('1');
        expect(result).toEqual({ nombre: 'Felipe', calificacion: 80, deuda: 0 });
    });

    test('getStudent - Should return null for non-existent student', () => {
        const result = getStudent('99');
        expect(result).toBeNull();
    });

    test('updateStudent - Should update an existing student', () => {
        const updatedData = { nombre: 'Felipe Actualizado', calificacion: 90 };
        const result = updateStudent('1', updatedData);

        expect(result).toEqual({
            nombre: 'Felipe Actualizado',
            calificacion: 90,
            deuda: 0
        });
    });

    test('updateStudent - Should return null for non-existent student', () => {
        const result = updateStudent('99', { nombre: 'Non-existent' });
        expect(result).toBeNull();
    });

    test('deleteStudent - Should delete an existing student', () => {
        const result = deleteStudent('1');
        expect(result).toBe(true);
        expect(students.has('1')).toBe(false);
    });

    test('deleteStudent - Should return false for non-existent student', () => {
        const result = deleteStudent('99');
        expect(result).toBe(false);
    });
});