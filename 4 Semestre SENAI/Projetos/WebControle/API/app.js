import express from "express";
import cors from "cors";
import rotaLed from './routes/rotaLed.js';
import rotaNivel from './routes/rotaNivel.js'

const app = express();
app.use(cors());
app.use(express.json());

//Rota que vai buscar e retornar essa escrita
app.get('/', (req, res) => {
    res.json("API no ar")
})
app.use('/controleLed', rotaLed)
app.use('/controleNivel', rotaNivel)

const porta = 3000
app.listen(porta, () => {
    console.log(`Servidor iniciado http://localhost:${porta}`)
})