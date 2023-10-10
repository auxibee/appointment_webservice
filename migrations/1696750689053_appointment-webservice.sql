-- Up Migration
CREATE TABLE aws_accounts(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(70) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW(),
    updated_at timestamp NOT NULL DEFAULT NOW()

);



CREATE TYPE appointment_date_status AS ENUM ('open','closed');

CREATE TABLE aws_appointment_dates(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    appointment_date timestamp NOT NULL,
    slots INT DEFAULT 100,
    appointment_date_status appointment_date_status DEFAULT 'open'
);



CREATE TABLE aws_appointment(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id UUID NOT NULL,
    appointment_date_id UUID NOT NULL,
    CONSTRAINT fk_aws_accounts
        FOREIGN KEY(account_id)
        REFERENCES aws_accounts(id)
        ON DELETE CASCADE,
    CONSTRAINT fk_aws_appointment_dates
        FOREIGN KEY(appointment_date_id)
        REFERENCES aws_appointment_dates(id)
        ON DELETE CASCADE
);




CREATE TYPE appointment_status AS ENUM('pending', 'cancelled', 'done');

CREATE TABLE aws_appointment_detail(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    appointment_id UUID NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    appointment_status appointment_status DEFAULT 'pending',
    CONSTRAINT fk_aws_appointment
        FOREIGN KEY(appointment_id)
        REFERENCES aws_appointment(id)
        ON DELETE CASCADE
);



-- Down Migration
DROP TABLE aws_accounts;
DROP TABLE aws_appointment_dates;
DROP TABLE aws_appointment;
DROP TABLE aws_appointment_detail;