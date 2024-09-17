CREATE TABLE regions (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(150) NOT NULL
);
INSERT INTO regions (name) VALUES
('Russia'),
('China'),
('India'),
('France'),
('Japan'),
('Germany'),;

CREATE TABLE hotels (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(150) NOT NULL,
    region_id BIGINT REFERENCES regions(id) NOT NULL
);

CREATE TYPE category_type AS ENUM ('Стандарт', 'Люкс', 'Апартаменты');
CREATE TYPE status_type AS ENUM ('Свободен', 'Занят');

CREATE TABLE rooms (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    number VARCHAR(10) NOT NULL,
    category category_type NOT NULL,
    number_of_seats INTEGER GENERATED ALWAYS AS (
        CASE category
            WHEN 'Стандарт' THEN 2
            WHEN 'Люкс' THEN 2
            WHEN 'Апартаменты' THEN 4
        END
    ) STORED,
    status_free status_type DEFAULT 'Свободен' NOT NULL
);