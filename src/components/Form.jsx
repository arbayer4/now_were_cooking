import axios from "axios";
import { useState } from "react";
import { baseURL, config } from "../services";
import { useHistory } from "react-router-dom";

function Form(props) {
  const [title, setTitle] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [ingredientsList, setIngredientsList] = useState([]);
  const [ingredientCount, setIngredientCount] = useState(1);

  function addIngredient(e) {
    e.preventDefault();
    setIngredientsList([...ingredientsList, ingredient]);
    setIngredientCount(ingredientCount + 1);
    setIngredient("");
  }

  return (
    <form>
      <label htmlFor="title">Recipe Name</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div>
        {ingredientsList.map((ingr) => (
          <p>-{ingr}</p>
        ))}
      </div>
      <label htmlFor="ingredients">Ingredient {ingredientCount}</label>
      <input
        type="text"
        id="ingredients"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
      />
      <button onClick={addIngredient}>Add Ingredient!</button>
    </form>
  );
}

export default Form;
