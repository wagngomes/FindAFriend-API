/*
  Warnings:

  - You are about to drop the column `city` on the `ongs` table. All the data in the column will be lost.
  - Added the required column `city` to the `Pet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pet" ADD COLUMN     "city" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ongs" DROP COLUMN "city";
