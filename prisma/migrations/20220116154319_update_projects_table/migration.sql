/*
  Warnings:

  - Added the required column `description` to the `projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logo` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "github" TEXT,
ADD COLUMN     "logo" TEXT NOT NULL,
ADD COLUMN     "website" TEXT;
