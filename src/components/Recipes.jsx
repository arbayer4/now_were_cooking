import { Link } from "react-router-dom";
import "./recipes.css";

function Recipes(props) {
  const { title, description, photo } = props.recipe.fields;
  console.log(props.recipe);
  return (
    <div className="recipe" style={{ backgroundImage: `url("${photo}")` }}>
      {/* <img src={photo} alt={title} /> */}
      <Link to={`/recipes/${props.recipe.id}`}>{title}</Link>
      <p>{description}</p>
    </div>
  );
}

export default Recipes;
