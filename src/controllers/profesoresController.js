const path = require('path');
const profesoresServices = require('../services/profesoresService');

let profesoresController = {

    /**  Aqui van los metodos que se encargan de manejar a los profesores*/
   
    login: function (req, res) {
        res.render('Login/login');
    },
    registro: function (req, res) {
        res.render('Registro/register');
    },
    homeLogged: function (req, res) {
        res.render('Home-Profesores/inicioProfes');
        
    },
    misAlumnos: function (req, res) {
        let estudiantes = profesoresServices.findAllStudients();

        res.render('listadoAlumnos/listadoAlumnos', {estudiantes: estudiantes});
        
    },
    perfil1: function (req, res) {
        res.render('Perfil-Profesor/seteoPerfilProfes-1');
    },
    perfil2: function (req, res) {
        res.render('Perfil-Profesor/seteoPerfilProfes-2');
    },
    administrarClases: function (req, res) {
        res.render('Perfil-Profesor/administraClases');
    },
};

module.exports = profesoresController;