let students = [
    { matricula: 'A001', nombre: 'Juan Pérez', estatus: 'aprobado' },
    { matricula: 'A002', nombre: 'María López', estatus: 'pendiente' },
    { matricula: 'A003', nombre: 'Carlos Ramírez', estatus: 'expulsado' },
    { matricula: 'A004', nombre: 'Ana Torres', estatus: 'restructurado' }
];

exports.getAllStudents = (res, req) => {
    res.json(students);
};

exports.addStudent = (req, res) => {
    const student = req.body;
    students.push(student);
    res.status(200).json(student);
};

exports.updateStudent = (req, res) => {
    const { matricula } = req.params;
    const updatedData = req.body;

    const index = students.findIndex(student => student.matricula === matricula);

    if (index === -1) {
        return res.status(404).json({ message: 'Estudiante no encontrado' });
    }

    students[index] = { ...students[index], ...updatedData };
    res.json(students[index]);
};

exports.deleteStudent = (req, res) => {
    const { matricula } = req.params;
    const index = students.findIndex(student => student.matricula === matricula);

    if (index === -1) {
        return res.status(404).json({ message: 'Estudiante no encontrado' });
    }

    const deletedStudent = students.splice(index, 1);
    res.json(deletedStudent);
};

exports.getStudentsByStatus = (req, res) => {
    const { estatus } = req.params;
    const filteredStudents = students.filter(student => student.estatus === estatus);
    res.json(filteredStudents);
};