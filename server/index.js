const express = require('express');
const cors = require('cors');

const taskRouter = require('./routes/todo.routes');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(express.json());

app.use('/task', taskRouter);

app.listen(5000, () => {
  console.log('server listening on port 5000');
});