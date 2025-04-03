const express = require ('express');
const estoque = require('./app_estoque');
const app = express();

app.get('/', (req, res)=>{
    let html = '<h1>app_estoque/h1>';
    html += '<h3>Rotas disponiveis</h3>';
    html += '<p>/listar - Lista todos os produtos do estoque>';
    html += '<p>/remover/:id - Remove um produto do estoque>';
    html += '<p>/editar/:id/:qtd - Altera a quantidade de um produto no estoque>';

    res.send(html);
});

//adicionar
app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const id = Number(req.params.id); 
    const nome = req.params.nome; 
    const qtd = Number((req.params.qtd));  

    const item =  {
        id: id,
        nome: nome,
        qtd: qtd
    }
    estoque.adicionar(item);
    res.send(item);
   
});

//listar
app.get('/listar', (req, res) => {
    res.send(estoque.listar());
});

//remover
app.get('/remover/:id', (req, res) => {



});

//editar
app.get('/editar/:id/:qtd', (req, res) => {



});


const PORT = 8080;
app.listen(PORT, () => {
    console.log('app rodando na porta ' +PORT);
});
