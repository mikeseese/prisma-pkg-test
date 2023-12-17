import { PrismaClient } from "my-custom-prisma";

const prisma = new PrismaClient({
  datasourceUrl: `file:${process.cwd()}/dev.db`
});
