import { Link } from "react-router-dom";
import "./Recipes.css";

function Recipes(props) {
  const { title, description, photo } = props.recipe.fields;
  const myStyle = {
    backgroundImage: `url("${photo}")`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="recipe-list-item" style={myStyle}>
      {/* <img src={photo} alt={title} /> */}
      <Link to={`/recipes/${props.recipe.id}`}>{title}</Link>
      <p>{description}</p>
    </div>
  );
}

export default Recipes;
