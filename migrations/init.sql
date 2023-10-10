--Up Migration

CREATE TABLE Accounts (
   id SERIAL PRIMARY KEY,
   email VARCHAR(255) NOT NULL,
   password VARCHAR(255) NOT NULL
);


--Down Migration
DROP TABLE Accounts;