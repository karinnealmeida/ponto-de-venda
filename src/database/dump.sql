create database pdv;

create table if not exists usuarios (
id serial primary key,
nome varchar (50),
email varchar (50) unique not null,
senha varchar (150) not null
);

create table if not exists categorias (
    id serial primary key,
    descricao text
);