/*
  Warnings:

  - You are about to drop the column `essentialTopics` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `topicsCompleted` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `totalTopics` on the `Course` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Course" DROP COLUMN "essentialTopics",
DROP COLUMN "topicsCompleted",
DROP COLUMN "totalTopics";

-- CreateTable
CREATE TABLE "User" (
    "userId" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "CourseStarted" (
    "courseStartedId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "CourseStarted_pkey" PRIMARY KEY ("courseStartedId")
);

-- CreateTable
CREATE TABLE "CourseCompleted" (
    "courseCompletedId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "CourseCompleted_pkey" PRIMARY KEY ("courseCompletedId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "CourseStarted" ADD CONSTRAINT "CourseStarted_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseStarted" ADD CONSTRAINT "CourseStarted_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseCompleted" ADD CONSTRAINT "CourseCompleted_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseCompleted" ADD CONSTRAINT "CourseCompleted_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
