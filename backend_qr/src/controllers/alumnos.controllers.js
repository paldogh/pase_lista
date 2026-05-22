import prisma from '../config/prisma.js';

export const obtenerAlumnos = async (req, res) => {
    try{
const alumnos = await prisma.alumno.findMany();

        return res.json ({
            success: true,
data: alumnos
       });

    }catch(error){

        return res.json ({
            success: false,
            message: "Error al obtener los alumnos"
        });

}
}