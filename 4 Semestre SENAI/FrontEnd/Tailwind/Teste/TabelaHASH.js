//Usando o Map nativo do JS
const contatos = new Map();

///Guardando valores vinculados a chave
contatos.set("Ana", "9999-9999");
constos.set("Beto", "8888-8888");

//Busca direta e instantanea pela chave (sem precissar percorrer uma lista)
console.log(contatos.get("Ana")); //9999-9999