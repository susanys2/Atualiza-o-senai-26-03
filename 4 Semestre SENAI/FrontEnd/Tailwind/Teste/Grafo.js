const redeSocial = {
    "Ana": ["Beto", "Carla"], //Ana é amiga de Beto e Carla
    "Beto": ["Ana", "Daniel"], //Beto é amigo de Ana e Daniel
    "Carla": ["Ana"],
    "Daniel": ["Beto"]
};

//Descobrindo os amigos de Beto
console.log(redeSocial["Beto"]); //["Ana", "Daniel"]