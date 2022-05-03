// noinspection ES6ConvertVarToLetConst

import { PrismaClient } from "~/generated/client/index.js";

let prisma: InstanceType<typeof PrismaClient>;

declare global {
  var prisma: PrismaClient;
}

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }

  prisma = global.prisma;
}

export default prisma;
