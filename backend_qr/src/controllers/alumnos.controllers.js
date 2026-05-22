import prisma from '../config/prisma.js';

export const obtenerAlumnos = async (req, res) => {
    try{
const alumnos = await prisma.alumno.findMany();

        return 

    }catch(error){

        return 

}
}