

import { Router } from 'express';
import { obtenerAlumnos } from '../controllers/alumnos.controllers.js';
/*----------------------Se importan las rutas nuevas--------------------------------------------------------------*/
import { obtenerAlumnosPorGrupo } from '../controllers/alumnos.controllers.js'; //1ra ruta buscar alumnos por grupo
import { obtenerAlumnoPorMatricula } from '../controllers/alumnos.controllers.js'; //2da ruta obtener alumnos por matricula
import { obtenerAlumnosPorNombre } from '../controllers/alumnos.controllers.js'; //3ra ruta para obtener alumnos por nombre
import { obtenerAlumnosConFaltas } from '../controllers/alumnos.controllers.js'; //4ta ruta para obtener alumnos con falta
const router = Router();
router.get('/', obtenerAlumnos);
/*----------------------Rutas de la api--------------------------------*/
// buscar alumnos por grupo
router.get( '/grupo/:grupo', obtenerAlumnosPorGrupo );

//buscar alumno por matricula
router.get ('/matricula/:matricula', obtenerAlumnoPorMatricula );

//buscar alumnos por nombre 
router.get ('/buscar/:nombre', obtenerAlumnosPorNombre);

//buscar alumnos con falta
router.get ('/faltas', obtenerAlumnosConFaltas); 

export default router;