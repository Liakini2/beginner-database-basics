////////////Table Person//////////////

CREATE TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    age INTEGER,
    height INTEGER,
    city VARCHAR(50),
    favorite_color VARCHAR(50)
);

INSERT INTO person
(name, age, height, city, favorite_color)
VALUES
('lia', 26, 182, 'SLC', 'red'),
('tim', 27, 200, 'SLC', 'blue'),
('lani', 22, 190, 'SLC', 'green'),
('arla', 20, 150, 'SLC', 'yellow'),
('jj', 18, 190, 'SLC', 'orange');

SELECT name, height
FROM person
ORDER BY height DESC;

SELECT name, height
FROM person
ORDER BY height ASC;

SELECT name, age
FROM person
ORDER BY height DESC;

SELECT name, age
FROM person
WHERE age>20;

SELECT name, age
FROM person
WHERE age=18;

SELECT name, age
FROM person
WHERE age<20 
OR age>30;

SELECT name, age
FROM person
WHERE age != 27;

SELECT *
FROM person
WHERE favorite_color != 'red';

SELECT *
FROM person
WHERE favorite_color != 'red'
AND favorite_color != 'blue';

SELECT *
FROM person
WHERE favorite_color = 'orange'
OR favorite_color = 'green';

SELECT *
FROM person
WHERE favorite_color IN('orange', 'green', 'blue');

SELECT *
FROM person
WHERE favorite_color IN('yellow', 'purple');


////////////Table Orders//////////////
CREATE TABLE orders(
    order_id SERIAL PRIMARY KEY,
    person_id INTEGER,
  	product_name VARCHAR(50),
    product_price NUMERIC,
    quantity INTEGER
);

INSERT INTO orders
(person_id, product_name, product_price, quantity)
VALUES
(1, 'toy', 1.50, 6),
(2, 'toy2', 2.50, 7),
(3, 'toy3', 3.50, 8),
(4, 'toy4', 4.50, 9),
(5, 'toy5', 5.50, 10);

SELECT *
FROM orders;

SELECT sum(quantity)
FROM orders;

SELECT sum(product_price * quantity)
FROM orders;

SELECT sum(product_price * quantity)
FROM orders
WHERE person_id = 1;

/////////Table artist//////////

INSERT INTO artist
(name)
VALUES
('Bob'),
('Kevin'),
('Dave');

SELECT *
FROM artist
ORDER BY name DESC
LIMIT 10;

SELECT *
FROM artist
ORDER BY name ASC
LIMIT 5;

SELECT *
FROM artist
WHERE name
LIKE 'Black%';

SELECT *
FROM artist
WHERE name
LIKE '%Black%';

/////////Table employee//////////

SELECT first_name, last_name
FROM employee
WHERE city = 'Calgary';

SELECT max(birth_date)
FROM employee;

SELECT min(birth_date)
FROM employee;

SELECT * 
FROM employee
WHERE reports_to = 2;

SELECT count(*)
FROM employee
WHERE city = 'Lethbridge';

/////////Table invoice/////////

SELECT count(*)
FROM invoice
WHERE billing_country = 'USA'

SELECT (*)
FROM invoice
ORDER BY total DESC
LIMIT 1;

SELECT *
FROM invoice
ORDER BY total DESC
LIMIT 1;
/////////OR///////
SELECT max(total) 
FROM invoice;

SELECT min(total)
FROM invoice;

SELECT *
FROM invoice
WHERE total > 5;

SELECT count(*)
FROM invoice
WHERE total < 5;

SELECT count(*)
FROM invoice
WHERE billing_state IN('CA', 'TX', 'AZ');

SELECT avg(total)
FROM invoice;

SELECT sum(total)
FROM invoice;