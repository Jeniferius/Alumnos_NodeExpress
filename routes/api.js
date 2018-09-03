var express = require('express');
var router = express.Router();

let alumnosRouter = require('./api/alumnos');
router.use('/alumnos', alumnosRouter); // /api/alumnos

module.exports = router;