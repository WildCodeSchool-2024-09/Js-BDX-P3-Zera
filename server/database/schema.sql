create table users (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(64) not null,
  hashed_password varchar(255) not null
);

create table clients (
  id int unsigned primary key auto_increment not null,
  users_id int unsigned not null,
  foreign key(users_id) references users(id)
  ON DELETE CASCADE
);

create table admins (
  id int unsigned primary key auto_increment not null,
  users_id int unsigned not null,
  foreign key(users_id) references users(id)
  ON DELETE CASCADE
);

create table books (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  resume text not null,
  illustration LONGTEXT not null
);

create table books_clients (
  id int unsigned primary key auto_increment not null,
  date timestamp,
  price decimal not null,
  books_id int unsigned not null,
  foreign key(books_id) references books(id),
  clients_id int unsigned not null,
  foreign key(clients_id) references clients(id)
);

create table episodes (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  to_register boolean default false,
  type varchar(255) not null,
  books_id int unsigned not null,
  is_free boolean default false,
  foreign key(books_id) references books(id)
);

create table choices (
  id int unsigned primary key auto_increment not null,
  text text not null,
  episodes_source_id int unsigned not null,
  foreign key(episodes_source_id) references episodes(id),
  episodes_target_id int unsigned not null,
  foreign key(episodes_target_id) references episodes(id)
); 

create table illustrations (
  id int unsigned primary key auto_increment not null,
  url varchar(255) not null,
  episodes_id int unsigned not null,
  foreign key(episodes_id) references episodes(id)
  ON DELETE CASCADE
);

create table paragraphs (
  id int unsigned primary key auto_increment not null,
  content text not null,
  episodes_id int unsigned not null,
  foreign key(episodes_id) references episodes(id)
  ON DELETE CASCADE
);

create table progression (
  date timestamp,
  episodes_id int unsigned not null,
  foreign key(episodes_id) references episodes(id),
  clients_id int unsigned not null,
  foreign key(clients_id) references clients(id)
);

CREATE TABLE glossary (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  word VARCHAR(255) NOT NULL,
  definition TEXT NOT NULL
);