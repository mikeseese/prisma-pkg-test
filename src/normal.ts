import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasourceUrl: `file:${process.cwd()}/dev.db`
});
