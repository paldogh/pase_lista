/* Configurar prisma para conectarnos a nuestra bd de posgres */

import { PrismaClient } from "@prisma/client";
import {PrismaPg} from "@prisma/adapter-pg";

//conexión a la bd
const  conectionString = process.env.DATABASE_URL;
const adapter = new PrismaPg({conectionString});
const prisma = new PrismaClient({adapter});

export default prisma;