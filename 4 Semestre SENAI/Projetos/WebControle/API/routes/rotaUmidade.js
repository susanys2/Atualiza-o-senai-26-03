import { Router } from "express";
import { publicar, onMessage, TOPICO_NIVEL_UMIDADE } from "../services/mqttClient.js";

const router = Router();

let nivelUmidade = 'Desconhecido'

//Registar a função de escuta dos topicos
onMessage(TOPICO_NIVEL_UMIDADE, (mensagem) => {
    nivelUmidade = mensagem;
    console.log(`Mensagem Recebida no ${TOPICO_NIVEL_UMIDADE}: ${nivelUmidade}`)
})

router.get(`/nivelUmidade`, async (req, res) => {
    try {
        console.log(`Nivel da Umidade: ${nivelUmidade}`)

        return res.status(200).json({
            nivelUmidade
        })
    } catch (error) {
        return res.status(500).json({ error: `Erro ao obter dados!` })
    }
});

export default router


