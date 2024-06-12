-- CreateTable
CREATE TABLE "TopicCompleted" (
    "topicCompletedId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "topicId" INTEGER NOT NULL,

    CONSTRAINT "TopicCompleted_pkey" PRIMARY KEY ("topicCompletedId")
);

-- AddForeignKey
ALTER TABLE "TopicCompleted" ADD CONSTRAINT "TopicCompleted_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TopicCompleted" ADD CONSTRAINT "TopicCompleted_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
