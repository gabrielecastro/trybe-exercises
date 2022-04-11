require('dotenv').config();

const express = require('express'); 

const app = express();

const booksController = require('./controllers/booksController');

app.use(bodyParser.json());

app.get('/books', booksController.getAll);

app.get('/book/:id', booksController.getById);

app.get('/author/:name', booksController.getByAuthor)

app.post('/book', booksController.create)

app.post('/book/:id', booksController.update)

app.delete('/book/:id', booksController.destroy)

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});

