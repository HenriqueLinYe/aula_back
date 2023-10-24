const protocolo = 'http://';
const host = 'localhost:3000';
const filmesEndPoint = '/filmes';


async function obterFilmes() {
    const URLcompleta = `${protocolo}${host}${filmesEndPoint}`
    const filmes = (await axios.get(URLcompleta)).data




    console.log(filmes);
}