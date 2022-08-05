const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function setTask(req, res, next) {
  try {
    const data = req.body;

    console.log(req);
    console.log(req.body);
    console.log(data);
    
    const task = await prisma.todo.create({
      data: data
    });

    console.log(task);
    res.status(201).send(task);
  }
  catch (error) {
    console.log(error.message);
    next(error);
  }
}

async function getAllTasks(req, res, next) {
  try {
    const tasks = await prisma.todo.findMany({});

    res.status(200).send(tasks);
  }
  catch (error) {
    console.log(error.message);
    next(error);
  }
}

async function getTaskById(req, res, next) {
  try {
    const { id } = req.params;

    const task = await prisma.todo.findUnique({
      where: {
        id: Number(id)
      }
    });

    res.status(200).send(task);
  }
  catch (error) {
    console.log(error.message);
    next(error);
  }
}

async function updateTask(req, res, next) {
  try {
    const { id } = req.params;
    const task = await prisma.todo.update({
      where: {
        id: Number(id)
      },
      data: req.body,
    });

    res.status(200).send(task);
  }
  catch (error) {
    console.log(error.message);
    next(error);
  }
}

async function deleteTask(req, res, next) {
  try {
    const { id } = req.params;
    const task = await prisma.todo.delete({
      where: {
        id: Number(id)
      }
    });

    res.status(200).send(task);
  }
  catch (error) {
    console.log(error.message);
    next(error);
  }
}

module.exports = {
  setTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
}