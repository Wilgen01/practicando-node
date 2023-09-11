create database moviesdb;

use moviesdb;

create table movie (
	id BINARY(16) primary key default (UUID_TO_BIN(UUID())),
	title VARCHAR(255) not null,
	year INT not null,
	director VARCHAR(255) not null,
	duration INT not null,
	poster TEXT,
	rate DECIMAL(2, 1) unsigned not null
);

create table genre (
	id INT auto_increment primary key,
	name VARCHAR(50) not null unique
);

create table movie_genre (
	movie_id BINARY(16) references movies(id),
	genre_id INT references gere(id),
	primary key (movie_id, genre_id)
)

insert into genre (name) values
('Drama'),
('Action'),
('Crimen'),
('Sci-fi'),
('Romance')

INSERT INTO movie (title, year, director, duration, poster, rate)
VALUES
  ('The Shawshank Redemption', 1994, 'Frank Darabont', 142, 'https://i.ebayimg.com/images/g/4goAAOSwMyBe7hnQ/s-l1200.webp', 9.3),
  ('The Godfather', 1972, 'Francis Ford Coppola', 175, 'https://i.ebayimg.com/images/g/3RQAAOSw~2he~AdJ/s-l1600.webp', 9.2),
  ('Pulp Fiction', 1994, 'Quentin Tarantino', 154, 'https://i.ebayimg.com/images/g/mVAAAOSwR29c~2wR/s-l1600.webp', 8.9),
  ('The Dark Knight', 2008, 'Christopher Nolan', 152, 'https://i.ebayimg.com/images/g/rEoAAOSw8dVeZ9Q2/s-l1600.webp', 9.0),
  ('Schindler''s List', 1993, 'Steven Spielberg', 195, 'https://i.ebayimg.com/images/g/eKwAAOSwz3Je~XKp/s-l1600.webp', 8.9);
 
 
INSERT INTO movie_genre (movie_id, genre_id)
VALUES (
    (SELECT id FROM movie WHERE title = 'The Shawshank Redemption'),
    (SELECT id FROM genre WHERE name = 'Drama')
),
(
    (SELECT id FROM movie WHERE title = 'The Godfather'),
    (SELECT id FROM genre WHERE name = 'Action')
),
(
    (SELECT id FROM movie WHERE title = 'Pulp Fiction'),
    (SELECT id FROM genre WHERE name = 'Drama')
),
(
    (SELECT id FROM movie WHERE title = 'The Dark Knight'),
    (SELECT id FROM genre WHERE name = 'Sci-fi')
),
(
    (SELECT id FROM movie WHERE title = 'Schindler''s List'),
    (SELECT id FROM genre WHERE name = 'Drama')
);


select *, bin_to_uuid(id) id from movie m 
