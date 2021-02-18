import { Link } from "react-router-dom";
import "./Recipes.css";

function Recipes(props) {
  const { title, description, photoURL } = props.recipe.fields;
  return (
    // <div className="recipe-list-item">
    <Link to={`/recipes/${props.recipe.id}`} className="recipe-list-item">
      <img src={photoURL} alt={title} className="recipe-card-photo" />
      <h3 className="recipe-card-title">{title}</h3>
      <p className="recipe-card-description">{description}</p>
    </Link>
    // </div>
  );
}

export default Recipes;
