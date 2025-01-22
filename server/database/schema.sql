create table users (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(64) not null
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

create table contains (
  id int unsigned primary key auto_increment not null,
  name varchar(255) not null
);

create table books (
  id int unsigned primary key auto_increment not null,
  resume text not null,
  illu varchar(255) not null,
  contains_id int unsigned not null,
  foreign key(contains_id) references contains(id)
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

create table links (
  id int unsigned primary key auto_increment not null,
  text text not null,
  path varchar(255) not null
); 

create table episodes (
  id int unsigned primary key auto_increment not null,
  is_free boolean default false,
  to_register boolean default false,
  books_id int unsigned not null,
  foreign key(books_id) references books(id),
  contains_id int unsigned not null,
  foreign key(contains_id) references contains(id)
);

create table episodes_links (
  episodes_id int unsigned not null,
  foreign key(episodes_id) references episodes(id),
  links_id int unsigned not null,
  foreign key(links_id) references links(id)
);

create table illu (
  id int unsigned primary key auto_increment not null,
  url varchar(255) not null,
  episodes_id int unsigned not null,
  foreign key(episodes_id) references episodes(id)
);

create table paragraphs (
  id int unsigned primary key auto_increment not null,
  content text not null,
  episodes_id int unsigned not null,
  foreign key(episodes_id) references episodes(id)
);

create table save (
  date timestamp,
=======
  id int unsigned primary key auto_increment not null,
  users_id int unsigned not null,
  foreign key(users_id) references users(id)
);

create table admins (
  id int unsigned primary key auto_increment not null,
  users_id int unsigned not null,
  foreign key(users_id) references users(id)
);

create table books (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  resume text not null,
  illustration varchar(255) not null
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

create table choices (
  id int unsigned primary key auto_increment not null,
  text text not null,
  path varchar(255) not null
); 

create table episodes (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  types varchar(255) not null,
  is_free boolean default false,
  to_register boolean default false,
  books_id int unsigned not null,
  foreign key(books_id) references books(id)
);

create table episodes_choices (
  episodes_id int unsigned not null,
  foreign key(episodes_id) references episodes(id),
  choices_id int unsigned not null,
  foreign key(choices_id) references choices(id)
);

create table illustrations (
  id int unsigned primary key auto_increment not null,
  urls varchar(255) not null,
  episodes_id int unsigned not null,
  foreign key(episodes_id) references episodes(id)
);

create table paragraphs (
  id int unsigned primary key auto_increment not null,
  content text not null,
  episodes_id int unsigned not null,
  foreign key(episodes_id) references episodes(id)
);

create table progressions (
  dates TIMESTAMP default current_timestamp,
  episodes_id int unsigned not null,
  foreign key(episodes_id) references episodes(id),
  clients_id int unsigned not null,
  foreign key(clients_id) references clients(id)
);

create table glossary (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  definition text not null
)
