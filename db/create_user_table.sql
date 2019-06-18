create table user_table(
    id serial PRIMARY key,
    email VARCHAR(45),
    password VARCHAR(100), {/*Hashed password is going to be very long!!!*/}
    first_name VARCHAR(25),
    last_name VARCHAR(25),
    username VARCHAR(25),
    profile_pic text
)

