import axios from "axios";
import { useState } from "react";
import { baseURL, config } from "../services";
import { useHistory } from "react-router-dom";
import "./Form.css";

function Form(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [ingredient, setIngredient] = useState("");
  const [ingredientsList, setIngredientsList] = useState([]);
  const [ingredientCount, setIngredientCount] = useState(1);
  const [step, setStep] = useState("");
  const [stepsList, setStepsList] = useState([]);
  const [stepCount, setStepCount] = useState(1);
  const [photoURL, setPhotoURL] = useState("");
  const [originalSource, setOriginalSource] = useState("");
  const history = useHistory();

  function addIngredient(e) {
    e.preventDefault();
    setIngredientsList([...ingredientsList, ingredient]);
    if (ingredient.length) {
      setIngredientCount(ingredientCount + 1);
    }

    setIngredient("");
  }
  function addStep(e) {
    e.preventDefault();
    setStepsList([...stepsList, step]);
    setStepCount(stepCount + 1);
    setStep("");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      title,
      description,
      isVegetarian,
      ingredients: ingredientsList.join(";"),
      steps: stepsList.join(";"),
      originalSource,
      photoURL,
    };
    // console.log(fields);
    await axios.post(baseURL, { fields }, config);
    props.setToggleFetch((curr) => !curr);
    history.push("/recipes");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label htmlFor="recipe-title">Recipe Name:</label>
      <input
        type="text"
        id="recipe-title"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="brief-description">Brief Description:</label>
      <textarea
        type="text"
        id="brief-description"
        rows="6"
        cols="22"
        maxLength="200"
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="is-veggie-box">Vegetarian?</label>
      <input
        type="checkbox"
        id="is-veggie-box"
        value={isVegetarian}
        onChange={(e) => setIsVegetarian(e.target.checked)}
      />
      <div>
        {ingredientsList.map((ingr, index) => (
          <p key={index}>-{ingr}</p>
        ))}
      </div>
      <label htmlFor="ingredients">Ingredient {ingredientCount}:</label>
      <input
        type="text"
        name="ingredients"
        id="ingredients"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
      />
      <button onClick={addIngredient}>Add Ingredient!</button>
      <label htmlFor="form-steps">Step {stepCount}</label>
      <input
        type="text"
        id="form-steps"
        value={step}
        onChange={(e) => setStep(e.target.value)}
      />
      <button type="button" onClick={addStep}>
        Add Steps!
      </button>
      <label htmlFor="form-photo">Photo Url:</label>
      <input
        type="text"
        id="form-photo"
        value={photoURL}
        onChange={(e) => setPhotoURL(e.target.value)}
      />
      <label htmlFor="source">Recipe Source</label>
      <input
        type="text"
        id="souce"
        value={originalSource}
        onChange={(e) => setOriginalSource(e.target.value)}
      />
      <button id="form-submit" type="submit">
        Add Recipe!
      </button>
    </form>
  );
}

export default Form;
