create table categorias(
      id_categoria SERIAL primary key,
      nome varchar(100) not null,
      descricao TEXT not null,
      tipo varchar(1) not null,
      cor varchar(255),
      icone varchar(255),
      ativo boolean default true
);

CREATE TABLE SUBCATEGORIAS(
id_subcategoria SERIAL PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
ATIVO BOOLEAN DEFAULT TRUE,
id_categoria INT, 
FOREIGN KEY(id_categoria) REFERENCES categorias(id_categoria)
);

CREATE TABLE transacoes(
id_transacao SERIAL PRIMARY KEY,
valor NUMERIC(12,2) NOT NULL,
descricao TEXT,
data_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
dat_pagamento DATE,
data_vencimento DATE,
tipo CHAR(1),
id_categoria INT,
id_subcategoria INT,
FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria),
FOREIGN KEY (id_subcategoria) REFERENCES subcategorias(id_subcategoria)
);




