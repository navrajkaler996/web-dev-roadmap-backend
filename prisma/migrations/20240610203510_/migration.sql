/*
  Warnings:

  - You are about to drop the column `completed` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `started` on the `Course` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Course" DROP COLUMN "completed",
DROP COLUMN "started";
