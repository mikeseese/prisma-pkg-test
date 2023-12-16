import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma.user.create({}).then((user) => {
  console.log(user)
});
