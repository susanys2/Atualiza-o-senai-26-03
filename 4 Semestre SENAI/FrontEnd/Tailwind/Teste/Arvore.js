//Estrutura hierarquica de pastas
const pastaRaiz = {
    nome: "Meus Documentos",
    filhos: [
        {
            nome: "Fotos",
            filhos: [
                { nome: "frais.png", filhos: [] } 
            ]
        },
        { nome: "curriculo.pdf", filhos: [] }
    ]
};

//Acessando Subpastas
console.log(pastaRaiz.nome); //Meus Documentos
console.log(pastaRaiz.filhos[0].nome) //"Fotos"
console.log(pastaRaiz.filhos[0].filhos[0].nome); // "farias.png"