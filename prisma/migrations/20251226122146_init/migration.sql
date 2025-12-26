-- CreateTable
CREATE TABLE `User` (
    `usr_id` INTEGER NOT NULL AUTO_INCREMENT,
    `usr_email` VARCHAR(191) NOT NULL,
    `usr_name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_usr_email_key`(`usr_email`),
    PRIMARY KEY (`usr_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
