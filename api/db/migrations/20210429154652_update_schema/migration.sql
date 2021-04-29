/*
  Warnings:

  - You are about to drop the column `issueTracking` on the `Organization` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[organizationId,email]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Organization` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organizationId` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Department` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `EmployeePay` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Organization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Organization` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TaskStatus" AS ENUM ('open', 'pending', 'closed', 'archived');

-- CreateEnum
CREATE TYPE "FieldType" AS ENUM ('input', 'textarea', 'select', 'radio', 'checkbox');

-- CreateEnum
CREATE TYPE "ArticleStatus" AS ENUM ('draft', 'published', 'archived');

-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('submitted', 'reviewed', 'offered', 'archived');

-- AlterEnum
ALTER TYPE "OrganizationRole" ADD VALUE 'hr';

-- DropIndex
DROP INDEX "Employee.email_unique";

-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "phone" INTEGER,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "organizationId" TEXT NOT NULL,
ADD COLUMN     "employeeId" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Department" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "supervisorId" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "EmployeePay" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Organization" DROP COLUMN "issueTracking",
ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "taskTracking" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "Job" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Application" (
    "id" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "status" "ApplicationStatus" NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApplicationAnswer" (
    "id" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "applicationId" TEXT NOT NULL,
    "fieldId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FieldOrder" (
    "id" SERIAL NOT NULL,
    "order" INTEGER NOT NULL,
    "jobId" TEXT NOT NULL,
    "fieldId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApplicationField" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "type" "FieldType" NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Article" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "categoryId" INTEGER,
    "status" "ArticleStatus" NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "contactId" TEXT,
    "status" "TaskStatus" NOT NULL,
    "assignedId" TEXT NOT NULL,
    "projectId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TaskMessage" (
    "id" SERIAL NOT NULL,
    "taskId" TEXT NOT NULL,
    "employeeId" TEXT,
    "contactId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ApplicationFieldToJob" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ApplicationAnswer.applicationId_fieldId_unique" ON "ApplicationAnswer"("applicationId", "fieldId");

-- CreateIndex
CREATE UNIQUE INDEX "_ApplicationFieldToJob_AB_unique" ON "_ApplicationFieldToJob"("A", "B");

-- CreateIndex
CREATE INDEX "_ApplicationFieldToJob_B_index" ON "_ApplicationFieldToJob"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Employee.organizationId_email_unique" ON "Employee"("organizationId", "email");

-- CreateIndex
CREATE UNIQUE INDEX "Organization.slug_unique" ON "Organization"("slug");

-- AddForeignKey
ALTER TABLE "Job" ADD FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApplicationAnswer" ADD FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApplicationAnswer" ADD FOREIGN KEY ("fieldId") REFERENCES "ApplicationField"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FieldOrder" ADD FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FieldOrder" ADD FOREIGN KEY ("fieldId") REFERENCES "ApplicationField"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Article" ADD FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD FOREIGN KEY ("assignedId") REFERENCES "Employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskMessage" ADD FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskMessage" ADD FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskMessage" ADD FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ApplicationFieldToJob" ADD FOREIGN KEY ("A") REFERENCES "ApplicationField"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ApplicationFieldToJob" ADD FOREIGN KEY ("B") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD FOREIGN KEY ("supervisorId") REFERENCES "Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;
