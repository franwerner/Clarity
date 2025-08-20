-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `lastname` VARCHAR(191) NOT NULL,
    `avatarUrl` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserStrategy` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `strategy` ENUM('google') NOT NULL,
    `strategyId` VARCHAR(191) NOT NULL,
    `userFk` INTEGER NOT NULL,

    UNIQUE INDEX `UserStrategy_strategy_strategyId_key`(`strategy`, `strategyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserStrategy` ADD CONSTRAINT `UserStrategy_userFk_fkey` FOREIGN KEY (`userFk`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
