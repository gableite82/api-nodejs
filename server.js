import express from 'express';

const app = express(); 

app.post('/cadstro-usuario', (req, res) => {
  req.send('Metodo post funcionando!');
});

app.get('/usuarios', (req, res) => {
  res.send('Metodo get funcionando!');
}); 

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});