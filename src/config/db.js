// una fake db 
const students = new Map([
    ['1', { matricula: '1', nombre: 'Felioe', calificacion: 70, deuda: 0 }],
    ['2', { matricula: '2', nombre: 'Pepe', calificacion: 0, deuda: 0 }],
    ['3', { matricula: '3', nombre: 'Oscar', calificacion: 70, deuda: 100 }],
    ['4', { matricula: '4', nombre: 'Diego', calificacion: 0, deuda: 100 }],
]);

module.exports = { students };