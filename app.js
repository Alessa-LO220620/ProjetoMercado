var express = require("express");
const app = express();

const porta = 3030;


app.set("view engine", "ejs");
app.set("views", __dirname, "/views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


const mercado_router = require('./routers/mercado-router');
app.use("/", mercado_router);

app.listen(porta, () => {
    console.log("Servidor rodando na porta " + porta)
});