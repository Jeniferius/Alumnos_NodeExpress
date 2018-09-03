// Funciones para trabajar con la tabla alumno

const db = require('../db')

exports.getAll = (done) => {
    db.get().query('SELECT * FROM alumno', (err, rows) => {
        if (err) return done(err.message);
        done(null, rows);
    });
};

exports.insert = ({ nombre, apellido, fecha_nacimiento, nota_media, sexo, fk_idescuela }, done) => {
    console.log(fecha_nacimiento);
    db.get().query('INSERT INTO alumno VALUES (?,?,?,?,?,?,?)', [null, nombre, apellido, fecha_nacimiento, nota_media, sexo, fk_idescuela], (err, result) => {
        if (err) return done(err.message);
        done(null, result.insertId);
    });
    
}

exports.getAlumno = (id, done) => {
    db.get().query('SELECT * FROM alumno where id = ' + id, (err, rows) => {
        if (err) return done(err.message);
        done(null, rows);
    });
}