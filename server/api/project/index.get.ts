import prisma from "~/lib/prisma";
import { Project } from "~/generated/client";

export default defineEventHandler(async () => {
  return (await prisma.project.findMany()) as (Project & {
    [key: string]: any;
  })[];
});
