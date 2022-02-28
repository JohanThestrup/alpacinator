CREATE TABLE IF NOT EXISTS alpacas (
	alpaca_id serial PRIMARY KEY,
	name VARCHAR ( 70 ) NOT NULL,
    weight smallint CHECK (weight > 0) NOT NULL,
	color VARCHAR ( 7 ) NOT NULL,
	farm VARCHAR ( 70 ) NOT NULL,
	created_on TIMESTAMP NOT NULL
);