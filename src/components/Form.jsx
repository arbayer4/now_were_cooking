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
  const [types, setTypes] = useState([]);
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
  function addType(meal) {
    setTypes((arr) => [...types, meal].filter((type) => type.length > 0));
  }
  function removeType(meal) {
    setTypes((arr) => [...types].filter((type) => type !== meal));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!types.length) {
      setTypes([...types, "none"]);
    }

    const fields = {
      title,
      description,
      isVegetarian,
      ingredients: ingredientsList.join(";"),
      steps: stepsList.join(";"),
      originalSource,
      photoURL,
      types,
    };
    await axios.post(baseURL, { fields }, config);
    props.setToggleFetch((curr) => !curr);
    history.push("/recipes");
  };

  return (
    <div className="add-recipe-container">
      <h1 className="form-header">Add Recipe:</h1>
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
        <div className="button-label-div">
          <input
            type="checkbox"
            id="is-veggie-box"
            value={isVegetarian}
            onChange={(e) => setIsVegetarian(e.target.checked)}
          />
          <label htmlFor="is-veggie-box">Vegetarian?</label>
        </div>

        <label htmlFor="ingredients">Ingredient {ingredientCount}:</label>
        <input
          type="text"
          name="ingredients"
          id="ingredients"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
        />
        <button onClick={addIngredient} type="button">
          Add Ingredient!
        </button>
        <label htmlFor="form-steps">Step {stepCount}</label>
        <textarea
          type="text"
          id="form-steps"
          rows="6"
          maxLength="200"
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
        <p>Select all that apply:</p>
        <div className="type-container">
          <div className="button-label-div">
            <input
              type="checkbox"
              id="dinner-box"
              // value={dinner}
              onChange={(e) =>
                e.target.checked ? addType("Dinner") : removeType("Dinner")
              }
            />
            <label htmlFor="dinner-box">Dinner</label>
          </div>
          <div className="button-label-div">
            <input
              type="checkbox"
              id="lunch-box"
              // value={lunch}
              onChange={(e) =>
                e.target.checked ? addType("Lunch") : removeType("Lunch")
              }
            />
            <label htmlFor="lunch-box">Lunch</label>
          </div>
          <div className="button-label-div">
            <input
              type="checkbox"
              id="breakfast-box"
              // value={breakfast}
              onChange={(e) =>
                e.target.checked
                  ? addType("Breakfast")
                  : removeType("Breakfast")
              }
            />
            <label htmlFor="breakfast-box">Breakfast</label>
          </div>
          <div className="button-label-div">
            <input
              type="checkbox"
              id="dessert-box"
              // value={dessert}
              onChange={(e) =>
                e.target.checked ? addType("Dessert") : removeType("Dessert")
              }
            />
            <label htmlFor="dessert-box">Dessert</label>
          </div>
          <div className="button-label-div">
            <input
              type="checkbox"
              id="snack-box"
              // value={snack}
              onChange={(e) =>
                e.target.checked ? addType("Snack") : removeType("Snack")
              }
            />
            <label htmlFor="snack-box">Snack</label>
          </div>
        </div>
        <button id="form-submit" type="submit">
          Add Recipe!
        </button>
      </form>
      <div className="form-ingredients-list">
        <h3>Your Ingredients:</h3>
        {ingredientsList.map((ingr, index) => (
          <p key={index}>-{ingr}</p>
        ))}
      </div>
      <div className="form-steps-list">
        <h3>Your Directions:</h3>
        {stepsList.map((step, index) => (
          <p key={index}>
            {index + 1}. {step}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Form;
