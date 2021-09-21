var express = require("express");
const router = express.Router();
const mercadoController = require("../controllers/mercado-controller");

router.get("/", mercadoController.index);
router.get("/listaProdutos", mercadoController.mercado);
router.get("/cadastroProduto", mercadoController.cadastroProduto_get);
router.post("/cadastroProduto", mercadoController.cadastroProduto_post);
router.get("/deletarProduto/:id", mercadoController.deletarProduto);
router.get("/editarProduto/:id", mercadoController.editarProduto_get);
router.post("/editarProduto", mercadoController.editarProduto_post);


module.exports = router;