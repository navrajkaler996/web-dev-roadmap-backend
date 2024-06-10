-- DropForeignKey
ALTER TABLE "CourseCompleted" DROP CONSTRAINT "CourseCompleted_courseId_fkey";

-- DropForeignKey
ALTER TABLE "CourseCompleted" DROP CONSTRAINT "CourseCompleted_userId_fkey";

-- DropForeignKey
ALTER TABLE "CourseStarted" DROP CONSTRAINT "CourseStarted_courseId_fkey";

-- DropForeignKey
ALTER TABLE "CourseStarted" DROP CONSTRAINT "CourseStarted_userId_fkey";

-- DropForeignKey
ALTER TABLE "Topic" DROP CONSTRAINT "Topic_courseId_fkey";

-- AddForeignKey
ALTER TABLE "Topic" ADD CONSTRAINT "Topic_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseStarted" ADD CONSTRAINT "CourseStarted_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseStarted" ADD CONSTRAINT "CourseStarted_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseCompleted" ADD CONSTRAINT "CourseCompleted_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseCompleted" ADD CONSTRAINT "CourseCompleted_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;
