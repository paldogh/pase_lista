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

app.use("/api", loginRoutes);
app.use('/alumnos', alumnosRoutes);

export default app;