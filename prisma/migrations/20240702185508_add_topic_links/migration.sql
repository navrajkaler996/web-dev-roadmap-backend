-- CreateTable
CREATE TABLE "TopicLink" (
    "id" SERIAL NOT NULL,
    "topicId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "TopicLink_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TopicLink" ADD CONSTRAINT "TopicLink_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;
