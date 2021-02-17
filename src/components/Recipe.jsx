import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Recipe.css";

function Recipe(props) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const params = useParams();

  useEffect(() => {
    if (props.recipes.length && params.id) {
      const foundRecipe = props.recipes.find((rec) => params.id === rec.id);

      if (foundRecipe) {
        setTitle(foundRecipe.fields.title);
        setIngredients(foundRecipe.fields.ingredients.split(";"));
        setSteps(foundRecipe.fields.steps.split(";"));
      }
    }
  }, [props.recipes, params.id]);

  return (
    <div className="recipe">
      <h3>{title}</h3>
      <div>
        <h3>Ingredients:</h3>
        <div>
          {ingredients.map((ingredient, index) => (
            <p key={index}>- {ingredient}</p>
          ))}
        </div>

        <h3>Steps:</h3>
        {steps.map((step, i) => (
          <p key={i}>
            {i + 1}. {step}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Recipe;
