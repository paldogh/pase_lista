import prisma from '../config/prisma.js';

export const obtenerAlumnos = async (req, res) => {
    try{
const alumnos = await prisma.alumno.findMany({

include:{
    grupo: true,
    tutor: true
} });

        return res.json ({
            success: true,
message: "Alumnos obtenidos correctamente",
            data: alumnos
       });

    }catch(error){
    console.log(error);

        return res.json ({
            success: false,
            message: "Error al obtener los alumnos"
        });

}
}

/*Se agregan las rutas */

// Buscar alumnos por grupo
export const obtenerAlumnosPorGrupo = async (req, res) => {
    try {
        const { grupo } = req.params; //aqui agarra el grupo que se le pone a la URL
        const alumnos = await prisma.alumno.findMany({
            where: {
                grupo: { nombre: grupo }
            },
            include: { grupo: true }
        });
        return res.status(200).json({ ok: true, data: alumnos });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ ok: false, msg: "Error del servidor" });
    }
}

// Buscar alumno por matrícula
export const obtenerAlumnoPorMatricula = async (req, res) => {
    try {
        const { matricula } = req.params;//aqui agarra la maticula que se le pone en la URL
        const alumno = await prisma.alumno.findUnique({
            where: { matricula },
            include: { grupo: true }
        });
        if (!alumno) return res.status(404).json({ ok: false, msg: "Alumno no encontrado" });
        return res.status(200).json({ ok: true, data: alumno });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ ok: false, msg: "Error del servidor" });
    }
}
  
// Buscar alumnos por nombre
export const obtenerAlumnosPorNombre = async (req, res) => {
    try {
        const { nombre } = req.params; //aqui agarra el nombre que se le pone en la URL
        const alumnos = await prisma.alumno.findMany({
            where: {
                nombre: {
                    contains: nombre,
                    mode: "insensitive"//busca alumnos que contengan ese nombre, sin importar si mayuscula o minuscula
                }
            },
            include: { grupo: true }
        });
        return res.status(200).json({ ok: true, data: alumnos });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ ok: false, msg: "Error del servidor" });
    }
}
 
// Buscar alumnos con faltas
export const obtenerAlumnosConFaltas = async (req, res) => {
    try {
        const alumnos = await prisma.alumno.findMany({
            where: {
                asistencias: {
                    some: {
                        estado: "FALTA"
                    }
                }
            },
            include: {
                grupo: true,
                asistencias: {
                    where: { estado: "FALTA" }
                }
            }
        });
        return res.status(200).json({ ok: true, data: alumnos });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ ok: false, msg: "Error del servidor" });
    }
}