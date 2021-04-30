/*
  Warnings:

  - Made the column `projectId` on table `Task` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "OrganizationRole" ADD VALUE 'finance';
ALTER TYPE "OrganizationRole" ADD VALUE 'support';

-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "projectId" SET NOT NULL;

-- CreateTable
CREATE TABLE "EmployeeAccess" (
    "id" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Onboarding" (
    "id" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OnboardingTask" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "status" "Status" NOT NULL,
    "assignedId" TEXT NOT NULL,
    "projectId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Onboarding_employeeId_unique" ON "Onboarding"("employeeId");

-- AddForeignKey
ALTER TABLE "EmployeeAccess" ADD FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeAccess" ADD FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Onboarding" ADD FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OnboardingTask" ADD FOREIGN KEY ("assignedId") REFERENCES "Employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OnboardingTask" ADD FOREIGN KEY ("projectId") REFERENCES "Onboarding"("id") ON DELETE SET NULL ON UPDATE CASCADE;
