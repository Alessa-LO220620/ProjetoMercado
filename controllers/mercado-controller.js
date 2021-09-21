const mercado = require("../dataBase_conection");


exports.index = (req, res) => {
    res.render("./views/pages/index")
};

exports.mercado = (req, res) => {
    var sql = `SELECT * from mercado`;
    mercado.query(sql, (err, produto) => {
        if (err)
            return res.status(500).send("Erro ao listar os produtos");
        res.render("./views/pages/mercado", { mercado: produto });
    });
};

exports.cadastroProduto_get = (req, res) => {
    res.render("./views/pages/formProduto");
};
exports.cadastroProduto_post = (req, res) => {
    var sql = `INSERT INTO mercado (nome_produto, quantidade, valor_unitario, fornecedor) VALUES ('${req.body.nome_produto}',${req.body.quantidade}, ${req.body.valor_unitario},'${req.body.fornecedor}')`;
    mercado.query(sql, (err, result) => {
        resultado = result;
        if (err) throw err;
        res.redirect("/mercado");
    });
};

exports.deletarProduto = (req, res) => {
    var sql = `DELETE from mercado where id_produto = ${req.params.id}`;
    mercado.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect("/mercado");
    });
};
exports.editarProduto_get = (req, res) => {
    var sql = `SELECT * from mercado where id_produto = ${req.params.id}`;
    mercado.query(sql, (err, result) => {
        if (err) throw err;
        res.render("./views/pages/formEditarProduto", { produto: result[0] })
    });
};
exports.editarProduto_post = (req, res) => {
    var sql = `UPDATE mercado set nome_produto='${req.body.nome_produto}', quantidade='${req.body.quantidade}', valor_unitario='${req.body.valor_unitario}', fornecedor='${req.body.fornecedor}' where id_produto = ${req.body.id_produto}`;
    mercado.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect("/mercado");
    });
};

