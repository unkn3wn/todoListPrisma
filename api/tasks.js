const router = require("express").Router();
const { asyncErrorHandler } = require("./utils");
const prisma = require("../prisma/prisma");
//GET /api/tasks
router.get(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const tasks = await prisma.tasks.findMany();
    res.send(tasks);
  })
);

//GET/api/tasks/taskID
router.get(
  "/:taskId",
  asyncErrorHandler(async (req, res, next) => {
    const singleTask = await prisma.tasks.findUnique({
      where: {
        id: +req.params.taskId,
      },
    });
    res.send(singleTask);
  })
);

//POST/ api/tasks
router.post(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const { title, description } = req.body;
    const createTask = await prisma.tasks.create({
      data: { title, description },
    });
    res.send(createTask);
  })
);

//PATCH/ api/tasks/taskId
router.patch(
  "/:taskId",
  asyncErrorHandler(async (req, res, next) => {
    const { title, description } = req.body;
    const updateTask = await prisma.tasks.update({
      where: {
        id: +req.params.taskId,
      },
      data: { title, description },
    });
    res.send(updateTask);
  })
);
//DELETE/api/taks/taskid
router.delete(
  "/:taskId",
  asyncErrorHandler(async (req, res, next) => {
    const deleteTask = await prisma.tasks.delete({
      where: {
        id: +req.params.taskId,
      },
    });
    res.send(deleteTask);
  })
);

module.exports = router;
