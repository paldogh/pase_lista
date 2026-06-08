//este archivo lo compartimos entre todos, revisa bien antes de actualizar

import express from "express";
import loginRoutes from "./routes/login.routes.js";
import alumnosRoutes from './routes/alumnos.routes.js';
import materiaRoutes from "./routes/materias.routes.js";
import statsRoutes from "./routes/stats.routes.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    msg: "Backend funcionando"
  });
});

//ruta para el login
app.use("/api", loginRoutes);
//ruta para cosultar los alumnos
app.use('/alumnos', alumnosRoutes);
//ruta para materias
app.use("/api", materiaRoutes);
app.use("/api/stats", statsRoutes);

export default app;