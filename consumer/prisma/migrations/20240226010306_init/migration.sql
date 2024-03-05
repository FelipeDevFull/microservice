-- CreateTable
CREATE TABLE "NfeTable" (
    "idNfe" TEXT NOT NULL,
    "idpurchase" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "value" DECIMAL(7,2) NOT NULL,

    CONSTRAINT "NfeTable_pkey" PRIMARY KEY ("idNfe")
);

-- CreateIndex
CREATE UNIQUE INDEX "NfeTable_idpurchase_key" ON "NfeTable"("idpurchase");
