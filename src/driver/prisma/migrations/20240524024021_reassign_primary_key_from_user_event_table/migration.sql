/*
  Warnings:

  - The primary key for the `events_users` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "events_users" DROP CONSTRAINT "events_users_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "events_users_pkey" PRIMARY KEY ("id");
