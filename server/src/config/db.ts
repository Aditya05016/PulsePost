import { PrismaClient } from "../generated/prisma/client";

const prisma = new PrismaClient();

const connectdb = async () => {
  try {
    await prisma.$connect();
    console.log("Database connected successfully ✅");
  } catch (err) {
    console.log("Database connection failed ❌", err);
    process.exit(1);
  }
};

export { prisma, connectdb };
