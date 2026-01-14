import 'dotenv/config';
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ 
  connectionString: process.env.DATABASE_URL 
});

const prisma = new PrismaClient({ adapter });

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