var express = require('express');
var router = express.Router();
const modelAlumno = require('../../models/alumno');

//http://localhost:3000/api/alumnos/
router.get('/', (req, res) => {
    modelAlumno.getAll((err, rows) => {
        res.json(rows);
    });
});

//http://localhost:3000/api/alumnos/create
router.post('/create', (req, res) => {
    modelAlumno.insert(req.body, (err, result) => {
        res.json(result); 
    });
    console.log(req.body);
    res.send('Termina');
});

module.exports = router;