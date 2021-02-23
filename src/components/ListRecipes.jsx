import Recipes from "./Recipes";
import { useState } from "react";
import "./ListRecipes.css";

function ListRecipes(props) {
  const [type, setType] = useState("");
  const [vegetarian, setVegetarian] = useState(false);

  const filteredRecipes = props.recipes
    .filter((recipe) => {
      if (type) {
        return recipe.fields.types.includes(type);
      }
      return true;
    })
    .filter((recipe) => {
      if (vegetarian) {
        return recipe.fields.isVegetarian;
      }
      return true;
    });

  if (props.recipes) {
    return (
      <div className="list-recipes-container">
        <div className="filters-container">
          <h4>Filters:</h4>
          <div className="filters">
            <input
              type="checkbox"
              id="filter-is-veggie"
              value={vegetarian}
              onChange={(e) => setVegetarian(e.target.checked)}
            />
            <label htmlFor="filter-is-veggie">Vegetarian</label>
            <div className="meal-types">
              <input
                type="radio"
                name="type"
                id="radio-breakfast"
                checked={type === "Breakfast"}
                value="Breakfast"
                onChange={() => setType("Breakfast")}
              />
              <label htmlFor="radio-breakfast">Breakfast</label>
              <input
                type="radio"
                name="type"
                id="radio-lunch"
                checked={type === "Lunch"}
                value="Lunch"
                onChange={() => setType("Lunch")}
              />
              <label htmlFor="radio-breakfast">Lunch</label>
              <input
                type="radio"
                name="type"
                id="radio-dinner"
                checked={type === "Dinner"}
                value="Dinner"
                onChange={() => setType("Dinner")}
              />
              <label htmlFor="radio-dinner">Dinner</label>
              <input
                type="radio"
                name="type"
                id="radio-dessert"
                checked={type === "Dessert"}
                value="Dessert"
                onChange={() => setType("Dessert")}
              />
              <label htmlFor="radio-dessert">Dessert</label>
              <input
                type="radio"
                name="type"
                id="radio-snack"
                checked={type === "Snack"}
                value="Snack"
                onChange={() => setType("Snack")}
              />
              <label htmlFor="radio-snack">Snack</label>
            </div>
          </div>
        </div>

        <div className="recipes-container">
          {filteredRecipes.map((recipe) => (
            <Recipes key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    );
  } else return <h1>No Recipe Data, Please Try Again Shortly</h1>;
}

export default ListRecipes;
