import { Link } from "react-router-dom";
import "./recipes.css";

function Recipes(props) {
  const { title, description, photo } = props.recipe.fields;
  console.log(props.recipe);
  return (
    <div className="recipe" style={{ backgroundImage: `url("${photo}")` }}>
      <img src={photo} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={`/recipes/${props.recipe.id}`}>View Recipe</Link>
    </div>
  );
}

export default Recipes;
