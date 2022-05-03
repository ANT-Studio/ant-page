import prisma from "~/lib/prisma";

//@ts-ignore
export default defineEventHandler(() => {
  return prisma.project.findMany();
});
