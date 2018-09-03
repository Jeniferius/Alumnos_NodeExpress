var express = require('express');
var router = express.Router();
const modelAlumno = require('../models/alumno')

router.get('/index', (req, res) => {
    modelAlumno.getAll((err, rows) => {
        res.render('alumnos/index', {
            alumnos: rows
        });
    });
});

router.get('/new', (req, res) => {
    res.render('alumnos/new', {});
});

router.post('/create', (req, res) => {
    console.log(req.body); //req.params recibe los parametros de la id y body la infor que llega
    modelAlumno.insert(req.body, (err, result) => {
        if (err) return console.log(err);
        res.redirect('./index');
    });
});

router.get('/:id', (req, res) => {
    console.log(req.params.id);
    modelAlumno.getAlumno(req.params.id, (err, result) => {
        if (err) return console.log(err);
        res.send('alumno')
    })
})

module.exports = router;