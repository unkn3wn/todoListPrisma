const prisma = require("./prisma");

const { tasks } = require("./seedData");

const seedDb = async () => {
  console.log("creating task...");
  await Promise.all(
    tasks.map(async (task) => {
      return prisma.tasks.create({
        data: task,
      });
    })
  );
  console.log("created task..");
};

const initDb = async () => {
  try {
    await seedDb();
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

initDb();
