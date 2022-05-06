-- CreateTable
CREATE TABLE "stack" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "mainStack" VARCHAR(255) NOT NULL,
    "currentEnrollment" INTEGER NOT NULL DEFAULT 1,
    "hasAzureCertification" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "stack_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "stack_name_key" ON "stack"("name");
