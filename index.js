import express from "express";
import cors from "cors";
import productsRouter from "./src/routes/products.router.js";
import { configDotenv } from "dotenv"
configDotenv();

import authRouter from "./src/routes/auth.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', productsRouter);
app.use('/auth', authRouter);
app.use((req,res, next) => {
    res.status(404).json({ message: 'Endpoint no encontrado' });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

