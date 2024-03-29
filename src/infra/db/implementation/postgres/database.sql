CREATE TABLE temperature(  
    id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    date TIMESTAMP NOT NULL,
    location VARCHAR (255) UNIQUE NOT NULL,
    temperature INT NOT NULL
)

CREATE TABLE humidity(
    id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    location VARCHAR (255) UNIQUE NOT NULL,
    date TIMESTAMP NOT NULL, 
    humidity INT NOT NULL
) 