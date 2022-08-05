const express = require('express');
const Router = express.Router();

const { setTask, getAllTasks, getTaskById, updateTask, deleteTask } = require('./todo.controller');

//TODO - Create a Task

Router.post('/', setTask);

//TODO - Get all Tasks

Router.get('/', getAllTasks);

//TODO - Get Task by Id

Router.get('/:id', getTaskById);

//TODO - Update Task

Router.put('/:id', updateTask);

//TODO - Delete Task

Router.delete('/:id', deleteTask);

module.exports = Router;
