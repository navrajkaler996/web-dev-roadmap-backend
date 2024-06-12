-- DropForeignKey
ALTER TABLE "TopicCompleted" DROP CONSTRAINT "TopicCompleted_topicId_fkey";

-- AddForeignKey
ALTER TABLE "TopicCompleted" ADD CONSTRAINT "TopicCompleted_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;
