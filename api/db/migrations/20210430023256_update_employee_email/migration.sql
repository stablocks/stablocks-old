/*
  Warnings:

  - You are about to drop the column `employeeId` on the `Application` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[jobId,email]` on the table `Application` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Application" DROP CONSTRAINT "Application_employeeId_fkey";

-- AlterTable
ALTER TABLE "Application" DROP COLUMN "employeeId",
ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Application.jobId_email_unique" ON "Application"("jobId", "email");

-- CreateIndex
CREATE UNIQUE INDEX "Employee.email_unique" ON "Employee"("email");

-- AlterIndex
ALTER INDEX "Employee.organizationId_email_unique" RENAME TO "organizationAndEmail";
