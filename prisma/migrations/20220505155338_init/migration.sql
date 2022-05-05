/*
  Warnings:

  - You are about to drop the column `azureCertification` on the `example` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "example" DROP COLUMN "azureCertification",
ADD COLUMN     "hasCertification" BOOLEAN NOT NULL DEFAULT false;
