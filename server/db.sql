/* typed psql commands here for references */

CREATE TABLE products (
    id INT, 
    name TEXT,
    price INT,
    on_sale BOOLEAN
);
-- BIGSERIAL increments by 1 each time its used
-- NOT NULL means it cant be empty
-- PRIMARY KEY makes the entry unique
CREATE TABLE restaurants(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL, 
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check(price_range>=1 and price_range <= 5)
)


INSERT INTO restaurants (id, name, location, price_range) values (123, 'McDonalds', 'New York', 3 )

INSERT INTO reviews (id, restaurant_id, name, review, rating) values (4, 3, 'John','Very good food, really satisifed!', 5 );

select * from restaurants inner join reviews on restaurants.id = reviews.restaurant_id;

select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating), 1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id;


--references points to restaurant table id
CREATE TABLE reviews(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id  BIGINT  NOT NULL REFERENCES restaurants(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check(rating >= 1 and rating <= 5) 
);