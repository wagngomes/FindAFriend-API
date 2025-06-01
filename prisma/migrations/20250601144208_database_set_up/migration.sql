-- CreateEnum
CREATE TYPE "Size" AS ENUM ('small', 'medium', 'large');

-- CreateEnum
CREATE TYPE "EnergyLevel" AS ENUM ('low', 'medium', 'high');

-- CreateEnum
CREATE TYPE "IndependencyLevel" AS ENUM ('low', 'medium', 'high');

-- CreateEnum
CREATE TYPE "EnvironmentIdeal" AS ENUM ('small', 'medium', 'large', 'indoor', 'outdoor');

-- CreateTable
CREATE TABLE "ongs" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "ongs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pet" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "size" "Size" NOT NULL,
    "energyLevel" "EnergyLevel" NOT NULL,
    "independencyLevel" "IndependencyLevel" NOT NULL,
    "environmentIdeal" "EnvironmentIdeal" NOT NULL,
    "imageURL" TEXT,
    "adoptionRequirements" TEXT NOT NULL,
    "ongId" TEXT NOT NULL,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_ongId_fkey" FOREIGN KEY ("ongId") REFERENCES "ongs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
