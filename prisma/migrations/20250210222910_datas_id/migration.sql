/*
  Warnings:

  - Added the required column `characterId` to the `CharacterList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mangaId` to the `MangaList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `staffId` to the `StaffList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CharacterList" ADD COLUMN     "characterId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "MangaList" ADD COLUMN     "mangaId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "StaffList" ADD COLUMN     "staffId" TEXT NOT NULL;
