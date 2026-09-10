class Personagem{
    constructor(nome, classe, forca){
        this.nome = nome;
        this.classe = classe;
        this.forca = forca;
        this.vida = 100;
    }

    status(){
        console.log(`${this.nome} (Nível de Força: ${this.forca})`);
    }
}

const jogador1 = new Personagem("Aragon", "Guerreiro", 85);
const jogador2 = new Personagem("Gandalf", "Mago", 95);

jogador1.status()