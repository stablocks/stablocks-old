/*
  Warnings:

  - Added the required column `message` to the `TaskMessage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `message` to the `TicketMessage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TaskMessage" ADD COLUMN     "message" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TicketMessage" ADD COLUMN     "message" TEXT NOT NULL;
