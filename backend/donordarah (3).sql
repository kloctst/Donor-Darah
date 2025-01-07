-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 07, 2025 at 02:48 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `donordarah`
--

-- --------------------------------------------------------

--
-- Table structure for table `blooddonation`
--

CREATE TABLE `blooddonation` (
  `DonationID` int(11) NOT NULL,
  `DonorID` int(11) NOT NULL,
  `RecipientID` int(11) NOT NULL,
  `DonationDate` datetime NOT NULL DEFAULT current_timestamp(),
  `Location` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blooddonation`
--

INSERT INTO `blooddonation` (`DonationID`, `DonorID`, `RecipientID`, `DonationDate`, `Location`) VALUES
(2, 1, 1, '2025-01-07 20:39:04', 'bekasi'),
(6, 6, 6, '2025-01-07 20:47:43', 'jakarta');

-- --------------------------------------------------------

--
-- Table structure for table `donation`
--

CREATE TABLE `donation` (
  `DonationID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `Amount` decimal(10,2) NOT NULL,
  `DonationDate` datetime NOT NULL DEFAULT current_timestamp(),
  `Message` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `donation`
--

INSERT INTO `donation` (`DonationID`, `UserID`, `Amount`, `DonationDate`, `Message`) VALUES
(1, 1, 300000.00, '0000-00-00 00:00:00', 'sehat selalu'),
(2, 1, 2000.00, '0000-00-00 00:00:00', 'nice try');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `UserID` int(11) NOT NULL,
  `FullName` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Phone` varchar(15) DEFAULT NULL,
  `Address` text DEFAULT NULL,
  `BloodType` enum('A','B','O','AB') DEFAULT NULL,
  `UserType` enum('Donor','Recipient') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`UserID`, `FullName`, `Email`, `Password`, `Phone`, `Address`, `BloodType`, `UserType`) VALUES
(1, 'raffa', 'm.raffa.febrian17@gmail.com', 'mraffa0217', '087785076169', 'Komplek Chandra Indah Lama JL Chandra 5', 'AB', 'Recipient'),
(5, 'brian', 'm.raffa@gmail.com', 'mraffa0217', '087785076160', 'Komplek Chandra Indah JL Chandra 5', 'AB', 'Donor'),
(6, 'putu', 'putu@gmail.com', 'outu', '0818898123', 'kuningan', 'O', 'Recipient');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blooddonation`
--
ALTER TABLE `blooddonation`
  ADD PRIMARY KEY (`DonationID`),
  ADD KEY `DonorID` (`DonorID`),
  ADD KEY `RecipientID` (`RecipientID`);

--
-- Indexes for table `donation`
--
ALTER TABLE `donation`
  ADD PRIMARY KEY (`DonationID`),
  ADD KEY `UserID` (`UserID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`UserID`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blooddonation`
--
ALTER TABLE `blooddonation`
  MODIFY `DonationID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `donation`
--
ALTER TABLE `donation`
  MODIFY `DonationID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `blooddonation`
--
ALTER TABLE `blooddonation`
  ADD CONSTRAINT `blooddonation_ibfk_1` FOREIGN KEY (`DonorID`) REFERENCES `user` (`UserID`),
  ADD CONSTRAINT `blooddonation_ibfk_2` FOREIGN KEY (`RecipientID`) REFERENCES `user` (`UserID`);

--
-- Constraints for table `donation`
--
ALTER TABLE `donation`
  ADD CONSTRAINT `donation_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
