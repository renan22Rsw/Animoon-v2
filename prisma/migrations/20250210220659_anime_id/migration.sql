/*
  Warnings:

  - Added the required column `animeId` to the `AnimeList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AnimeList" ADD COLUMN     "animeId" TEXT NOT NULL;
