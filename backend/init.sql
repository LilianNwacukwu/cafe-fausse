CREATE TABLE IF NOT EXISTS Customers (
  customer_id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  newsletter_signup BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS Reservations (
  reservation_id SERIAL PRIMARY KEY,
  customer_id INTEGER NOT NULL REFERENCES Customers(customer_id) ON DELETE CASCADE,
  timeslot TIMESTAMP NOT NULL,
  table_number INTEGER NOT NULL,
  UNIQUE (timeslot, table_number)
);

CREATE INDEX IF NOT EXISTS idx_res_timeslot ON Reservations(timeslot);
