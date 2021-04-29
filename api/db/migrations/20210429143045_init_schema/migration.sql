-- CreateEnum
CREATE TYPE "OrganizationRole" AS ENUM ('admin', 'manager', 'marketing', 'sales');

-- CreateEnum
CREATE TYPE "EmployeeStatus" AS ENUM ('applied', 'prospect', 'interviewing', 'offered', 'hired', 'left');

-- CreateEnum
CREATE TYPE "EmployeePayType" AS ENUM ('salary', 'hourly', 'contract');

-- CreateTable
CREATE TABLE "Organization" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "stripeId" TEXT NOT NULL,
    "email" BOOLEAN NOT NULL DEFAULT false,
    "communications" BOOLEAN NOT NULL DEFAULT false,
    "payroll" BOOLEAN NOT NULL DEFAULT false,
    "hr" BOOLEAN NOT NULL DEFAULT false,
    "accounting" BOOLEAN NOT NULL DEFAULT false,
    "recruiting" BOOLEAN NOT NULL DEFAULT false,
    "crm" BOOLEAN NOT NULL DEFAULT false,
    "marketing" BOOLEAN NOT NULL DEFAULT false,
    "projectManagement" BOOLEAN NOT NULL DEFAULT false,
    "helpdesk" BOOLEAN NOT NULL DEFAULT false,
    "issueTracking" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Employee" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "title" TEXT,
    "organizationId" TEXT NOT NULL,
    "organizationRoles" "OrganizationRole"[],
    "departmentId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmployeePay" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "type" "EmployeePayType" NOT NULL,
    "employeeId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT,
    "phone" INTEGER,
    "companyId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "website" TEXT,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee.email_unique" ON "Employee"("email");

-- CreateIndex
CREATE UNIQUE INDEX "EmployeePay_employeeId_unique" ON "EmployeePay"("employeeId");

-- AddForeignKey
ALTER TABLE "Employee" ADD FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeePay" ADD FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;
