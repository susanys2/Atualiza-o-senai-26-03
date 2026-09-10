export const Jogador = {
    nome: "Alex",
    classe: "Mago",
    nivel: 10,
    hp: 10,

    atacar: function(){
        return(`${this.nome} lançou uma Bola de Fogo!`);
    }
};

//Objeto Literal