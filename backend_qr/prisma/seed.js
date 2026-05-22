import 'dotenv/config';

import { PrismaClient } from '@prisma/client';

import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL
});

const prisma = new PrismaClient({
    adapter
});

async function main() {

    // CARRERA
    const carrera = await prisma.carrera.create({
        data: {
            nombre: 'Tecnologías de la Información',
            clave: 'TI'
        }
    });

    // GRUPO
    const grupo = await prisma.grupo.create({
        data: {
            nombre: 'TI-401',
            cuatrimestre: 4,
            turno: 'MATUTINO',
            carreraId: carrera.id
        }
    });

    // ALUMNO
    await prisma.alumno.create({
        data: {
            matricula: '20240001',
            nombre: 'Aldo',
            apellidoPaterno: 'Hernandez',
            apellidoMaterno: 'Perez',
            correo: 'aldo@gmail.com',
            telefono: '7710000000',
            grupoId: grupo.id
        }
    });

    console.log('Seed ejecutado correctamente');

}

main()
.catch((error) => {
    console.log(error);
})
.finally(async () => {
    await prisma.$disconnect();
});