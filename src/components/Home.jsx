import { Link } from "react-router-dom";
import Search from "./Search";
import "./Home.css";

function Home(props) {
  // const recipe = props.recipes[0].fields;
  // console.log(recipe);
  //Starting with just generating a random recipe. Eventually would like to write a
  //function to choose a recipe based on day. Example Taco Tuesday, Meatless Monday, etc
  const random = Math.floor(Math.random() * props.recipes.length);
  const featured = props.recipes[random];
  const { title, description, photoURL } = featured.fields;
  //Next up-Maybe make photo a background, then style from there.
  return (
    <div className="home-container">
      <h1>Recipe of the Day:</h1>
      <Link to={`/recipes/${featured.id}`}>
        <div
          style={{ backgroundImage: `url(${photoURL})` }}
          id="featured-recipes-container"
        >
          <h1>{title}</h1>
          {/* <img src={photoURL} alt={title} /> */}
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default Home;
