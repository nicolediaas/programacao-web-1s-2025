const express = require ('express');
const app = express();
const estoque = [];


const PORT = 8080;
app.listen(PORT, () => {
    console.log('app rodando na porta ' +PORT);
});

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const id = Number(req.params.id); 
    const nome = req.params.nome; 
    const qtd = Number((req.params.qtd)) ;  
    res.send(`ID: ${id}`);
    res.send(`Nome: ${nome}`);
    res.send(`qtd: ${qtd}`);


});

