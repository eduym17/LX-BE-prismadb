/*
  Warnings:

  - The `currentEnrollment` column on the `stack` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "stack" DROP COLUMN "currentEnrollment",
ADD COLUMN     "currentEnrollment" BOOLEAN NOT NULL DEFAULT true;
