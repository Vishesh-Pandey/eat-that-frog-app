-- Active: 1676230278431@@127.0.0.1@3306
create database eat_that_frog_app;

use eat_that_frog_app;

create table todos (id int AUTO_INCREMENT PRIMARY KEY , title VARCHAR(255) , description VARCHAR(1000) , type VARCHAR(1));