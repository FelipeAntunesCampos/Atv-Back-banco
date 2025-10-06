-- CreateTable
CREATE TABLE "Petshop" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "especie" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "dono" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Petshop_pkey" PRIMARY KEY ("id")
);
