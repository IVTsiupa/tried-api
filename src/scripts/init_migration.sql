CREATE TABLE IF NOT EXISTS "users" (
    id UUID NOT NULL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR NOT NULL,
    is_email_verified BOOLEAN DEFAULT false,
    access_token VARCHAR,
    refresh_token VARCHAR,
    last_login TIMESTAMP
);