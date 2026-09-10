import { Router } from "express";
const router = Router();

//Variável Global
let ultimaLeitura = null;

//EndPoint para receber a leitura do RFID  -aqui ele aciona o ESP32
router.post(`/leitura`, async (req, res) => { 
   const { uid } = req.body;
   if(!uid) return res.status(400).json({ mensagem: `UID não foi informado!` });
   ultimaLeitura = uid;
   console.log(`Tag lida: ${uid}`);
   return res.json({mensagem: `Cartão capturado com sucesso`, uid});
});

//EndoPoint - aciona a página
router.get(`/leitura`, async (req, res) => {
    return res.json({ uid: ultimaLeitura });
});

//Endpoint - aciona a página
router.post(`/cadastrar`, async (req, res) => {
    //Recebendo no corpo da página
    const { nome } = req.body;
    const { uid } = req.body;

    try{
        const comando = `INSERT INTO usuarios (nome, uid) VALUES ($1, $2)`;
        const result = await BD.query(comando, [nome, uid]);
        ultimaLeitura = null;
        return res.status(201).json({mensagem: `Usuário Cadastrado`});
    }catch(error){
        return res.status(500).json({error: `Erro ao cadastrar usuário (UID pode já existir)` + error}); 
    }
})

//EndPoint - aciona ESP32
router.post(`/historico`, async (req, res) => {

})

export default router


