CREATE TABLE Recipes (
    recipe_id INT PRIMARY KEY,
    name VARCHAR(255),
    category_id INT,
    instructions TEXT,
    image_URL VARCHAR(255),
    FOREIGN KEY (category_id) REFERENCES Categories(category_id)
);
CREATE TABLE Categories (
    category_id INT PRIMARY KEY, 
    name VARCHAR(255)
);
CREATE TABLE Ingredients (
    ingredients_id INT PRIMARY KEY,
    name VARCHAR(255),
    quantity DECIMAL(10,2),
    unit VARCHAR(50)
);

CREATE TABLE Recipe_Ingredients (
    recipe_id INT,
    ingredients_id INT, 
    quantity DECIMAL(10,2),
    notes TEXT, 
    PRIMARY KEY (recipe_id,ingredients_id),
    FOREIGN KEY(recipe_id)REFERENCES Recipes(recipe_id),
    FOREIGN KEY(ingredients_id) REFERENCES Ingredients(ingredients_id)
);