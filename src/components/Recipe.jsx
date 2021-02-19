import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Recipe.css";

function Recipe(props) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const [photoURL, setPhotoURL] = useState("");
  const params = useParams();

  useEffect(() => {
    if (props.recipes.length && params.id) {
      const foundRecipe = props.recipes.find((rec) => params.id === rec.id);

      if (foundRecipe) {
        setTitle(foundRecipe.fields.title);
        setIngredients(foundRecipe.fields.ingredients.split(";"));
        setSteps(foundRecipe.fields.steps.split(";"));
        setPhotoURL(foundRecipe.fields.photoURL);
      }
    }
  }, [props.recipes, params.id]);

  return (
    <div className="detailed-recipe-container">
      <h3 className="detailed-recipe-title">{title}</h3>
      <div className="detailed-recipe-photo">
        <img src={photoURL} alt={title} />
      </div>

      <div className="detailed-recipe-ingredients">
        <h3>Ingredients:</h3>
        {ingredients.map((ingredient, index) => (
          <p key={index}>- {ingredient}</p>
        ))}
      </div>
      <div className="detailed-recipe-steps">
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
