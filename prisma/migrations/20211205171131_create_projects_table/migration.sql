-- CreateTable
CREATE TABLE "projects"
(
    "id"        SERIAL       NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name"      TEXT         NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);
