import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Recipe(props) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const params = useParams();
  console.log(params);

  useEffect(() => {
    if (props.recipes.length && params.id) {
      const foundRecipe = props.recipes.find((rec) => params.id === rec.id);
      console.log(foundRecipe);

      if (foundRecipe) {
        setTitle(foundRecipe.fields.title);
        setIngredients(foundRecipe.fields.ingredients);
        setSteps(foundRecipe.fields.steps);
        console.log(foundRecipe);
      }
    }
  }, [props.recipes, params.id]);

  return (
    <div className="recipe">
      <h3>{title}</h3>
      <h3>Ingredients:</h3>
      <p>{ingredients}</p>
      <h3>Steps:</h3>
      <p>{steps}</p>
    </div>
  );
}

export default Recipe;
