import { Router } from "express";
import { publicar, onMessage, TOPICO_STATUS_CHUVA } from "../services/mqttClient.js";

const router = Router();

let statusChuva = 'Desconhecido'

//Registar a função de escuta dos topicos
onMessage(TOPICO_STATUS_CHUVA, (mensagem) => {
    statusChuva = mensagem;
    console.log(`Mensagem Recebida no ${TOPICO_STATUS_CHUVA}: ${statusChuva}`)
})

router.get(`/controleChuva`, async (req, res) => {
    try {
        console.log(`Status da Chuva: ${statusChuva}`)

        return res.status(200).json({
            statusChuva
        })
    } catch (error) {
        return res.status(500).json({ error: `Erro ao obter dados!` })
    }
});

export default router


