-- CreateTable
CREATE TABLE "PurchaseTable" (
    "idpurchase" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "value" DECIMAL(7,2) NOT NULL,

    CONSTRAINT "PurchaseTable_pkey" PRIMARY KEY ("idpurchase")
);
