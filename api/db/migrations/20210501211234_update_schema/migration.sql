-- AlterTable
ALTER TABLE "Ticket" ALTER COLUMN "status" SET DEFAULT E'open',
ALTER COLUMN "assignedId" DROP NOT NULL;
