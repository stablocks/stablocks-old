/*
  Warnings:

  - You are about to drop the `EmployeeAccess` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "EmployeeAccess" DROP CONSTRAINT "EmployeeAccess_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "EmployeeAccess" DROP CONSTRAINT "EmployeeAccess_organizationId_fkey";

-- DropTable
DROP TABLE "EmployeeAccess";
