use mercado;

DROP TABLE mercado;

CREATE TABLE IF NOT EXISTS mercado(
id_produto INT NOT NULL AUTO_INCREMENT,
nome_produto VARCHAR(50) NOT NULL,
quantidade INT NOT NULL,
valor_unitario INT NOT NULL,
fornecedor VARCHAR(40) NOT NULL,
PRIMARY KEY(id_produto)
);

INSERT INTO mercado(nome_produto, quantidade, valor_unitario, fornecedor) VALUES("Arroz","100","25.00", "DB_Supermercados");
INSERT INTO mercado(nome_produto, quantidade, valor_unitario, fornecedor) VALUES("Feijao","50","13.00", "DB_Supermercados");
INSERT INTO mercado(nome_produto, quantidade, valor_unitario, fornecedor) VALUES("Macarrao","25","5.00", "DB_Supermercados");
INSERT INTO mercado(nome_produto, quantidade, valor_unitario, fornecedor) VALUES("Trigo","40","8.00", "DB_Supermercados");
INSERT INTO mercado(nome_produto, quantidade, valor_unitario, fornecedor) VALUES("Ovo","0","1.00", "DB_Supermercados");
