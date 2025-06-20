import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();
prisma
  .$connect()
  .then(() => console.log("✅ Connected to the database"))
  .catch((err) => {
    console.error("❌ Failed to connect to the database:", err);
    process.exit(1); // exit the app if DB connection fails
  });
