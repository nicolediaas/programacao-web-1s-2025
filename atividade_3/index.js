const express = require ('express');
const calc = require('./calculadora');
const app = express();

app.get('/operacao/somar/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1); 
    const num2 = parseFloat(req.params.num2); 
    const resultado = calc.somar;  
    res.send(`Resultado da soma: ${resultado}`);
});

app.get('/operacao/subtrair/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1); 
    const num2 = parseFloat(req.params.num2); 
    const resultado = calc.subtrair;  
    res.send(`Resultado da subtracao: ${resultado}`);
});

app.get('/operacao/multiplicar/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1); 
    const num2 = parseFloat(req.params.num2); 
    const resultado = calc.multiplicar;  
    res.send(`Resultado da multiplicacao: ${resultado}`);
});

app.get('/operacao/dividir/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1); 
    const num2 = parseFloat(req.params.num2); 
    const resultado = calc.dividir;  
    res.send(`Resultado da divisao: ${resultado}`);
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log('app rodando na porta ' +PORT);
});
