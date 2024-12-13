/*
  Warnings:

  - You are about to drop the column `stockQuantiy` on the `Products` table. All the data in the column will be lost.
  - Added the required column `stockQuantity` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "stockQuantiy",
ADD COLUMN     "stockQuantity" INTEGER NOT NULL;
