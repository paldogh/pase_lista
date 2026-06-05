-- CreateTable
CREATE TABLE "Alumno" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "correo" TEXT NOT NULL,

    CONSTRAINT "Alumno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Maestro" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,

    CONSTRAINT "Maestro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Carrera" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Carrera_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Asistencia" (
    "id" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alumnoId" TEXT NOT NULL,

    CONSTRAINT "Asistencia_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Alumno_correo_key" ON "Alumno"("correo");

-- AddForeignKey
ALTER TABLE "Asistencia" ADD CONSTRAINT "Asistencia_alumnoId_fkey" FOREIGN KEY ("alumnoId") REFERENCES "Alumno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
