const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());


let filmes = [
    {
        titulo: "Forrest Gump - O Contador de Histórias",
        sinopse: "Quarenta anos da história dos EstadosUnidos, vistos pelos olhos de Forrest Gump (Tom Hanks),um rapaz com QI abaixo da média e boas intenções."
    },
    {
        titulo: "Um Sonho de Liberdade",
        sinopse: "Em 1946, Andy Dufresne (Tim Robbins), umjovem e bem sucedido banqueiro, tem a sua vidaradicalmente modificada ao ser condenado por um crime quenunca cometeu, o homicídio de sua esposa e do amantedela"
    }
]

app.get("/filmes", (req, res) => {
    res.json(filmes)
    })



app.post("/filmes", (req, res) => {
    //obtém os dados enviados pelo cliente
    const titulo = req.body.titulo
    const sinopse = req.body.sinopse
    //monta um objeto agrupando os dados. Ele representa um novo filme
    const filme = {titulo: titulo, sinopse: sinopse}
    //adiciona o novo filme à base
    filmes.push(filme)
    //responde ao cliente. Aqui, optamos por devolver a base inteira ao cliente,embora não seja obrigatório.
    res.json(filmes)
    })
// ponto de acesso teste get
app.get('/oi', (req, res) => res.send('oi'));

app.listen(3000, () => console.log("up and running"));
