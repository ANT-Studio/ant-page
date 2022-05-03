import prisma from "~/lib/prisma";

//@ts-ignore
export default defineEventHandler(async () => {
  const projects = await prisma.project.findMany();

  return projects;
});
