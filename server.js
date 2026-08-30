const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());

let users = [];

// Rota GET: Listar todos os usuários
app.get('/api/users', (req, res) => {
  return res.status(200).json(users);
});

// Rota POST: Cadastrar novo usuário
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Nome e e-mail são obrigatórios.' });
  }

  const newUser = {
    id: uuidv4(),
    name,
    email
  };

  users.push(newUser);

  return res.status(201).json({
    message: 'Usuário cadastrado com sucesso!',
    user: newUser
  });
});

// Rota GET parametrizada: Buscar usuário por ID
app.get('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ error: 'Usuário não encontrado.' });
  }

  return res.status(200).json(user);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor da API Connect inicializado e rodando na porta ${PORT}`);
});