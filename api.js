const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hola mundo')
});



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});