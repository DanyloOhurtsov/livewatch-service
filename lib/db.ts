
import { PrismaClient } from "@prisma/client";

// Prisma
declare global {
    var prisma: PrismaClient | undefined;
}

// Database
export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
