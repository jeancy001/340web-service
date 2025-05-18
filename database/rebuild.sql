
-- Drop tables if they exist
DROP TABLE IF EXISTS inventory;
DROP TABLE IF EXISTS classification;
DROP TABLE IF EXISTS account;

-- Create tables
CREATE TABLE account (
  account_id SERIAL PRIMARY KEY,
  account_firstname TEXT NOT NULL,
  account_lastname TEXT NOT NULL,
  account_email TEXT NOT NULL UNIQUE,
  account_password TEXT NOT NULL,
  account_type TEXT DEFAULT 'Client'
);

CREATE TABLE classification (
  classification_id SERIAL PRIMARY KEY,
  classification_name TEXT NOT NULL
);

CREATE TABLE inventory (
  inv_id SERIAL PRIMARY KEY,
  inv_make TEXT NOT NULL,
  inv_model TEXT NOT NULL,
  inv_description TEXT,
  inv_image TEXT,
  inv_thumbnail TEXT,
  inv_price NUMERIC(10, 2),
  inv_year INT,
  inv_miles INT,
  inv_color TEXT,
  classification_id INT REFERENCES classification(classification_id)
);

-- Populate classification table
INSERT INTO classification (classification_name)
VALUES ('SUV'), ('Truck'), ('Sport'), ('Sedan');

-- Populate inventory table (example records)
INSERT INTO inventory (inv_make, inv_model, inv_description, inv_image, inv_thumbnail, inv_price, inv_year, inv_miles, inv_color, classification_id)
VALUES 
('GM', 'Hummer', 'This vehicle has small interiors', '/images/hummer.jpg', '/images/hummer-thumb.jpg', 35000, 2022, 15000, 'Black', 1),
('Toyota', 'Supra', 'A high-performance sport car', '/images/supra.jpg', '/images/supra-thumb.jpg', 40000, 2023, 5000, 'Red', 3);

-- Copy of queries 4 and 6 from assignment2.sql

-- Replace GM Hummer description
UPDATE inventory
SET inv_description = REPLACE(inv_description, 'small interiors', 'a huge interior')
WHERE inv_make = 'GM' AND inv_model = 'Hummer';

-- Update image paths
UPDATE inventory
SET inv_image = REPLACE(inv_image, '/images/', '/images/vehicles/'),
    inv_thumbnail = REPLACE(inv_thumbnail, '/images/', '/images/vehicles/');
