import express from "express";
import loginRoutes from "./routes/login.routes.js";
import alumnosRoutes from './routes/alumnos.routes.js';

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

export default app;