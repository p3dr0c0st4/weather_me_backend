CREATE DATABASE Weather_me

CREATE TABLE temperature(
id SERIAL PRIMARY KEY,
location ,
date , 
temperature
)

CREATE TABLE humidity(
id SERIAL PRIMARY KEY,
location ,
date , 
humidity
) 