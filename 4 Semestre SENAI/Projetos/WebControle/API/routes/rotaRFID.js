import { Router } from "express";
import { BD } from "../db.js";

const router = Router();

//Variável Global
let ultimaLeitura = null;

//EndPoint para receber a leitura do RFID  -aqui ele aciona o ESP32
router.post(`/leitura`, async (req, res) => {
    const { uid } = req.body;
    if (!uid) return res.status(400).json({ mensagem: `UID não foi informado!` });
    ultimaLeitura = uid;
    console.log(`Tag lida: ${uid}`);
    return res.json({ mensagem: `Cartão capturado com sucesso`, uid });
});

//EndoPoint - aciona a página
router.get(`/leitura`, async (req, res) => {
    return res.json({ uid: ultimaLeitura });
});

//Endpoint - aciona a página  -  chamada quando clicamos no botão 
router.post(`/cadastrar`, async (req, res) => {
    //Recebendo no corpo da página
    const { nome } = req.body;
    const { uid } = req.body;

    try {
        const comando = `INSERT INTO usuarios (nome, uid) VALUES ($1, $2)`;
        const result = await BD.query(comando, [nome, uid]);

        //Limpa a variável após salvar com sucesso
        ultimaLeitura = null;

        return res.status(201).json({ mensagem: `Usuário Cadastrado` });
    } catch (error) {
        return res.status(500).json({ error: `Erro ao cadastrar usuário (UID pode já existir)` + error });
    }
});

//Endpoint - Registrando o Histórico 
router.post('/registrar', async (req, res) => {
    const { uid } = req.body;
    try {
        //Busca do Usuário - quando foi cadastrado - ver se está cadastrado ou não
        const usuario = await BD.query(`SELECT * FROM USUARIOS WHERE uid = $1`, [uid]); //consulta a partir do número do cartão 
        if (usuario.rows.length == 0) { //se não encontrar o cartão ele dá acesso negado!!!
            return res.status(404).json({
                erro: "Acesso Negado ❌"
            })
        }
        const ultimoAcesso = await BD.query(`
            SELECT tipo_movimento
            FROM historico_acessos
            WHERE uid = $1
            ORDER BY id DESC
            LIMIT 1`, [uid]);

        let tipoMovimento = "ENTRADA";
        
        //Está comparando os dois, validando se o tipo de movimento é de entrada
        if (ultimoAcesso.rows.length > 0 && ultimoAcesso.rows[0].tipoMovimento === "ENTRADA") {
            tipoMovimento = "SAIDA"; //se for vdd vai passar a ser SAIDA
        }
        //Gravando no Banco de Dados - inserindo 
        await BD.query(`
            INSERT INTO historico_acessos
            (uid, tipo_movimento, status_acesso)
            VALUES($1, $2, $3)
            `, [uid, tipoMovimento, 'LIBERADO']); //sempre será liberado, pois no if nos já validamos ele!

        return res.status(201).json({ mensagem: `${tipoMovimento} registrado com Sucesso!` })
    }catch (error){
        return res.status(500).json({ error: error.mensagem });
    }
})

export default router


