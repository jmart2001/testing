Use WhatToCook;
create table USER (
	User_id INT auto_increment primary key, 
    Username varchar(255) NOT NULL,
    Email varchar(255) NOT NULL,
    Password varchar(255) NOT NULL,
    Registration_date datetime NOT NULL
);
create table UserDietaryRestrictions (
	Dietary_restriction_id int auto_increment primary key,
    User_id int,
    Dietary_restriction varchar(255) not null,
    Description Text,
    foreign key (User_id) references User(User_id)
);
create table Ingredient (
	Ingredient_id int auto_increment primary key,
    Name varchar(255) not null
);
create table FridgeIngredient (
	Fridge_ingredient_id int auto_increment primary key,
    User_id int, 
    Ingredient_id int,
    Quantity Float not null,
    foreign key (User_id) references User(User_id),
    foreign key (Ingredient_id) references Ingredient(Ingredient_id)
);
CREATE TABLE Recipe (
    Recipe_id INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    Description TEXT,
    Instructions TEXT NOT NULL,
    Prep_time INT,
    Total_time INT,
    Servings INT,
    Created_by VARCHAR(255)
);
CREATE TABLE Recipe_Ingredient (
    Recipe_id INT,
    Ingredient_id INT,
    Quantity FLOAT,
    FOREIGN KEY (Recipe_id) REFERENCES Recipe(Recipe_id),
    FOREIGN KEY (Ingredient_id) REFERENCES Ingredient(Ingredient_id)
);
CREATE TABLE Tag (
    Tag_id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL
);
CREATE TABLE Recipe_Tag (
    Recipe_id INT,
    Tag_id INT,
    FOREIGN KEY (Recipe_id) REFERENCES Recipe(Recipe_id),
    FOREIGN KEY (Tag_id) REFERENCES Tag(Tag_id)
);
CREATE TABLE Store (
    Store_id INT AUTO_INCREMENT PRIMARY KEY,
    Store_Name VARCHAR(255) NOT NULL,
    Location VARCHAR(255) NOT NULL
);
CREATE TABLE Store_Ingredient_Price (
    price_id INT AUTO_INCREMENT PRIMARY KEY,
    Store_id INT,
    Ingredient_id INT,
    Price FLOAT,
    FOREIGN KEY (Store_id) REFERENCES Store(Store_id),
    FOREIGN KEY (Ingredient_id) REFERENCES Ingredient(Ingredient_id)
);
CREATE TABLE ShoppingList (
    Shopping_list_id INT AUTO_INCREMENT PRIMARY KEY,
    User_id INT,
    Store_id INT,
    Created_date DATETIME,
    FOREIGN KEY (User_id) REFERENCES User(User_id),
    FOREIGN KEY (Store_id) REFERENCES Store(Store_id)
);
CREATE TABLE ShoppingList_Item (
    Shopping_list_item_id INT AUTO_INCREMENT PRIMARY KEY,
    Shopping_list_id INT,
    Ingredient_id INT,
    Quantity FLOAT,
    FOREIGN KEY (Shopping_list_id) REFERENCES ShoppingList(Shopping_list_id),
    FOREIGN KEY (Ingredient_id) REFERENCES Ingredient(Ingredient_id)
);
