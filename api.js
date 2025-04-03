const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const studentsRoutes = require('./src/routes/student');

const app = express();
const port = 3000;


app.use(express.json());  // parsear json
app.use(cors());           // solicitudes desde otros dominios
app.use(helmet());         // sec adicional
// mi route
app.use('/students', studentsRoutes);

// server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});